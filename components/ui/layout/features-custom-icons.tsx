'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const features: Feature[] = [
  {
    title: "AI-Powered Trading",
    description: "Leverage advanced AI algorithms for smart, automated trading strategies.",
    image: "/images/ai-trading.jpg",
    alt: "AI-powered trading visualization"
  },
  {
    title: "Real-Time Market Analysis",
    description: "Get instant insights with our real-time market analysis tools.",
    image: "/images/market-analysis.jpg",
    alt: "Real-time market analysis dashboard"
  },
  {
    title: "Secure Wallet Integration",
    description: "Seamlessly integrate and manage multiple wallets with top-tier security.",
    image: "/images/secure-wallet.jpg",
    alt: "Secure wallet integration interface"
  },
  {
    title: "DeFi Yield Optimization",
    description: "Maximize your returns with AI-driven yield farming strategies.",
    image: "/images/defi-yield.jpg",
    alt: "DeFi yield optimization chart"
  },
  {
    title: "Cross-Chain Compatibility",
    description: "Operate seamlessly across multiple blockchain networks.",
    image: "/images/cross-chain.jpg",
    alt: "Cross-chain compatibility illustration"
  },
  {
    title: "Community Governance",
    description: "Participate in decentralized decision-making for platform evolution.",
    image: "/images/governance.jpg",
    alt: "Community governance voting interface"
  }
];

export function Features() {
  const memoizedFeatures = useMemo(() => features, []);

  return (
    <section className="bg-background py-16 sm:py-24" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Powerful Features for DeFi Success
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the tools that will revolutionize your DeFi experience
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {memoizedFeatures.map((feature, idx) => (
            <li key={idx} className={cn(
              "group relative overflow-hidden rounded-lg border bg-card p-6 shadow-md transition-all hover:shadow-lg",
              "hover:-translate-y-1 hover:border-primary/50"
            )}>
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-md">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
