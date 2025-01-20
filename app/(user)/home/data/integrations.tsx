export interface IntegrationTheme {
    primary: string
    secondary: string
  }
  
  export interface Integration {
    name: string
    icon: string
    description?: string
    theme: IntegrationTheme
  }
  
  export const INTEGRATIONS: Integration[] = [
    {
      name: "DexScreener",
      icon: "integrations/dexscreener.svg",
      description: "Discover trending tokens",
      theme: {
        primary: "#64748B",
        secondary: "#94A3B8",
      },
    },
    {
      name: "Dialect",
      icon: "integrations/dialect.svg",
      description: "Create and share blinks",
      theme: {
        primary: "#0EA5E9",
        secondary: "#38BDF8",
      },
    },
    {
      name: "Jupiter",
      icon: "https://ucarecdn.com/80fffad0-0b23-4004-b942-a7ac8b20462d/jupiteragjuplogo.svg",
      description: "Swap tokens & DCA, Limit orders",
      theme: {
        primary: "#16A34A",
        secondary: "#22C55E",
      },
    },
    {
      name: "Raydium",
      icon: "https://ucarecdn.com/8b622209-2f52-4954-8f85-666d9effb3dc/raydiumblackicon.png",
      description: "Automated market maker and liquidity provider",
      theme: {
        primary: "#3F3F3F",
        secondary: "#7F7F7F",
      },
    },
    {
      name: "Magic Eden",
      icon: "integrations/magic_eden.svg",
      description: "Explore the best NFT collections",
      theme: {
        primary: "#9333EA",
        secondary: "#A855F7",
      },
    },
    {
      name: "Pump.fun",
      icon: "integrations/pump_fun.svg",
      description: "Discover new tokens, launch tokens",
      theme: {
        primary: "#10B981",
        secondary: "#10B981",
      },
    },
    {
      name: "BARK",
      icon: "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp",
      description: "AI-powered DeFi assistant",
      theme: {
        primary: "#D0C8B9",
        secondary: "#181432",
      },
    },
    {
      name: "Metaplex",
      icon: "https://ucarecdn.com/a0c1f6f5-4f1d-4b4a-b4b0-8f7a2b0c6b0a/metaplex.svg",
      description: "Create and manage NFTs on Solana",
      theme: {
        primary: "#FF00FF",
        secondary: "#00FFFF",
      },
    },
  ]
  
  