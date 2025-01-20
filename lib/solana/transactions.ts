import { Connection, PublicKey, Transaction, TransactionInstruction, sendAndConfirmTransaction } from "@solana/web3.js"
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token"

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!, "confirmed")

/**
 * Create and send a transaction
 * @param instructions An array of instructions to include in the transaction
 * @param signers An array of signers for the transaction
 * @param feePayer The public key of the fee payer
 * @returns The transaction signature
 */
export async function createAndSendTransaction(
  instructions: TransactionInstruction[],
  signers: any[],
  feePayer: PublicKey,
): Promise<string> {
  const transaction = new Transaction()
  instructions.forEach((instruction) => transaction.add(instruction))

  const { blockhash } = await connection.getLatestBlockhash()
  transaction.recentBlockhash = blockhash
  transaction.feePayer = feePayer

  if (signers.length > 0) {
    transaction.sign(...signers)
  }

  const signedTransaction = await window.solana.signTransaction(transaction)
  const signature = await connection.sendRawTransaction(signedTransaction.serialize())
  await connection.confirmTransaction(signature)

  return signature
}

/**
 * Get transaction details
 * @param signature The transaction signature
 * @returns The transaction details
 */
export async function getTransactionDetails(signature: string) {
  const transaction = await connection.getTransaction(signature)
  return transaction
}

/**
 * Get recent transactions for an account
 * @param address The account address
 * @param limit The number of transactions to fetch (default: 10)
 * @returns An array of recent transactions
 */
export async function getRecentTransactions(address: PublicKey, limit = 10) {
  const signatures = await connection.getSignaturesForAddress(address, { limit })

  const transactions = await Promise.all(
    signatures.map(async (sig) => {
      const tx = await connection.getTransaction(sig.signature)
      return {
        signature: sig.signature,
        timestamp: sig.blockTime,
        status: tx?.meta?.err ? "failed" : "success",
        amount: tx?.meta?.postBalances[0] - tx?.meta?.preBalances[0],
      }
    }),
  )

  return transactions
}

/**
 * Create a memo instruction
 * @param memo The memo text
 * @param signers An array of signers for the memo
 * @returns A memo instruction
 */
export function createMemoInstruction(memo: string, signers: PublicKey[] = []): TransactionInstruction {
  return new TransactionInstruction({
    keys: signers.map((signer) => ({
      pubkey: signer,
      isSigner: true,
      isWritable: false,
    })),
    data: Buffer.from(memo, "utf-8"),
    programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
  })
}

/**
 * Estimate transaction fee
 * @param instructions An array of instructions to include in the transaction
 * @param signers An array of signers for the transaction
 * @returns The estimated transaction fee in lamports
 */
export async function estimateTransactionFee(instructions: TransactionInstruction[], signers: any[]): Promise<number> {
  const transaction = new Transaction()
  instructions.forEach((instruction) => transaction.add(instruction))

  const { blockhash } = await connection.getLatestBlockhash()
  transaction.recentBlockhash = blockhash
  transaction.feePayer = signers[0].publicKey

  if (signers.length > 0) {
    transaction.sign(...signers)
  }

  const simulatedTransaction = await connection.simulateTransaction(transaction)
  return simulatedTransaction.value.feeAmount || 0
}

