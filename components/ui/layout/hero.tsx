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
          className="relative w-full h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
        >
          <Image
            src="https://ucarecdn.com/f6029e68-9768-49db-80a9-64e41e70acff/waveblack.png"
            alt="Abstract wave background"
            fill
            sizes="100vw"
            quality={95}
            priority
            className={`object-cover object-center transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" aria-hidden="true"></div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-sand-600 text-black text-xs sm:text-sm px-3 py-1 rounded-full uppercase font-semibold tracking-wide mb-6"
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
                className="text-sm sm:text-base md:text-lg font-medium mb-4"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 drop-shadow-lg"
            >
              Intelligent Copilot for <span className="text-sand-400">Solana</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed"
            >
              Empower your financial journey with BARK AI Agent, the groundbreaking fusion of blockchain technology and artificial intelligence. 
              Seamlessly stake, trade, and manage assets while unlocking advanced insights and real-time decision-making. 
              Welcome to the future of decentralized finance—where intelligence meets innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:bg-gray-100 text-black">
                <Link href="/home">
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 bg-white/10 hover:bg-white/20">
                <Link href="https://docs.barkprotocol.com/ai" target="_blank" rel="noopener noreferrer">
                  Documentation
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-16 flex flex-col items-center"
            >
              <p className="text-white/60 text-sm mb-2">Trade BARK on</p>
              <Link
                href="https://solscan.io/token/2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-xs mb-4 hover:text-white transition-colors duration-300"
              >
                CA: 2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {exchangeLinks.map((item, index) => (
                  <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Trade BARK on ${item.alt.split(' ')[0]}`}>
                    <Image
                      src={item.src || "https://ucarecdn.com/34411977-b14d-4daa-b825-16f02711cb20/solscan.png"}
                      alt={item.alt}
                      width={35}
                      height={35}
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
