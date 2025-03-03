import { resolve } from "@bonfida/spl-name-service"
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js"
import type { PhantomProvider } from "@solana/wallet-adapter-wallets"

import { RPC_URL } from "@/lib/constants"

export const MEMO_PROGRAM_ID = "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"

export const createConnection = () => new Connection(RPC_URL)

export interface TransferWithMemoParams {
  /** Target address */
  to: string
  /** Transfer amount (in SOL) */
  amount: number
  /** Attached message */
  memo: string
}

export class SolanaUtils {
  private static connection = new Connection(RPC_URL)

  static async resolveDomainToAddress(domain: string): Promise<string | null> {
    const owner = await resolve(this.connection, domain)
    return owner.toBase58()
  }

  static async getBalance(address: string): Promise<number> {
    try {
      let publicKeyStr = address

      if (address.toLowerCase().endsWith(".sol")) {
        const resolvedAddress = await this.resolveDomainToAddress(address)
        if (!resolvedAddress) {
          throw new Error("Failed to resolve domain name")
        }
        publicKeyStr = resolvedAddress
      }

      const balance = await this.connection.getBalance(new PublicKey(publicKeyStr))
      return balance / LAMPORTS_PER_SOL
    } catch (error) {
      console.error("Failed to fetch balance:", error)
      return 0
    }
  }

  static async getPhantomProvider(): Promise<PhantomProvider | null> {
    if ("phantom" in window) {
      const provider = window.phantom?.solana
      if (provider?.isPhantom) {
        if (!provider.publicKey) {
          try {
            await provider.connect()
          } catch (err) {
            console.error("Failed to connect to Phantom wallet:", err)
            return null
          }
        }
        return provider
      }
    }

    if (window.solana?.isPhantom) {
      if (!window.solana.publicKey) {
        try {
          await window.solana.connect()
        } catch (err) {
          console.error("Failed to connect to Phantom wallet:", err)
          return null
        }
      }
      return window.solana
    }

    return null
  }

  static async sendTransferWithMemo(params: TransferWithMemoParams): Promise<string | null> {
    const provider = await this.getPhantomProvider()
    if (!provider) {
      throw new Error("Phantom wallet not found or connection rejected")
    }

    if (!provider.publicKey) {
      throw new Error("Wallet not connected")
    }

    const { to, amount, memo } = params
    const fromPubkey = provider.publicKey
    const toPubkey = new PublicKey(to)

    const balance = await this.connection.getBalance(fromPubkey)
    const requiredAmount = amount * LAMPORTS_PER_SOL
    if (balance < requiredAmount) {
      throw new Error(`Insufficient balance. You have ${balance / LAMPORTS_PER_SOL} SOL but need ${amount} SOL`)
    }

    try {
      const transaction = new Transaction()
      transaction.feePayer = fromPubkey

      const transferInstruction = SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: requiredAmount,
      })

      const memoInstruction = new TransactionInstruction({
        keys: [{ pubkey: fromPubkey, isSigner: true, isWritable: true }],
        programId: new PublicKey(MEMO_PROGRAM_ID),
        data: Buffer.from(memo, "utf-8"),
      })

      transaction.add(transferInstruction)
      transaction.add(memoInstruction)

      const { blockhash } = await this.connection.getLatestBlockhash("confirmed")
      transaction.recentBlockhash = blockhash

      const signedTransaction = await provider.signTransaction(transaction)

      const signature = await this.connection.sendRawTransaction(signedTransaction.serialize(), {
        skipPreflight: false,
        maxRetries: 5,
        preflightCommitment: "confirmed",
      })

      console.log("Transaction sent successfully:", signature)

      return signature
    } catch (error: unknown) {
      console.error("Transaction error:", error)
      if (error instanceof Error) {
        if (error.toString().includes("insufficient lamports")) {
          throw new Error(`Insufficient balance. Please make sure you have enough SOL to cover the transaction.`)
        }
        if (error.toString().includes("Transaction simulation failed")) {
          throw new Error(`Transaction failed. Please try again.`)
        }
      }
      throw error
    }
  }
}

