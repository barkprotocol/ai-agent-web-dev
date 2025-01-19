import { AgentCard } from '@/components/agent-card';
import { Rocket, TrendingUp, Image, LineChart, Wallet, Code, LandPlot } from 'lucide-react';

const AGENTS = [
  {
    name: "Trading Assistant",
    description: "AI-powered trading strategies and market analysis for Solana, SPL tokens.",
    icon: TrendingUp,
    //imageUrl: "https://example.com/trading-assistant.jpg",
    features: [
      "Real-time market analysis",
      "AI-driven trading signals",
      "Portfolio optimization",
      "Risk management tools"
    ],
    url: "/agents/trading-assistant"
  },
  {
    name: "NFT Curator",
    description: "Discover and analyze trending NFT collections on Solana.",
    icon: Image,
    //imageUrl: "https://example.com/nft-curator.jpg",
    features: [
      "Trending collections discovery",
      "Rarity analysis",
      "Price prediction",
      "Minting opportunities"
    ],
    url: "/agents/nft-curator"
  },
  {
    name: "DeFi Optimizer",
    description: "Maximize your yields and optimize your DeFi strategies on Solana.",
    icon: LineChart,
    //imageUrl: "https://example.com/defi-optimizer.jpg",
    features: [
      "Yield farming strategies",
      "Liquidity pool analysis",
      "Gas fee optimization",
      "Risk assessment"
    ],
    url: "/agents/defi-optimizer"
  },
  {
    name: "Wallet Manager",
    description: "Secure and efficient management of your Solana wallets and assets.",
    icon: Wallet,
    //imageUrl: "https://example.com/wallet-manager.jpg",
    features: [
      "Multi-wallet support",
      "Transaction history analysis",
      "Security recommendations",
      "Asset tracking"
    ],
    url: "/agents/wallet-manager"
  },
  {
    name: "BARK Developer",
    description: "Assist with BARK Prtocool development and deployment.",
    icon: Code,
    //imageUrl: "https://example.com/bark-developer.jpg",
    features: [
      "Smart contract templates",
      "Code review and optimization",
      "Deployment assistance",
      "Testing and debugging tools"
    ],
    url: "/agents/bark-developer"
  },
  {
    name: "Governance Advisor",
    description: "Stay informed and participate in BARK Protocol ecosystem governance.",
    icon: LandPlot,
    imageUrl: "https://example.com/governance-advisor.jpg",
    features: [
      "Proposal summaries",
      "Voting recommendations",
      "Delegate management",
      "Impact analysis"
    ],
    url: "/agents/governance-advisor"
  },
];

export function AgentsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {AGENTS.map((agent) => (
        <AgentCard
          key={agent.name}
          title={agent.name}
          description={agent.description}
          icon={<agent.icon className="h-6 w-6" />}
          imageUrl={agent.imageUrl}
          features={agent.features}
          url={agent.url}
        />
      ))}
    </div>
  );
}

