import { AgentCard } from '@/components/agent-card';

const AGENTS = [
  {
    name: "Trading Assistant",
    description: "AI-powered trading strategies and market analysis for Solana tokens.",
    icon: "💹",
  },
  {
    name: "NFT Curator",
    description: "Discover and analyze trending NFT collections on Solana.",
    icon: "🖼️",
  },
  {
    name: "DeFi Optimizer",
    description: "Maximize your yields and optimize your DeFi strategies on Solana.",
    icon: "📈",
  },
  {
    name: "Wallet Manager",
    description: "Secure and efficient management of your Solana wallets and assets.",
    icon: "👛",
  },
  {
    name: "Solana Developer",
    description: "Assist with Solana smart contract development and deployment.",
    icon: "👨‍💻",
  },
  {
    name: "Governance Advisor",
    description: "Stay informed and participate in Solana ecosystem governance.",
    icon: "🏛️",
  },
];

export function AgentsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {AGENTS.map((agent) => (
        <AgentCard key={agent.name} agent={agent} />
      ))}
    </div>
  );
}

