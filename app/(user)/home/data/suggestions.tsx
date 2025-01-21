export interface Suggestion {
  id: string
  title: string
  subtitle: string
}

export const SUGGESTIONS: readonly Suggestion[] = [
  {
    id: "launch-token",
    title: "Launch a new token",
    subtitle: "Deploy a new token on pump.fun",
  },
  {
    id: "swap-sol-usdc",
    title: "Swap 1 SOL for USDC",
    subtitle: "Use Jupiter to swap on Solana",
  },
  {
    id: "solana-trends",
    title: "What's trending on Solana?",
    subtitle: "Find the current market trends",
  },
  {
    id: "price-feed",
    title: "What's the price of SOL?",
    subtitle: "Find the current price of SOL",
  },
  {
    id: "top-gainers-last-24h",
    title: "Top gainers in the last 24h",
    subtitle: "Find the top gainers in the last 24 hours",
  },
  {
    id: "check-my-wallet",
    title: "Check my wallet",
    subtitle: "Check the portfolio of your wallet",
  },
  {
    id: "bark-info",
    title: "Tell me about BARK",
    subtitle: "Learn about BARK AI and its features",
  },
  {
    id: "bark-price",
    title: "What's the price of BARK?",
    subtitle: "Find the current price of BARK token",
  },
  {
    id: "sell-or-buy-bark",
    title: "Sell or buy BARK",
    subtitle: "Swap tokens for BARK or vice versa on DEXs",
  },
  {
    id: "phantom-updates",
    title: "Any updates from @phantom recently?",
    subtitle: "Summarize the latest tweets from @phantom",
  },
  {
    id: "bark-updates",
    title: "What has BARK developer done recently?",
    subtitle: "Summarize recent BARK development updates",
  },
] as const

export function getRandomSuggestions(count: number): Suggestion[] {
  return [...SUGGESTIONS].sort(() => Math.random() - 0.5).slice(0, Math.min(count, SUGGESTIONS.length))
}

