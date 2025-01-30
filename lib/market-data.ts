import { BirdeyeTimeframe } from "@/ai/solana/birdeye"
import { getTopTraders } from "@/server/actions/birdeye"

export async function getMarketData() {
  const timeframe = BirdeyeTimeframe.LAST_7D
  const traders = await getTopTraders({ timeframe })

  // Simulated market data (replace with actual API calls in production)
  return {
    solanaPrice: 20.5,
    usdcPrice: 1,
    barkPrice: 0.1,
    totalMarketCap: 1000000000,
    volume24h: 50000000,
    topCryptos: [
      { symbol: "SOL", price: 20.5, change24h: 2.5 },
      { symbol: "BARK", price: 0.1, change24h: 1.2 },
      { symbol: "RAY", price: 0.5, change24h: -0.8 },
    ],
    trendingTokens: [
      {
        address: "So11111111111111111111111111111111111111112",
        symbol: "SOL",
        name: "Solana",
        price: 20.5,
        logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png",
      },
      {
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        symbol: "USDC",
        name: "USD Coin",
        price: 1,
        logoURI:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/assets/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
      },
      {
        address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
        symbol: "RAY",
        name: "Raydium",
        price: 0.5,
        logoURI:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/assets/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png",
      },
    ],
    topTraders: traders,
  }
}

