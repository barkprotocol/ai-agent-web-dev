import React from 'react';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface Token {
  address: string;
  name: string;
  symbol: string;
  marketCap: string;
  volume24: string;
  liquidity: string;
  transactions24h: number;
  image: string | null;
  holdersCount?: number;
  listedAt?: string;
  change: number;
}

interface TokenGridProps {
  tokens: Token[];
  className?: string;
  isLoading?: boolean;
}

const TokenCard: React.FC<{ token: Token }> = ({ token }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-background/50 border border-border/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border/80 hover:bg-muted/20 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-3 p-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={token.image || "/placeholder.png"}
            alt={`${token.name} logo`}
            aria-label={`${token.name} token logo`}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            fill
            sizes="40px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-medium">{token.name}</h3>
          </div>
          <div className={cn(
            'mt-1 text-xs font-medium',
            token.change >= 0 ? 'text-green-500' : 'text-red-500',
          )}>
            {token.change >= 0 ? '+' : ''}{token.change.toFixed(2)}%
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px bg-border/50">
        <div className="bg-background/50 p-3">
          <p className="text-[10px] font-medium text-muted-foreground">Market Cap</p>
          <p className="mt-0.5 text-sm font-medium">${parseFloat(token.marketCap).toLocaleString()}</p>
        </div>
        <div className="bg-background/50 p-3">
          <p className="text-[10px] font-medium text-muted-foreground">24h Volume</p>
          <p className="mt-0.5 text-sm font-medium">${parseFloat(token.volume24).toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border/50 px-3 py-2 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>{token.holdersCount?.toLocaleString()} holders</span>
          <span className="h-3 w-px bg-border/50" aria-hidden="true" />
          <span>Listed {token.listedAt ? formatDistanceToNow(new Date(token.listedAt), { addSuffix: true }) : 'Unknown'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-muted/50 px-1.5 py-0.5">
            {token.transactions24h.toLocaleString()} txns
          </span>
        </div>
      </div>
    </div>
  );
};

export const TokenGrid: React.FC<TokenGridProps> = ({ tokens, className, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className={cn(
        'grid gap-4',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-xl bg-muted/40 h-48" />
        ))}
      </div>
    );
  }

  if (!tokens?.length) return null;

  return (
    <div className={cn(
      'grid gap-4',
      tokens.length === 1
        ? 'grid-cols-1'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      className
    )}>
      {tokens.map((token) => (
        <TokenCard key={token.address} token={token} />
      ))}
    </div>
  );
};

