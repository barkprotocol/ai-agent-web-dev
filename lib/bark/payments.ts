import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "../solana/token"
import { signAndSendTransaction } from "../solana/transactions"
import { SolanaUtils } from "../solana/solana-utils"

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!, "confirmed")

// BARK token mint address
const BARK_MINT = new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg")

// BARK treasury wallet (replace with actual address in production)
const BARK_TREASURY = new PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo")

export interface PaymentResult {
  success: boolean
  transactionSignature?: string
  error?: string
}

export async function processBarkPayment(
  fromWallet: PublicKey,
  toWallet: PublicKey,
  amount: number,
): Promise<PaymentResult> {
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
    const transactionSignature = await signAndSendTransaction(connection, transaction, fromWallet)

    return {
      success: true,
      transactionSignature,
    }
  } catch (error) {
    console.error("Error processing BARK payment:", error)
    return {
      success: false,
      error: "Failed to process BARK payment",
    }
  }
}

export async function processSolPayment(
  fromWallet: PublicKey,
  toWallet: PublicKey,
  amount: number,
): Promise<PaymentResult> {
  try {
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: fromWallet,
      toPubkey: toWallet,
      lamports: amount * LAMPORTS_PER_SOL,
    })

    const transaction = new Transaction().add(transferInstruction)
    const transactionSignature = await signAndSendTransaction(connection, transaction, fromWallet)

    return {
      success: true,
      transactionSignature,
    }
  } catch (error) {
    console.error("Error processing SOL payment:", error)
    return {
      success: false,
      error: "Failed to process SOL payment",
    }
  }
}

export async function processPaymentWithMemo(
  fromWallet: PublicKey,
  toWallet: PublicKey,
  amount: number,
  memo: string,
  isSOL = false,
): Promise<PaymentResult> {
  try {
    const result = await SolanaUtils.sendTransferWithMemo({
      to: toWallet.toBase58(),
      amount: amount,
      memo: memo,
    })

    if (result) {
      return {
        success: true,
        transactionSignature: result,
      }
    } else {
      throw new Error("Transaction failed")
    }
  } catch (error) {
    console.error("Error processing payment with memo:", error)
    return {
      success: false,
      error: "Failed to process payment with memo",
    }
  }
}

export async function calculateFees(amount: number, isSOL = false): Promise<number> {
  // This is a placeholder. In a real-world scenario, you'd calculate the actual transaction fees.
  // For SOL transfers, you can estimate the fee by simulating the transaction.
  // For BARK transfers, you'd need to account for the SOL fee for the token transfer.
  const estimatedFee = isSOL ? 0.000005 : 0.00001 // Example values
  return estimatedFee
}

export async function getPaymentHistory(wallet: PublicKey, limit = 10): Promise<any[]> {
  try {
    const signatures = await connection.getSignaturesForAddress(wallet, { limit })

    const history = await Promise.all(
      signatures.map(async (sig) => {
        const tx = await connection.getTransaction(sig.signature)
        return {
          signature: sig.signature,
          timestamp: sig.blockTime,
          amount: tx?.meta?.postBalances[0] - tx?.meta?.preBalances[0],
          // You might want to add more transaction details here
        }
      }),
    )

    return history
  } catch (error) {
    console.error("Error fetching payment history:", error)
    throw new Error("Failed to fetch payment history")
  }
}

export async function refundPayment(
  fromWallet: PublicKey,
  toWallet: PublicKey,
  amount: number,
  originalTransactionSignature: string,
  isSOL = false,
): Promise<PaymentResult> {
  try {
    // Verify the original transaction
    const originalTx = await connection.getTransaction(originalTransactionSignature)
    if (!originalTx) {
      throw new Error("Original transaction not found")
    }

    // Process the refund
    if (isSOL) {
      return processSolPayment(fromWallet, toWallet, amount)
    } else {
      return processBarkPayment(fromWallet, toWallet, amount)
    }
  } catch (error) {
    console.error("Error processing refund:", error)
    return {
      success: false,
      error: "Failed to process refund",
    }
  }
}

export async function verifyPayment(transactionSignature: string): Promise<boolean> {
  try {
    const transaction = await connection.getTransaction(transactionSignature)
    if (!transaction) {
      return false
    }
    // Add more verification logic here if needed
    return transaction.meta?.err === null
  } catch (error) {
    console.error("Error verifying payment:", error)
    return false
  }
}

