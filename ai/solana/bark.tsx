import { z } from "zod"
import { PublicKey } from "@solana/web3.js"
import type { ToolConfig } from "@/ai/attachment/providers-2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"
import { fetchTokenBalance, transferTokens } from "@/lib/solana/token"
import { createDonation, getDonationHistory } from "@/lib/bark/donation"
import { mintBarkNFT, getBarkNFTMetadata } from "@/lib/bark/nft"

export const barkTools: Record<string, ToolConfig> = {
  getBarkBalance: {
    description: "Get the BARK token balance for a given wallet address",
    parameters: z.object({
      walletAddress: z.string().refine(
        (val) => {
          try {
            new PublicKey(val)
            return true
          } catch {
            return false
          }
        },
        {
          message: "Invalid Solana wallet address",
        },
      ),
    }),
    execute: async ({ walletAddress }) => {
      const balance = await fetchTokenBalance(
        new PublicKey(walletAddress),
        new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"),
      )
      return { balance: balance.toString() }
    },
  },

  transferBark: {
    description: "Transfer BARK tokens from one wallet to another",
    parameters: z.object({
      fromWallet: z.string(),
      toWallet: z.string(),
      amount: z.number().positive(),
    }),
    execute: async ({ fromWallet, toWallet, amount }) => {
      const result = await transferTokens(
        new PublicKey(fromWallet),
        new PublicKey(toWallet),
        new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"),
        amount,
      )
      return { transactionSignature: result }
    },
    requiresConfirmation: true,
  },

  createBarkDonation: {
    description: "Create a new BARK donation",
    parameters: z.object({
      donorWallet: z.string(),
      amount: z.number().positive(),
      recipientProject: z.string(),
      message: z.string().optional(),
    }),
    execute: async ({ donorWallet, amount, recipientProject, message }) => {
      const donation = await createDonation(donorWallet, amount, recipientProject, message)
      return { donationId: donation.id, amount: donation.amount, project: donation.recipientProject }
    },
    requiresConfirmation: true,
  },

  getBarkDonationHistory: {
    description: "Get donation history for a wallet or project",
    parameters: z.object({
      address: z.string(),
      type: z.enum(["donor", "project"]),
      limit: z.number().int().positive().optional(),
    }),
    execute: async ({ address, type, limit }) => {
      const history = await getDonationHistory(address, type, limit)
      return { donations: history }
    },
  },

  mintBarkNFT: {
    description: "Mint a new BARK NFT",
    parameters: z.object({
      recipientWallet: z.string(),
      metadataUri: z.string().url(),
    }),
    execute: async ({ recipientWallet, metadataUri }) => {
      const result = await mintBarkNFT(new PublicKey(recipientWallet), metadataUri)
      return { mintAddress: result.mintAddress.toString(), transactionSignature: result.signature }
    },
    requiresConfirmation: true,
  },

  getBarkNFTMetadata: {
    description: "Get metadata for a BARK NFT",
    parameters: z.object({
      mintAddress: z.string(),
    }),
    execute: async ({ mintAddress }) => {
      const metadata = await getBarkNFTMetadata(new PublicKey(mintAddress))
      return { metadata }
    },
  },
}

export default function BarkToolsRenderer({ tool, result }: { tool: string; result: any }) {
  switch (tool) {
    case "getBarkBalance":
      return (
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">BARK Balance</h3>
          <p className="text-xl">{result.balance} BARK</p>
        </div>
      )
    case "transferBark":
      return (
        <div className="p-4 bg-green-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">BARK Transfer Successful</h3>
          <p className="text-sm">Transaction Signature: {result.transactionSignature}</p>
        </div>
      )
    case "createBarkDonation":
      return (
        <div className="p-4 bg-blue-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Donation Created</h3>
          <p>Donation ID: {result.donationId}</p>
          <p>Amount: {result.amount} BARK</p>
          <p>Recipient Project: {result.project}</p>
        </div>
      )
    case "getBarkDonationHistory":
      return (
        <div className="p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Donation History</h3>
          <ul className="list-disc pl-5">
            {result.donations.map((donation: any, index: number) => (
              <li key={index} className="mb-2">
                {donation.amount} BARK to {donation.recipientProject} on{" "}
                {new Date(donation.timestamp).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )
    case "mintBarkNFT":
      return (
        <div className="p-4 bg-purple-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">BARK NFT Minted</h3>
          <p>Mint Address: {result.mintAddress}</p>
          <p className="text-sm">Transaction Signature: {result.transactionSignature}</p>
        </div>
      )
    case "getBarkNFTMetadata":
      return (
        <div className="p-4 bg-yellow-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">BARK NFT Metadata</h3>
          <pre className="text-sm overflow-x-auto">{JSON.stringify(result.metadata, null, 2)}</pre>
        </div>
      )
    default:
      return null
  }
}

