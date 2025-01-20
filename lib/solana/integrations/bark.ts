import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js"
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "../token"
import { signTransaction } from "../wallet"

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!, "confirmed")

// BARK token mint address
const BARK_MINT = new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg")

// BARK protocol treasury wallet
const BARK_TREASURY = new PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo")

/**
 * Fetch BARK token balance for a given wallet
 * @param walletAddress The public key of the wallet
 * @returns The balance of BARK tokens
 */
export async function fetchBarkBalance(walletAddress: PublicKey): Promise<number> {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, walletAddress)
    const balance = await connection.getTokenAccountBalance(tokenAccount.address)
    return Number.parseFloat(balance.value.amount) / Math.pow(10, balance.value.decimals)
  } catch (error) {
    console.error("Error fetching BARK balance:", error)
    throw new Error("Failed to fetch BARK balance")
  }
}

/**
 * Transfer BARK tokens from one wallet to another
 * @param fromWallet The public key of the sender's wallet
 * @param toWallet The public key of the recipient's wallet
 * @param amount The amount of BARK tokens to transfer
 * @returns The transaction signature
 */
export async function transferBarkTokens(fromWallet: PublicKey, toWallet: PublicKey, amount: number): Promise<string> {
  try {
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, fromWallet)
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, toWallet)

    const transferInstruction = Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromWallet,
      [],
      amount * Math.pow(10, 9), // BARK has 9 decimal places
    )

    const transaction = new Transaction().add(transferInstruction)
    const { blockhash } = await connection.getLatestBlockhash()
    transaction.recentBlockhash = blockhash
    transaction.feePayer = fromWallet

    const signedTransaction = await signTransaction(transaction)
    const signature = await sendAndConfirmTransaction(connection, signedTransaction, [])

    return signature
  } catch (error) {
    console.error("Error transferring BARK tokens:", error)
    throw new Error("Failed to transfer BARK tokens")
  }
}

/**
 * Create a BARK donation transaction
 * @param donorWallet The public key of the donor's wallet
 * @param amount The amount of BARK tokens to donate
 * @param projectWallet The public key of the project's wallet
 * @returns The transaction object
 */
export async function createBarkDonationTransaction(
  donorWallet: PublicKey,
  amount: number,
  projectWallet: PublicKey,
): Promise<Transaction> {
  try {
    const donorTokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, donorWallet)
    const projectTokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, projectWallet)
    const treasuryTokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, BARK_TREASURY)

    const donationAmount = amount * Math.pow(10, 9) // BARK has 9 decimal places
    const protocolFee = donationAmount * 0.01 // 1% protocol fee

    const donationInstruction = Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      donorTokenAccount.address,
      projectTokenAccount.address,
      donorWallet,
      [],
      donationAmount - protocolFee,
    )

    const feeInstruction = Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      donorTokenAccount.address,
      treasuryTokenAccount.address,
      donorWallet,
      [],
      protocolFee,
    )

    const transaction = new Transaction().add(donationInstruction, feeInstruction)
    const { blockhash } = await connection.getLatestBlockhash()
    transaction.recentBlockhash = blockhash
    transaction.feePayer = donorWallet

    return transaction
  } catch (error) {
    console.error("Error creating BARK donation transaction:", error)
    throw new Error("Failed to create BARK donation transaction")
  }
}

/**
 * Get BARK token account info for a wallet
 * @param walletAddress The public key of the wallet
 * @returns The token account info
 */
export async function getBarkTokenAccountInfo(walletAddress: PublicKey) {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, walletAddress)
    const accountInfo = await connection.getAccountInfo(tokenAccount.address)
    return accountInfo
  } catch (error) {
    console.error("Error getting BARK token account info:", error)
    throw new Error("Failed to get BARK token account info")
  }
}

/**
 * Check if a wallet has a BARK token account
 * @param walletAddress The public key of the wallet
 * @returns Boolean indicating if the wallet has a BARK token account
 */
export async function hasBarkTokenAccount(walletAddress: PublicKey): Promise<boolean> {
  try {
    const associatedTokenAddress = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      BARK_MINT,
      walletAddress,
    )
    const accountInfo = await connection.getAccountInfo(associatedTokenAddress)
    return accountInfo !== null
  } catch (error) {
    console.error("Error checking BARK token account:", error)
    throw new Error("Failed to check BARK token account")
  }
}

/**
 * Get recent BARK token transfers for a wallet
 * @param walletAddress The public key of the wallet
 * @param limit The number of transfers to fetch (default: 10)
 * @returns An array of recent transfers
 */
export async function getRecentBarkTransfers(walletAddress: PublicKey, limit = 10) {
  try {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, BARK_MINT, walletAddress)
    const signatures = await connection.getSignaturesForAddress(tokenAccount.address, { limit })

    const transfers = await Promise.all(
      signatures.map(async (sig) => {
        const tx = await connection.getTransaction(sig.signature)
        return {
          signature: sig.signature,
          timestamp: sig.blockTime,
          amount: tx?.meta?.postBalances[0] - tx?.meta?.preBalances[0],
        }
      }),
    )

    return transfers
  } catch (error) {
    console.error("Error fetching recent BARK transfers:", error)
    throw new Error("Failed to fetch recent BARK transfers")
  }
}

