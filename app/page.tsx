import { Hero } from "@/components/ui/layout/hero"
import { Features } from "@/components/ui/layout/features"
import HowItWorks from "@/components/ui/layout/how-it-works"
import { CTA } from "@/components/ui/layout/cta"
import { FAQ } from "@/components/ui/layout/faq"

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

