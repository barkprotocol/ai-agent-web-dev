import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!, "confirmed")

/**
 * Get the SOL balance of a wallet
 * @param publicKey The public key of the wallet
 * @returns The balance in SOL
 */
export async function getSolBalance(publicKey: PublicKey): Promise<number> {
  const balance = await connection.getBalance(publicKey)
  return balance / LAMPORTS_PER_SOL
}

/**
 * Transfer SOL from one wallet to another
 * @param from The sender's public key
 * @param to The recipient's public key
 * @param amount The amount of SOL to transfer
 * @returns The transaction signature
 */
export async function transferSol(from: PublicKey, to: PublicKey, amount: number): Promise<string> {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports: amount * LAMPORTS_PER_SOL,
    }),
  )

  const { blockhash } = await connection.getLatestBlockhash()
  transaction.recentBlockhash = blockhash
  transaction.feePayer = from

  // Sign and send the transaction
  const signedTransaction = await window.solana.signTransaction(transaction)
  const signature = await connection.sendRawTransaction(signedTransaction.serialize())
  await connection.confirmTransaction(signature)

  return signature
}

/**
 * Sign a message using the wallet
 * @param message The message to sign
 * @returns The signed message
 */
export async function signMessage(message: string): Promise<Uint8Array> {
  const encodedMessage = new TextEncoder().encode(message)
  const signedMessage = await window.solana.signMessage(encodedMessage, "utf8")
  return signedMessage
}

/**
 * Verify a signed message
 * @param publicKey The public key of the signer
 * @param message The original message
 * @param signature The signature to verify
 * @returns A boolean indicating if the signature is valid
 */
export function verifySignature(publicKey: PublicKey, message: string, signature: Uint8Array): boolean {
  const encodedMessage = new TextEncoder().encode(message)
  return PublicKey.verify(encodedMessage, signature, publicKey)
}

/**
 * Get the recent account activity
 * @param publicKey The public key of the wallet
 * @param limit The number of activities to fetch (default: 10)
 * @returns An array of recent account activities
 */
export async function getRecentAccountActivity(publicKey: PublicKey, limit = 10) {
  const signatures = await connection.getSignaturesForAddress(publicKey, { limit })

  const activities = await Promise.all(
    signatures.map(async (sig) => {
      const tx = await connection.getTransaction(sig.signature)
      return {
        signature: sig.signature,
        timestamp: sig.blockTime,
        status: tx?.meta?.err ? "failed" : "success",
        type:
          tx?.transaction.message.instructions[0].programId.toString() === SystemProgram.programId.toString()
            ? "transfer"
            : "other",
        amount: tx?.meta?.postBalances[0] - tx?.meta?.preBalances[0],
      }
    }),
  )

  return activities
}

/**
 * Request an airdrop of SOL (only works on devnet and testnet)
 * @param publicKey The public key of the wallet to receive the airdrop
 * @param amount The amount of SOL to request (default: 1)
 * @returns The transaction signature
 */
export async function requestAirdrop(publicKey: PublicKey, amount = 1): Promise<string> {
  const signature = await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL)
  await connection.confirmTransaction(signature)
  return signature
}

