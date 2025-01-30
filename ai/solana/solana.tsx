import { z } from "zod"
import * as helius from "@/lib/solana/helius"
import { SolanaUtils, type TransferWithMemoParams } from "@/lib/solana/utils"
import { generateEncryptedKeyPair, decryptPrivateKey } from "@/lib/solana/wallet-encryption"
//import { wallet } from "./wallet" //Removed as per update 1
//import { swap } from "./swap" //Removed as per update 1
//import { token } from "./token" //Removed as per update 1
import { dexscreenerTools } from "./dexscreener"
import { magicEdenTools } from "./magic-eden"
import { metaplexTools } from "./metaplex"
import { definedTools } from "./defined-fi"
import { birdeyeTools } from "./birdeye"

export const solanaTools = {
  //...wallet, //Removed as per update 1
  ...dexscreenerTools,
  ...magicEdenTools,
  ...metaplexTools,
  ...definedTools,
  ...birdeyeTools,
  getWalletBalance: {
    displayName: "💰 Get Wallet Balance",
    description: "Fetch the balance of a Solana wallet address or .sol domain",
    parameters: z.object({
      address: z.string().describe("The Solana wallet address or .sol domain"),
    }),
    execute: async ({ address }: { address: string }) => {
      try {
        const balance = await SolanaUtils.getBalance(address)
        return { success: true, data: balance }
      } catch (error) {
        return { success: false, error: String(error) }
      }
    },
  },
  resolveDomain: {
    displayName: "🔍 Resolve .sol Domain",
    description: "Resolve a .sol domain to its Solana address",
    parameters: z.object({
      domain: z.string().describe("The .sol domain to resolve"),
    }),
    execute: async ({ domain }: { domain: string }) => {
      try {
        const address = await SolanaUtils.resolveDomainToAddress(domain)
        return { success: true, data: address }
      } catch (error) {
        return { success: false, error: String(error) }
      }
    },
  },
  sendTransferWithMemo: {
    displayName: "💸 Send SOL Transfer with Memo",
    description: "Send a SOL transfer with an attached memo",
    parameters: z.object({
      to: z.string().describe("The recipient's Solana address or .sol domain"),
      amount: z.number().positive().describe("The amount of SOL to send"),
      memo: z.string().describe("The memo to attach to the transaction"),
    }),
    execute: async ({ to, amount, memo }: TransferWithMemoParams) => {
      try {
        const signature = await SolanaUtils.sendTransferWithMemo({ to, amount, memo })
        return { success: true, data: signature }
      } catch (error) {
        return { success: false, error: String(error) }
      }
    },
  },
  generateEncryptedWallet: {
    displayName: "🔐 Generate Encrypted Wallet",
    description: "Generate a new Solana wallet with an encrypted private key",
    parameters: z.object({}),
    execute: async () => {
      try {
        const { publicKey, encryptedPrivateKey } = await generateEncryptedKeyPair()
        return { success: true, data: { publicKey, encryptedPrivateKey } }
      } catch (error) {
        return { success: false, error: String(error) }
      }
    },
  },
  decryptWalletPrivateKey: {
    displayName: "🔓 Decrypt Wallet Private Key",
    description: "Decrypt an encrypted Solana wallet private key",
    parameters: z.object({
      encryptedPrivateKey: z.string().describe("The encrypted private key to decrypt"),
    }),
    execute: async ({ encryptedPrivateKey }: { encryptedPrivateKey: string }) => {
      try {
        const decryptedPrivateKey = await decryptPrivateKey(encryptedPrivateKey)
        return { success: true, data: decryptedPrivateKey }
      } catch (error) {
        return { success: false, error: String(error) }
      }
    },
  },
}

