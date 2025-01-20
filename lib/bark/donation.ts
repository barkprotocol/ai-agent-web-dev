import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js"
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token"
import { Blink } from "@dialectlabs/blinks"
import { v4 as uuidv4 } from "uuid"
import { getTokenAccounts, getOrCreateAssociatedTokenAccount } from "../solana/token"
import { signAndSendTransaction } from "../solana/transactions"
import { NFTStorage, File } from "nft.storage"

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!, "confirmed")

// Initialize NFT.storage client
const nftStorage = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY! })

// BARK token mint address
const BARK_MINT = new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg")

// Donation types
type DonationType = "one-time" | "recurring"

interface Donation {
  id: string
  donorWallet: string
  amount: number
  recipientProject: string
  timestamp: Date
  type: DonationType
  message?: string
}

// In-memory storage for donations (replace with database in production)
const donations: Donation[] = []

export async function createDonation(
  donorWallet: string,
  amount: number,
  recipientProject: string,
  message?: string,
  type: DonationType = "one-time",
): Promise<Donation> {
  try {
    const donorPublicKey = new PublicKey(donorWallet)
    const recipientPublicKey = new PublicKey(recipientProject)

    // Get or create token accounts
    const donorTokenAccount = await getTokenAccounts(donorPublicKey)
    const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(BARK_MINT, recipientPublicKey)

    // Create transfer instruction
    const transferInstruction = Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      donorTokenAccount,
      recipientTokenAccount,
      donorPublicKey,
      [],
      amount,
    )

    // Create and sign transaction
    const transaction = new Transaction().add(transferInstruction)
    const signature = await signAndSendTransaction(transaction, donorPublicKey)

    // Create donation record
    const donation: Donation = {
      id: uuidv4(),
      donorWallet,
      amount,
      recipientProject,
      timestamp: new Date(),
      type,
      message,
    }

    // Save donation (replace with database insert in production)
    donations.push(donation)

    // Send notification via Blinks
    await sendDonationNotification(donation)

    return donation
  } catch (error) {
    console.error("Error creating donation:", error)
    throw new Error("Failed to create donation")
  }
}

export async function getDonationHistory(
  address: string,
  type: "donor" | "project",
  limit?: number,
): Promise<Donation[]> {
  let filteredDonations = donations.filter((donation) =>
    type === "donor" ? donation.donorWallet === address : donation.recipientProject === address,
  )

  if (limit) {
    filteredDonations = filteredDonations.slice(0, limit)
  }

  return filteredDonations
}

async function sendDonationNotification(donation: Donation) {
  try {
    const blinks = new blinks({
      environment: "production",
      dialectCloud: {
        tokenStore: {
          token: process.env.DIALECT_API_KEY!,
        },
      },
    })

    await blinks.send({
      message: `New donation of ${donation.amount} BARK received from ${donation.donorWallet}`,
      recipient: donation.recipientProject,
    })
  } catch (error) {
    console.error("Error sending donation notification:", error)
  }
}

export async function createRecurringDonation(
  donorWallet: string,
  amount: number,
  recipientProject: string,
  frequency: "daily" | "weekly" | "monthly",
  message?: string,
): Promise<Donation> {
  // Implementation for creating a recurring donation
  // This would involve setting up a scheduled task or using a service like Clockwork
  // For now, we'll just create a one-time donation with a 'recurring' type
  return createDonation(donorWallet, amount, recipientProject, message, "recurring")
}

export async function mintDonationNFT(
  recipientWallet: string,
  donationAmount: number,
  projectName: string,
): Promise<{ mintAddress: PublicKey; metadataUri: string }> {
  try {
    // Create NFT metadata
    const metadata = {
      name: `${projectName} Donation NFT`,
      description: `This NFT represents a donation of ${donationAmount} BARK to ${projectName}`,
      image: new File([await fetch("/images/donation-nft.png").then((res) => res.arrayBuffer())], "donation-nft.png", {
        type: "image/png",
      }),
      attributes: [
        { trait_type: "Donation Amount", value: donationAmount.toString() },
        { trait_type: "Project", value: projectName },
        { trait_type: "Date", value: new Date().toISOString().split("T")[0] },
      ],
    }

    // Upload metadata to IPFS
    const metadataUri = await nftStorage.store(metadata)

    // Mint NFT (implementation depends on your chosen method, e.g., Metaplex)
    // For this example, we'll use a placeholder function
    const mintAddress = await mintNFT(new PublicKey(recipientWallet), metadataUri.url)

    return { mintAddress, metadataUri: metadataUri.url }
  } catch (error) {
    console.error("Error minting donation NFT:", error)
    throw new Error("Failed to mint donation NFT")
  }
}

// Placeholder function for minting NFT
async function mintNFT(recipientWallet: PublicKey, metadataUri: string): Promise<PublicKey> {
  // Implementation would go here, using Metaplex or another method
  // For now, we'll return a dummy PublicKey
  return new PublicKey("11111111111111111111111111111111")
}

export async function getDonationStats(projectAddress: string): Promise<{
  totalDonations: number
  totalAmount: number
  uniqueDonors: number
}> {
  const projectDonations = donations.filter((d) => d.recipientProject === projectAddress)
  const totalDonations = projectDonations.length
  const totalAmount = projectDonations.reduce((sum, d) => sum + d.amount, 0)
  const uniqueDonors = new Set(projectDonations.map((d) => d.donorWallet)).size

  return { totalDonations, totalAmount, uniqueDonors }
}

export async function getTopDonors(
  projectAddress: string,
  limit = 10,
): Promise<Array<{ donorWallet: string; totalAmount: number }>> {
  const projectDonations = donations.filter((d) => d.recipientProject === projectAddress)
  const donorTotals = projectDonations.reduce(
    (acc, d) => {
      acc[d.donorWallet] = (acc[d.donorWallet] || 0) + d.amount
      return acc
    },
    {} as Record<string, number>,
  )

  return Object.entries(donorTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([donorWallet, totalAmount]) => ({ donorWallet, totalAmount }))
}

