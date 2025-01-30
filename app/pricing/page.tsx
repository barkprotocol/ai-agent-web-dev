import type { Metadata } from "next"
import { sharedMetadata } from "@/components/shared-metadata"
import { PricingPageClient } from "@/components/pricing-page-client"

export const metadata: Metadata = sharedMetadata({
  title: "Pricing",
  description: "Explore BARK AI Agent pricing tiers and choose the best plan for your needs.",
  keywords: ["AI trading pricing", "DeFi subscription", "Solana trading plans"],
})

export default function PricingPage() {
  return <PricingPageClient />
}

