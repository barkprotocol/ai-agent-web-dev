'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';

const exchangeLinks = [
  { href: "https://www.orca.so/", src: "https://ucarecdn.com/20144fb1-9521-4813-b025-0dd8ab0689d5/orcaorcalogo.svg", alt: "Orca Logo" },
  { href: "https://raydium.io/", src: "https://ucarecdn.com/cd39f835-9d08-4d65-96e6-55d0c98bc86a/ray2x.png", alt: "Raydium Logo" },
  { href: "https://jup.ag/", src: "https://ucarecdn.com/80fffad0-0b23-4004-b942-a7ac8b20462d/jupiteragjuplogo.svg", alt: "Jupiter Logo" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

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
            className={`object-cover object-center transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" aria-hidden="true"></div>
          <div className="relative z-10 container mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-sand-600 text-black text-xs sm:text-sm px-3 py-1 rounded-full uppercase font-semibold tracking-wide mb-4 sm:mb-6"
            >
              BARK Protocol
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedShinyText
                text="The Next Evolution in Decentralized Finance (DeFAI)"
                className="text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg"
            >
              Intelligent Copilot for <span className="text-sand-400">Solana</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
            >
              BARK AI Agent: Your intelligent DeFi companion on Solana. Stake, trade, and manage assets with AI-powered insights and real-time decision-making. Experience the future of finance where blockchain meets artificial intelligence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:bg-gray-100 text-black w-full sm:w-auto">
                <Link href="/home">
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 bg-white/10 hover:bg-white/20 w-full sm:w-auto">
                <Link href="https://docs.barkprotocol.com/ai" target="_blank" rel="noopener noreferrer">
                  Whitepaper
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 sm:mt-16 flex flex-col items-center"
            >
              <p className="text-white/60 text-sm mb-2">Trade BARK on</p>
              <Link
                href="https://solscan.io/token/2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-xs mb-4 hover:text-white transition-colors duration-300 break-all"
              >
                CA: 2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {exchangeLinks.map((item, index) => (
                  <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Trade BARK on ${item.alt.split(' ')[0]}`}>
                    <Image
                      src={item.src || "https://ucarecdn.com/34411977-b14d-4daa-b825-16f02711cb20/solscan.png"}
                      alt={item.alt}
                      width={30}
                      height={30}
                      className="opacity-75 hover:opacity-90 transition-opacity duration-300"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

