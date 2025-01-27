import type { Metadata } from "next"
import { PricingCards } from "@/components/ui/pricing-cards"

export const metadata: Metadata = {
  title: "Pricing | BARK AI Agent",
  description: "Choose the perfect plan for your AI-powered Solana trading needs.",
}

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Select the perfect plan to enhance your Solana trading experience with BARK AI Agent.
      </p>
      <PricingCards />
    </div>
  )
}

