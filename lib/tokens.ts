import type { Token } from "@/types/token"

export async function getTrendingTokens(): Promise<Token[]> {
  return [
    {
      address: "So11111111111111111111111111111111111111112",
      symbol: "SOL",
      name: "Solana",
      price: 100,
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
      price: 5,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/assets/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png",
    },
    {
      address: "2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg",
      symbol: "BARK",
      name: "BARK Protocol",
      price: 0.1,
      logoURI: "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp",
    },
  ]
}

