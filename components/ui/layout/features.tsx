'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TrendingUp, BarChart2, Wallet, PieChart, GitBranch, Users } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "AI-Powered Trading",
    description: "Leverage advanced AI algorithms for smart, automated trading strategies.",
    alt: "AI-powered trading visualization",
    icon: <TrendingUp className="w-6 h-6 text-[#d0c8b9]" />
  },
  {
    title: "Real-Time Market Analysis",
    description: "Get instant insights with our real-time market analysis tools.",
    alt: "Real-time market analysis dashboard",
    icon: <BarChart2 className="w-6 h-6 text-[#d0c8b9]" />
  },
  {
    title: "Secure Wallet Integration",
    description: "Seamlessly integrate and manage multiple wallets with top-tier security.",
    alt: "Secure wallet integration interface",
    icon: <Wallet className="w-6 h-6 text-[#d0c8b9]" />
  },
  {
    title: "DeFi Yield Optimization",
    description: "Maximize your returns with AI-driven yield farming strategies.",
    alt: "DeFi yield optimization chart",
    icon: <PieChart className="w-6 h-6 text-[#d0c8b9]" />
  },
  {
    title: "Cross-Chain Compatibility",
    description: "Operate seamlessly across multiple blockchain networks.",
    alt: "Cross-chain compatibility illustration",
    icon: <GitBranch className="w-6 h-6 text-[#d0c8b9]" />
  },
  {
    title: "Community Governance",
    description: "Participate in decentralized decision-making for platform evolution.",
    alt: "Community governance voting interface",
    icon: <Users className="w-6 h-6 text-[#d0c8b9]" />
  }
];

export function Features() {
  const memoizedFeatures = useMemo(() => features, []);

  return (
    <section className="bg-gray-100 py-16 sm:py-24" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Powerful Features for DeFi Success
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the tools that will revolutionize your DeFAI experience
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {memoizedFeatures.map((feature, idx) => (
            <li key={idx} className={cn(
              "group relative overflow-hidden rounded-lg border p-6 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl",
              "hover:-translate-y-2 hover:border-primary/50",
              "bg-white dark:bg-black"
            )}>
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-md">
                <Image
                  src={feature.image || "https://ucarecdn.com/b60a22da-6905-4228-8b18-6967e01ce462/barkicontransparent.webp"}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-black/90 p-4 rounded-full text-primary transition-transform duration-300 ease-in-out group-hover:scale-125">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center">
                {feature.icon}
                <span className="ml-2">{feature.title}</span>
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
