'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bot, BarChart, Zap, Shield, Coins, Users } from 'lucide-react';

const sections = [
  {
    title: "AI-Powered Trading",
    description:
      "Leverage advanced AI algorithms for smart, automated trading strategies tailored to your preferences and risk tolerance.",
    icon: Bot,
  },
  {
    title: "Real-Time Market Analysis",
    description:
      "Access instant insights with our real-time market analysis tools, helping you make informed decisions in the fast-paced crypto market.",
    icon: BarChart,
  },
  {
    title: "Lightning-Fast Transactions",
    description:
      "Execute trades with unprecedented speed using our optimized transaction processing system built on Solana.",
    icon: Zap,
  },
  {
    title: "Enhanced Security",
    description:
      "Benefit from state-of-the-art security measures, including multi-factor authentication and cold storage options for your assets.",
    icon: Shield,
  },
  {
    title: "DeFi Integration",
    description:
      "Seamlessly interact with various DeFi protocols to maximize your yield and explore new financial opportunities.",
    icon: Coins,
  },
  {
    title: "Community Insights",
    description:
      "Gain valuable insights from our community of traders and analysts, and participate in collaborative decision-making.",
    icon: Users,
  },
];

export default function HowItWorks() {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <section className="py-16 bg-muted" aria-labelledby="how-it-works-title">
      <div className="container mx-auto px-4">
        <h2 id="how-it-works-title" className="text-3xl font-bold mb-4 text-center">How BARK AI Agent Works</h2>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Discover how BARK AI Agent revolutionizes your trading experience with cutting-edge AI and blockchain technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card
              key={index}
              className={cn(
                "transition-all duration-200 cursor-pointer p-4",
                activeSection === index
                  ? "shadow-2xl bg-card dark:bg-gray-800 ring-2 ring-primary"
                  : "shadow-lg hover:shadow-2xl hover:bg-accent dark:hover:bg-gray-900"
              )}
              onClick={() => setActiveSection(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSection(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={activeSection === index}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <section.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {section.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">
                  {section.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

