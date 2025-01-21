interface Token {
  mint: string
  name: string
  symbol: string
  imageUrl: string
  balance: number
  formattedBalance: string
  pricePerToken: number
  decimals: number
}

interface NFT {
  name: string
  symbol: string
  imageUrl: string
  collectionName: string
}

const fungibleTokens = [
  {
    id: "BARKvGvTSSiLMJMgwsKmEVGGfSzHhTBhMzjzKwGkDhPK",
    token_info: {
      balance: 1000000000,
      price_info: { price_per_token: 0.1 },
      decimals: 9,
    },
    content: {
      metadata: {
        name: "BARK",
        symbol: "BARK",
      },
      files: [],
      links: { image: "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp" },
    },
  },
  {
    id: "EPjFWdd5AufqSSqeM2qGfKe2hhVpYEcJoJ796hWqL92",
    token_info: {
      balance: 10000000000,
      price_info: { price_per_token: 1 },
      decimals: 6,
    },
    content: {
      metadata: {
        name: "USD Coin",
        symbol: "USDC",
      },
      files: [],
      links: { image: "https://ucarecdn.com/ee18c01a-d01d-4ad6-adb6-cac9a5539d2c/usdc.png" },
    },
  },
  {
    id: "So11111111111111111111111111111111111111112",
    token_info: {
      balance: 1000000000,
      price_info: { price_per_token: 30 },
      decimals: 9,
    },
    content: {
      metadata: {
        name: "Solana",
        symbol: "SOL",
      },
      files: [],
      links: { image: "https://ucarecdn.com/0aa23f11-40b3-4cdc-891b-a169ed9f9328/sol.png" },
    },
  },
  // ... more sample fungible tokens data ...
]

const nonFungibleTokens = [
  // ... sample non-fungible tokens data ...
  {
    content: {
      metadata: {
        name: "NFT 1",
        symbol: "NFT1",
      },
      files: [{ uri: "https://example.com/nft1.png" }],
      links: {},
    },
    grouping: [{ collection_metadata: { name: "Collection A" } }],
  },
  // ... more sample non-fungible tokens data ...
]

const sol = fungibleTokens.find((token) => token.id === "So11111111111111111111111111111111111111112")
if (sol && "content" in sol && "metadata" in sol.content) {
  sol.content.metadata.name = "Solana"
}

const formatBalance = (balance: number, decimals: number): string => {
  return balance.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: Math.min(decimals, 4),
  })
}

const tokens: Token[] = fungibleTokens
  .filter(
    (token) =>
      token.id === "So11111111111111111111111111111111111111112" ||
      token.id === "BARKvGvTSSiLMJMgwsKmEVGGfSzHhTBhMzjzKwGkDhPK" ||
      (token.token_info.balance ?? 0) * (token.token_info.price_info?.price_per_token ?? 0) > 0.01,
  )
  .map((token) => {
    const balance = (token.token_info.balance ?? 0) / Math.pow(10, token.token_info.decimals ?? 0)
    return {
      mint: token.id,
      name: token.content?.metadata?.name ?? "",
      symbol: token.content?.metadata?.symbol ?? "",
      imageUrl: token.content?.files?.[0]?.uri || token.content?.links?.image || "",
      balance,
      formattedBalance: formatBalance(balance, token.token_info.decimals ?? 0),
      pricePerToken: token.token_info.price_info?.price_per_token ?? 0,
      decimals: token.token_info.decimals ?? 0,
    }
  })

const nfts: NFT[] = nonFungibleTokens.map((nft) => ({
  name: nft.content?.metadata?.name ?? "",
  symbol: nft.content?.metadata?.symbol ?? "",
  imageUrl: nft.content?.files?.[0]?.uri || nft.content?.links?.image || "",
  collectionName: (nft.grouping?.[0] as { collection_metadata?: { name: string } })?.collection_metadata?.name ?? "",
}))

// Prioritize SOL and BARK tokens by moving them to the beginning of the list
let tokenList = [...tokens]
const solToken = tokenList.find((token) => token.symbol === "SOL")
const barkToken = tokenList.find((token) => token.symbol === "BARK")
tokenList = tokenList.filter((token) => token.symbol !== "SOL" && token.symbol !== "BARK")
if (barkToken) tokenList.unshift(barkToken)
if (solToken) tokenList.unshift(solToken)

console.log("Tokens:", tokenList)
console.log("NFTs:", nfts)

