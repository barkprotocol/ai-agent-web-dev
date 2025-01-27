"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Bot, BarChart3, Link, HeartHandshake, MessageSquare, Vote } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const features: Feature[] = [
  {
    title: "AI-Powered Trading",
    description: "Leverage advanced AI algorithms for smart, automated trading strategies.",
    icon: Bot,
  },
  {
    title: "Real-Time Market Analysis",
    description: "Get instant insights with our real-time market analysis tools.",
    icon: BarChart3,
  },
  {
    title: "Connect DeFi protocols on Solana",
    description: "Seamlessly integrate and interact with various DeFi protocols on the Solana blockchain.",
    icon: Link,
  },
  {
    title: "AI Powered Crowdfunding",
    description: "Leverage AI for disaster relief, donations, and social finance initiatives.",
    icon: HeartHandshake,
  },
  {
    title: "AI Chatbot Assistant",
    description: "Get instant support and guidance with our AI-powered chatbot.",
    icon: MessageSquare,
  },
  {
    title: "Community Governance",
    description:
      "Shape the future of BARK Protocol by voting on proposals using BARK tokens, ensuring a truly decentralized ecosystem.",
    icon: Vote,
  },
]

export function Features() {
  const memoizedFeatures = useMemo(() => features, [])

  return (
    <section className="py-16 sm:py-24 bg-background" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Powerful Features for DeFi Success
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the tools that will revolutionize your DeFi experience
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {memoizedFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-lg border p-6 shadow-lg transition-all duration-300 ease-in-out",
                "hover:-translate-y-1 hover:shadow-xl",
                "bg-card text-card-foreground",
              )}
            >
              <div className="mb-4">
                <feature.icon className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

