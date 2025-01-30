import type {
  PrivyClient,
  SolanaSignTransactionRpcInputType,
  SolanaSignMessageRpcInputType,
} from "@privy-io/server-auth"
import type { PublicKey, Transaction, VersionedTransaction, Signer } from "@solana/web3.js"
import type { Wallet } from "@solana/wallet-adapter-base"

export class PrivyEmbeddedWallet implements Wallet {
  private privyClient: PrivyClient
  publicKey: PublicKey
  secretKey: Uint8Array
  readonly payer: Signer
  readonly signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>
  readonly signMessage: (message: Uint8Array) => Promise<Uint8Array>

  constructor(privyClient: PrivyClient, publicKey: PublicKey) {
    try {
      this.privyClient = privyClient
      this.publicKey = publicKey
      this.secretKey = new Uint8Array(0) // Secret key is not needed
      this.payer = {
        publicKey: this.publicKey,
        secretKey: this.secretKey,
      }
      this.signAllTransactions = this.signAllTransactionsMethod.bind(this)
      this.signMessage = this.signMessageMethod.bind(this)
    } catch (error) {
      throw new Error(`Failed to initialize wallet: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T> {
    try {
      const request: SolanaSignTransactionRpcInputType<T> = {
        address: this.publicKey.toBase58(),
        chainType: "solana",
        method: "signTransaction",
        params: {
          transaction,
        },
      }
      const { data } = await this.privyClient.walletApi.rpc(request)
      return data.signedTransaction as T
    } catch (error) {
      throw new Error(`Failed to sign transaction: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  private async signAllTransactionsMethod<T extends Transaction | VersionedTransaction>(
    transactions: T[],
  ): Promise<T[]> {
    try {
      return Promise.all(transactions.map((tx) => this.signTransaction(tx)))
    } catch (error) {
      throw new Error(`Failed to sign transactions: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  private async signMessageMethod(message: Uint8Array): Promise<Uint8Array> {
    try {
      const request: SolanaSignMessageRpcInputType = {
        address: this.publicKey.toBase58(),
        chainType: "solana",
        method: "signMessage",
        params: {
          message: Buffer.from(message).toString("base64"),
        },
      }
      const { data } = await this.privyClient.walletApi.rpc(request)
      return new Uint8Array(Buffer.from(data.signature, "base64"))
    } catch (error) {
      throw new Error(`Failed to sign message: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }
}

