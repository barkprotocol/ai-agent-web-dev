import { NextResponse } from "next/server"
import { Connection, PublicKey, LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js"

const REQUIRED_AMOUNT = 1 * LAMPORTS_PER_SOL // 1 SOL in lamports

// Function to verify Solana transaction
async function verifyTransaction(txHash: string): Promise<boolean> {
  const connection = new Connection(process.env.SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com")
  try {
    const tx = await connection.getTransaction(txHash, { maxSupportedTransactionVersion: 0 })
    if (tx && tx.meta) {
      const transferInstruction = tx.transaction.message.instructions.find(
        (ix) =>
          SystemProgram.programId.equals(tx.transaction.message.accountKeys[ix.programIdIndex]) && ix.data.length === 8,
      )

      if (transferInstruction) {
        const amount = tx.meta.postBalances[1] - tx.meta.preBalances[1]
        const recipientAddress = tx.transaction.message.accountKeys[transferInstruction.accounts[1]]
        const expectedRecipient = new PublicKey(process.env.RECIPIENT_ADDRESS || "")

        return amount >= REQUIRED_AMOUNT && recipientAddress.equals(expectedRecipient)
      }
    }
  } catch (error) {
    console.error("Error verifying transaction:", error)
  }
  return false
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get("email")

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  // In a real application, you would fetch user data from your database here
  // For now, we'll return a mock response
  const mockUser = {
    email,
    name: "Mock User",
    eapAccess: false,
    eapTransactions: [],
  }

  return NextResponse.json({ user: mockUser })
}

export async function POST(request: Request) {
  try {
    const { email, name, txHash } = await request.json()

    if (!email || !name || !txHash) {
      return NextResponse.json({ error: "Email, name, and transaction hash are required" }, { status: 400 })
    }

    // Verify the transaction
    const isValid = await verifyTransaction(txHash)

    if (!isValid) {
      return NextResponse.json({ error: "Invalid transaction" }, { status: 400 })
    }

    // In a real application, you would create or update the user in your database here
    // For now, we'll return a mock response
    const mockUser = {
      email,
      name,
      eapAccess: true,
      eapTransactions: [
        {
          amount: REQUIRED_AMOUNT / LAMPORTS_PER_SOL,
          txHash,
          status: "completed",
        },
      ],
    }

    return NextResponse.json(mockUser)
  } catch (error) {
    console.error("Error in POST /api/users:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

