import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="relative bg-black py-16 sm:py-24" aria-labelledby="cta-heading">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://ucarecdn.com/f6029e68-9768-49db-80a9-64e41e70acff/waveblack.png"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Empower Your Solana Trading with BARK AI
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl">
            Experience the future of Solana trading with the BARK AI Agent. Revolutionize your blockchain interactions
            and boost productivity today.
          </p>
          <Button
            asChild
            size="lg"
            className="font-medium px-8 py-3 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/app">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

