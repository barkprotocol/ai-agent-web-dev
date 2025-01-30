"use client"

import { useState } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { PricingCard } from "@/components/ui/pricing-card"
import { toast } from "sonner"
import { createSolanaTransaction, TREASURY_WALLET } from "@/lib/solana-transactions"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function PricingPageClient() {
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const wallet = useWallet()

  const handlePurchase = async (tier: string, price: number) => {
    if (!wallet.publicKey || !wallet.signTransaction) {
      toast.error("Please connect your wallet first")
      return
    }

    setIsLoading(true)
    try {
      const transaction = await createSolanaTransaction(price, wallet.publicKey, TREASURY_WALLET)
      const signedTransaction = await wallet.signTransaction(transaction)
      const signature = await wallet.sendTransaction(signedTransaction, wallet.connection)

      await wallet.connection.confirmTransaction(signature, "confirmed")

      toast.success(`${tier} purchase successful! Transaction signature: ${signature}`)
      // Here you would typically update the user's subscription status in your backend
    } catch (error) {
      console.error("Transaction failed", error)
      toast.error("Transaction failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const confirmPurchase = (tier: string, price: number) => {
    setSelectedTier(tier)
    setShowConfirmDialog(true)
  }

  const pricingTiers = [
    {
      title: "BARK AI Agent EAP",
      description: "Get exclusive early access to BARK AI Agent features",
      price: 1,
      currency: "SOL",
      features: [
        "Access to DeFi tools",
        "AI Chatbot assistance",
        "BARK Governance participation",
        "20% of purchase goes to treasury fund",
        "Exclusive EAP holder benefits",
      ],
      ctaText: isLoading ? "Processing..." : "Purchase EAP",
      onCtaClick: () => confirmPurchase("EAP", 1),
    },
    {
      title: "BARK Ecosystem Supporter",
      description: "Support BARK Protocol development and ecosystem growth",
      price: 5,
      currency: "SOL",
      features: [
        "All EAP features",
        "Early access to new BARK ecosystem projects",
        "Voting power in ecosystem development decisions",
        "30% of purchase goes to ecosystem development fund",
        "Exclusive supporter badge on BARK platforms",
      ],
      ctaText: isLoading ? "Processing..." : "Become a Supporter",
      onCtaClick: () => confirmPurchase("Ecosystem Supporter", 5),
    },
    {
      title: "BARK Charity Champion",
      description: "Contribute to charity and disaster relief efforts",
      price: 3,
      currency: "SOL",
      features: [
        "All EAP features",
        "50% of purchase goes to charity and disaster relief fund",
        "Vote on charity initiatives",
        "Participate in disaster relief decision-making",
        "Exclusive charity champion badge",
      ],
      ctaText: isLoading ? "Processing..." : "Become a Champion",
      onCtaClick: () => confirmPurchase("Charity Champion", 3),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">BARK Protocol Contribution Tiers</h1>
      <PricingCard tiers={pricingTiers} />
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why contribute to BARK Protocol?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          By purchasing one of our contribution tiers, you're not just gaining exclusive features - you're becoming a
          key part of the BARK ecosystem. Your contribution helps fuel the growth and development of the platform,
          supports charitable causes, and gives you a voice in the future of BARK Protocol.
        </p>
        <h3 className="text-xl font-semibold mb-2">Fund Allocation</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Your contribution is allocated to various funds based on the tier you choose:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
          <li>Develop new features and improve existing ones</li>
          <li>Support BARK Protocol ecosystem growth and development</li>
          <li>Fund charitable initiatives and disaster relief efforts</li>
          <li>Ensure platform security and stability</li>
          <li>Support community initiatives and rewards</li>
          <li>Fund research and innovation in AI and blockchain technology</li>
        </ul>
      </div>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Purchase</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to purchase the {selectedTier} tier? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                const tier = pricingTiers.find((t) => t.title === selectedTier)
                if (tier) {
                  handlePurchase(tier.title, tier.price)
                }
                setShowConfirmDialog(false)
              }}
            >
              Confirm Purchase
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

