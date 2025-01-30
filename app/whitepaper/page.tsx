import type { Metadata } from "next"
import { WhitepaperContent } from "@/components/whitepaper-content"
import { sharedMetadata } from "@/components/shared-metadata"

export const metadata: Metadata = sharedMetadata({
  title: "Whitepaper",
  description: "BARK AI Agent: Revolutionizing DeFi with AI-Powered Solutions on Solana",
  keywords: [
    "BARK",
    "AI",
    "DeFi",
    "Solana",
    "Whitepaper",
    "Blockchain",
    "Cryptocurrency",
    "Jupiter",
    "Helius",
    "Metaplex",
  ],
})

export default function WhitepaperPage() {
  return <WhitepaperContent />
}

