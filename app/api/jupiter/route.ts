import { type NextRequest, NextResponse } from "next/server"
import { Connection, PublicKey } from "@solana/web3.js"
import {
  initializeJupiter,
  getTokenList,
  getRoutes,
  executeSwap,
  getPriceImpact,
  getMinimumReceived,
} from "@/lib/solana/integrations/jupiter"

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com")

// Initialize Jupiter
let jupiterInitialized = false

async function ensureJupiterInitialized() {
  if (!jupiterInitialized) {
    await initializeJupiter(connection, "mainnet-beta")
    jupiterInitialized = true
  }
}

export async function GET(req: NextRequest) {
  try {
    await ensureJupiterInitialized()

    const { searchParams } = new URL(req.url)
    const action = searchParams.get("action")

    switch (action) {
      case "getTokenList":
        const tokens = await getTokenList()
        return NextResponse.json({ success: true, tokens })

      case "getRoutes":
        const inputMint = searchParams.get("inputMint")
        const outputMint = searchParams.get("outputMint")
        const amount = searchParams.get("amount")
        const slippage = searchParams.get("slippage")

        if (!inputMint || !outputMint || !amount || !slippage) {
          return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
        }

        const routes = await getRoutes(inputMint, outputMint, Number(amount), Number(slippage))
        return NextResponse.json({ success: true, routes })

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Jupiter API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureJupiterInitialized()

    const { action, data } = await req.json()

    switch (action) {
      case "executeSwap":
        const { route, userPublicKey } = data
        if (!route || !userPublicKey) {
          return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
        }

        const txid = await executeSwap(route, new PublicKey(userPublicKey))
        return NextResponse.json({ success: true, txid })

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Jupiter API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}

