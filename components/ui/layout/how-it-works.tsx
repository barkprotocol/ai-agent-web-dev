"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Bot, BarChart, Zap, Shield, Coins, Users } from "lucide-react"

interface Section {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  imageUrl: string
}

const initialSections: Section[] = [
  {
    id: "1",
    title: "AI-Powered Trading",
    description:
      "Leverage advanced AI algorithms for smart, automated trading strategies tailored to your preferences and risk tolerance.",
    icon: Bot,
    imageUrl: "https://ucarecdn.com/b60a22da-6905-4228-8b18-6967e01ce462/ai_trading.webp",
  },
  {
    id: "2",
    title: "Real-Time Market Analysis",
    description:
      "Access instant insights with our real-time market analysis tools, helping you make informed decisions in the fast-paced crypto market.",
    icon: BarChart,
    imageUrl: "https://ucarecdn.com/b60a22da-6905-4228-8b18-6967e01ce462/market_analysis.webp",
  },
  {
    id: "3",
    title: "Lightning-Fast Transactions",
    description:
      "Execute trades with unprecedented speed using our optimized transaction processing system built on Solana.",
    icon: Zap,
    imageUrl: "https://ucarecdn.com/b60a22da-6905-4228-8b18-6967e01ce462/fast_transactions.webp",
  },
  {
    id: "4",
    title: "Enhanced Security",
    description:
      "Benefit from state-of-the-art security measures, including multi-factor authentication and cold storage options for your assets.",
    icon: Shield,
    imageUrl: "https://ucarecdn.com/b60a22da-6905-4228-8b18-6967e01ce462/enhanced_security.webp",
  },
  {
    id: "5",
    title: "DeFi Integration",
    description:
      "Seamlessly interact with various DeFi protocols to maximize your yield and explore new financial opportunities.",
    icon: Coins,
    imageUrl: "https://ucarecdn.com/b60a22da-6905-4228-8b18-6967e01ce462/defi_integration.webp",
  },
  {
    id: "6",
    title: "Community Insights",
    description:
      "Gain valuable insights from our community of traders and analysts, and participate in collaborative decision-making.",
    icon: Users,
    imageUrl: "https://ucarecdn.com/b60a22da-6905-4228-8b18-6967e01ce462/community_insights.webp",
  },
]

export default function HowItWorks() {
  const [sections, setSections] = useState<Section[]>(initialSections)
  const [activeSection, setActiveSection] = useState<string>(sections[0].id)
  const [imageLoading, setImageLoading] = useState(true)

  const handleSectionClick = useCallback((id: string) => {
    setActiveSection(id)
    setImageLoading(true)
  }, [])

  const addSection = useCallback(() => {
    const newId = (sections.length + 1).toString()
    const newSection: Section = {
      id: newId,
      title: `New Feature ${newId}`,
      description: "Description for the new feature.",
      icon: Bot,
      imageUrl: "/placeholder.svg",
    }
    setSections((prevSections) => [...prevSections, newSection])
  }, [sections])

  const removeSection = useCallback(
    (id: string) => {
      setSections((prevSections) => prevSections.filter((section) => section.id !== id))
      if (activeSection === id) {
        setActiveSection(sections[0].id)
      }
    },
    [activeSection, sections],
  )

  useEffect(() => {
    if (sections.length > 0 && !sections.find((section) => section.id === activeSection)) {
      setActiveSection(sections[0].id)
    }
  }, [sections, activeSection])

  const activeSectionData = sections.find((section) => section.id === activeSection) || sections[0]

  return (
    <section className="py-16 bg-background" aria-labelledby="how-it-works-title">
      <div className="container mx-auto px-4">
        <h2 id="how-it-works-title" className="text-3xl font-bold mb-4 text-center text-foreground">
          How BARK AI Agent Works
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Discover how BARK AI Agent revolutionizes your trading experience with cutting-edge AI and blockchain
          technology.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 order-2 lg:order-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                initial={false}
                animate={{
                  backgroundColor: activeSection === section.id ? "hsl(var(--primary))" : "transparent",
                  color: activeSection === section.id ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))",
                }}
                className={cn(
                  "w-full text-left transition-all duration-200 p-4 rounded-lg",
                  "hover:bg-primary/10",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                )}
                onClick={() => handleSectionClick(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <section.icon
                      className={cn(
                        "w-6 h-6",
                        activeSection === section.id ? "text-primary-foreground" : "text-[#DBCFC7]",
                      )}
                    />
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeSection(section.id)
                    }}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </motion.button>
            ))}
            <button
              onClick={addSection}
              className="w-full text-center py-2 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Add New Section
            </button>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-foreground">{activeSectionData.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{activeSectionData.description}</p>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={activeSectionData.imageUrl || "/placeholder.svg"}
                    alt={activeSectionData.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={cn(
                      "object-cover transition-opacity duration-300",
                      imageLoading ? "opacity-0" : "opacity-100",
                    )}
                    priority
                    onLoadingComplete={() => setImageLoading(false)}
                  />
                  {imageLoading && <div className="absolute inset-0 bg-muted animate-pulse" />}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

