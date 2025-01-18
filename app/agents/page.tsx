import { Bot } from 'lucide-react';
import { AgentsGrid } from '@/components/agents-grid';

export default function AgentsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center space-x-4">
        <Bot className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">AI Agents</h1>
      </div>
      <p className="mb-8 text-lg text-muted-foreground">
        Explore our collection of specialized AI agents designed to assist you with various tasks on the Solana blockchain.
      </p>
      <AgentsGrid />
    </div>
  );
}

