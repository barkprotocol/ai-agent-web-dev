import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"

const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com"
const connection = new Connection(SOLANA_RPC_URL)

export const TREASURY_WALLET = new PublicKey("YOUR_TREASURY_WALLET_ADDRESS")

export async function createSolanaTransaction(amount: number, fromPubkey: PublicKey, toPubkey: PublicKey) {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey,
      toPubkey,
      lamports: amount * LAMPORTS_PER_SOL,
    }),
  )

  const { blockhash } = await connection.getLatestBlockhash()
  transaction.recentBlockhash = blockhash
  transaction.feePayer = fromPubkey

  return transaction
}

export async function createPaymentQRCode(amount: number, reference: PublicKey) {
  const { encodeURL, createQR } = await import("@solana/pay")
  const url = encodeURL({
    recipient: TREASURY_WALLET,
    amount,
    reference,
    label: "BARK AI Agent Payment",
    message: "Thanks for your purchase!",
  })

  return createQR(url)
}

