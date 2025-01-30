import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { searchWalletAssets } from "@/lib/solana/helius"
import { transformToPortfolio } from "@/types/helius/portfolio"
import { PublicKey } from "@solana/web3.js"

export async function GET(request: NextRequest, { params }: { params: { address: string } }) {
  try {
    const { address } = params

    // Validate the address
    if (!address || typeof address !== "string") {
      return NextResponse.json({ error: "Invalid address parameter" }, { status: 400 })
    }

    // Validate that the address is a valid Solana public key
    try {
      new PublicKey(address)
    } catch (error) {
      return NextResponse.json({ error: "Invalid Solana address" }, { status: 400 })
    }

    const { fungibleTokens, nonFungibleTokens } = await searchWalletAssets(address)
    const portfolio = transformToPortfolio(address, fungibleTokens, nonFungibleTokens)

    return NextResponse.json(portfolio)
  } catch (error) {
    console.error("Error fetching wallet portfolio:", error)
    return NextResponse.json({ error: "Failed to fetch wallet portfolio" }, { status: 500 })
  }
}

