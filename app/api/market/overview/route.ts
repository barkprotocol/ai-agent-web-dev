import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Mock data - replace with actual market data fetch
    const marketData = [
      {
        symbol: "SOL",
        name: "Solana",
        price: 290.25,
        priceChange24h: 5.67,
        volume24h: 2234567890,
        marketCap: 165678901234,
        logoURI:
          "https://ucarecdn.com/0aa23f11-40b3-4cdc-891b-a169ed9f9328/sol.png",
      },
      {
        symbol: "BARK",
        name: "BARK",
        price: 0.00001,
        priceChange24h: 2.34,
        volume24h: 1321,
        marketCap: 11789,
        logoURI: "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp",
      },
    ]

    return NextResponse.json(marketData)
  } catch (error) {
    console.error("Error fetching market data:", error)
    return NextResponse.json({ error: "Failed to fetch market data" }, { status: 500 })
  }
}

