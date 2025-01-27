"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is BARK AI Agent?",
    answer:
      "BARK AI Agent is an advanced AI-powered platform designed to optimize your trading experience on the Solana blockchain. It combines cutting-edge artificial intelligence with deep blockchain integration to provide smart trading strategies, real-time market analysis, and seamless DeFi interactions.",
  },
  {
    question: "How does BARK AI improve my trading?",
    answer:
      "BARK AI leverages machine learning algorithms to analyze market trends, predict potential opportunities, and execute trades with high efficiency. It can help you make data-driven decisions, optimize your portfolio, and potentially increase your returns while managing risks.",
  },
  {
    question: "Is BARK AI Agent secure?",
    answer:
      "Yes, security is our top priority. BARK AI Agent employs state-of-the-art encryption, multi-factor authentication, and cold storage options to protect your assets and data. However, always remember to follow best practices for crypto security and never share your private keys.",
  },
  {
    question: "Can I use BARK AI with other blockchains?",
    answer:
      "While BARK AI is primarily optimized for the Solana blockchain, we are working on expanding our cross-chain compatibility. Stay tuned for updates on support for additional blockchain networks.",
  },
  {
    question: "How do I get started with BARK AI Agent?",
    answer:
      "Getting started is easy! Simply sign up for an account, connect your Solana wallet, and you'll be guided through a quick onboarding process. You can then start exploring our features and customizing your AI agent to suit your trading style and goals.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <h2 id="faq-heading" className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-card hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="p-4 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




