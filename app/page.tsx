import type { Metadata } from "next"
import { Hero } from "@/components/ui/layout/hero"
import { Features } from "@/components/ui/layout/features"
import HowItWorks from "@/components/ui/layout/how-it-works"
import { CTA } from "@/components/ui/layout/cta"
import { FAQ } from "@/components/ui/layout/faq"

export const metadata: Metadata = {
  title: "BARK | AI Agent for Solana - Home",
  description:
    "Discover how BARK AI Agent revolutionizes your Solana trading experience with cutting-edge AI and blockchain technology.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <FAQ />
    </>
  )
}

