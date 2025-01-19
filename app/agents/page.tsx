import { Bot } from 'lucide-react'
import { GovernanceAdvisor } from '@/components/agents/governance-advisor'
import { AITradingAgent } from '@/components/agents/ai-trading-agent'
import { NFTCurator } from '@/components/agents/nft-curator'
import { WalletManager } from '@/components/agents/wallet-manager'
import { BarkDeveloper } from '@/components/agents/bark-developer'
import { BlinkAgent } from '@/components/agents/blink-agent'
import { TelegramAgent } from '@/components/agents/telegram-agent'

export default function AgentsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center space-x-4">
        <Bot className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">BARK | AI Agents</h1>
      </div>
      <p className="mb-8 text-lg text-muted-foreground">
        Explore our collection of specialized AI agents designed to assist you with various tasks on the Solana blockchain.
      </p>
      <div className="space-y-8">
        <GovernanceAdvisor />
        <AITradingAgent />
        <NFTCurator />
        <WalletManager />
        <BarkDeveloper />
        <BlinkAgent />
        <TelegramAgent />
      </div>
    </div>
  )
}

