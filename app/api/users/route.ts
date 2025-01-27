import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { supabase } from "@/lib/supabase"
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  VersionedTransaction,
  type TransactionInstruction,
  type MessageV0,
  Transaction,
  type Message,
  type VersionedMessage,
  type MessageCompiledInstruction,
  type CompiledInstruction,
} from "@solana/web3.js"

const REQUIRED_AMOUNT = 1 * LAMPORTS_PER_SOL // 1 SOL in lamports

// Function to verify Solana transaction
async function verifyTransaction(txHash: string): Promise<boolean> {
  const connection = new Connection(process.env.SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com")
  try {
    const tx = await connection.getTransaction(txHash, { maxSupportedTransactionVersion: 0 })
    if (tx && tx.meta) {
      let transferInstruction: TransactionInstruction | MessageCompiledInstruction | CompiledInstruction | undefined
      let accountKeys: PublicKey[]

      if (tx.transaction instanceof Transaction) {
        // Legacy transaction
        const message: Message = tx.transaction.compileMessage()
        transferInstruction = message.instructions.find(
          (ix) => message.accountKeys[ix.programIdIndex].equals(SystemProgram.programId) && ix.data.length === 8,
        )
        accountKeys = message.accountKeys
      } else if (tx.transaction instanceof VersionedTransaction) {
        // Versioned transaction
        const message: VersionedMessage = tx.transaction.message
        if (message.version === 0) {
          const v0Message = message as MessageV0
          transferInstruction = v0Message.compiledInstructions.find(
            (ix) =>
              v0Message.staticAccountKeys[ix.programIdIndex].equals(SystemProgram.programId) && ix.data.length === 8,
          )
          accountKeys = v0Message.staticAccountKeys
        } else {
          throw new Error("Unsupported message version")
        }
      } else {
        throw new Error("Unsupported transaction type")
      }

      if (transferInstruction) {
        const amount = tx.meta.postBalances[1] - tx.meta.preBalances[1]
        let recipientAddress: PublicKey

        if ("accounts" in transferInstruction && Array.isArray(transferInstruction.accounts)) {
          // TransactionInstruction
          recipientAddress = accountKeys[transferInstruction.accounts[1]]
        } else if ("accountKeyIndexes" in transferInstruction && Array.isArray(transferInstruction.accountKeyIndexes)) {
          // MessageCompiledInstruction
          recipientAddress = accountKeys[transferInstruction.accountKeyIndexes[1]]
        } else if ("accounts" in transferInstruction && typeof transferInstruction.accounts === "number") {
          // CompiledInstruction
          recipientAddress = accountKeys[transferInstruction.accounts]
        } else {
          throw new Error("Unexpected instruction type")
        }

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

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { eapTransactions: true },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error("Error in GET /api/users:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
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

    // Create or update user and EAP transaction
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
        eapAccess: true,
        eapTransactions: {
          create: {
            amount: REQUIRED_AMOUNT / LAMPORTS_PER_SOL,
            txHash,
            status: "completed",
          },
        },
      },
      create: {
        email,
        name,
        eapAccess: true,
        eapTransactions: {
          create: {
            amount: REQUIRED_AMOUNT / LAMPORTS_PER_SOL,
            txHash,
            status: "completed",
          },
        },
      },
      include: { eapTransactions: true },
    })

    // Insert data into Supabase
    const { data, error } = await supabase.from("users_table").upsert({
      email,
      name,
      eap_access: true,
      last_transaction_hash: txHash,
    })

    if (error) {
      console.error("Error inserting data into Supabase:", error)
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error("Error in POST /api/users:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

