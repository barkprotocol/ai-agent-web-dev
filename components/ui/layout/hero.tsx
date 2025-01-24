"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const exchangeLinks = [
  {
    href: "https://www.orca.so/",
    src: "https://ucarecdn.com/20144fb1-9521-4813-b025-0dd8ab0689d5/orcaorcalogo.svg",
    alt: "Orca Logo",
  },
  {
    href: "https://raydium.io/",
    src: "https://ucarecdn.com/cd39f835-9d08-4d65-96e6-55d0c98bc86a/ray2x.png",
    alt: "Raydium Logo",
  },
  {
    href: "https://jup.ag/",
    src: "https://ucarecdn.com/80fffad0-0b23-4004-b942-a7ac8b20462d/jupiteragjuplogo.svg",
    alt: "Jupiter Logo",
  },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true)
  }, [])

  return (
    <AnimatePresence>
      {mounted && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative w-full min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden py-12 px-4"
        >
          <Image
            src="https://ucarecdn.com/f6029e68-9768-49db-80a9-64e41e70acff/waveblack.png"
            alt="Abstract wave background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={95}
            priority
            className={`object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
            aria-hidden="true"
          ></div>
          <div className="relative z-10 container mx-auto text-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block bg-gradient-to-r from-gray-900 to-gray-950 text-gray-100 text-xs sm:text-sm px-4 py-2 rounded-full uppercase font-semibold tracking-wide mb-8 shadow-lg"
              >
                BARK Protocol: AI Agent Platform
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span className="title-text">Your Intelligent Copilot</span>{" "}
                <span className="title-text">for Solana</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
              >
                Elevate your DeFi experience with BARK AI Agent. Harness the power of artificial intelligence to
                optimize your Solana investments, execute smart trades, and navigate the complexities of decentralized
                finance with unprecedented ease and precision.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              >
                <Button asChild size="lg" className="launch-button w-full sm:w-auto">
                  <Link href="./app/(user)/home">Launch BARK AI Agent</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="whitepaper-button w-full text-black sm:w-auto">
                  <Link href="https://docs.barkprotocol.com/ai" target="_blank" rel="noopener noreferrer">
                    Explore Whitepaper
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <p className="text-white/80 text-sm mb-3 font-medium">Trade BARK on leading exchanges</p>
                <Link
                  href="https://solscan.io/token/2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-xs mb-5 hover:text-gray-200 transition-colors duration-300 break-all font-mono"
                >
                  CA: 2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {exchangeLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Trade BARK on ${item.alt.split(" ")[0]}`}
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={40}
                        height={40}
                        className="opacity-80 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-lg"
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

