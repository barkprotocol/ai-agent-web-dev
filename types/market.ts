export interface MarketData {
  solanaPrice: number
  usdcPrice: number
  barkPrice: number
  barkChange24h: number
  totalMarketCap: number
  volume24h: number
  topCryptos: {
    symbol: string
    price: number
    change24h: number
  }[]
}

