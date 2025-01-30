export interface MarketData {
  solanaPrice: number
  usdcPrice: number
  barkPrice: number
  totalMarketCap: number
  volume24h: number
  topCryptos: {
    symbol: string
    price: number
    change24h: number
  }[]
  trendingTokens: {
    address: string
    symbol: string
    name: string
    price: number
    logoURI: string
  }[]
}

