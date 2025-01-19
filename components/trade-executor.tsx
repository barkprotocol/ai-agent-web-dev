import React, { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { trade } from '@/app/utils/trade';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function TradeExecutor() {
  const [outputMint, setOutputMint] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTrade = async () => {
    setIsLoading(true);
    try {
      const agent = /* Initialize SolanaAgentKit here */;
      const signature = await trade(
        agent,
        new PublicKey(outputMint),
        parseFloat(inputAmount)
      );
      toast.success(`Trade executed successfully. Signature: ${signature}`);
    } catch (error) {
      console.error('Trade failed:', error);
      toast.error('Trade failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Output Mint Address"
        value={outputMint}
        onChange={(e) => setOutputMint(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Input Amount"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
      />
      <Button onClick={handleTrade} disabled={isLoading}>
        {isLoading ? 'Executing Trade...' : 'Execute Trade'}
      </Button>
    </div>
  );
}

