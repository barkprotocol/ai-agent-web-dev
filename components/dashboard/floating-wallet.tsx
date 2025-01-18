'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Token {
  name: string;
  imageUrl?: string;
  balance?: string;
  symbol?: string;
}

interface Data {
  tokens: Token[];
  totalBalance?: string;
}

const WalletComponent = ({ data, isLoading }: { data: Data; isLoading: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const preloadImages = useCallback(async () => {
    if (data.tokens.length > 0) {
      await Promise.all(
        data.tokens.map((token) => {
          if (!token.imageUrl) return Promise.resolve();
          return new Promise((resolve) => {
            const img = new Image();
            img.src = token.imageUrl;
            img.onload = resolve;
            img.onerror = () => {
              console.error(`Failed to load image for token: ${token.name}`);
              resolve();
            };
          });
        })
      );
    }
    setImagesLoaded(true);
  }, [data.tokens]);

  useEffect(() => {
    setMounted(true);
    preloadImages();
  }, [preloadImages]);

  const toggleExpanded = useCallback(() => setIsExpanded((prev) => !prev), []);

  const walletContent = useMemo(() => (
    <div className="flex items-center gap-1.5">
      <Wallet className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <span className="text-sm font-medium text-muted-foreground">
        {data.totalBalance ? `$${data.totalBalance}` : 'My Wallet'}
      </span>
    </div>
  ), [data.totalBalance]);

  if (!mounted || !imagesLoaded || isLoading) {
    return (
      <div className="absolute bottom-full right-4 z-50 mb-3 select-none">
        <div className="flex items-center gap-1.5 rounded-2xl bg-black/[0.02] px-3 py-2 backdrop-blur-[12px] dark:bg-black/10 dark:backdrop-blur-xl">
          <Wallet className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <span className="text-sm text-muted-foreground">Loading wallet...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-full right-4 z-50 mb-3 select-none">
      <motion.div
        layout="preserve-aspect"
        className={cn(
          "flex cursor-pointer items-center gap-1.5 rounded-2xl bg-black/[0.02] px-3 py-2 backdrop-blur-[12px]",
          "transition-colors hover:bg-black/[0.04] dark:bg-black/10 dark:backdrop-blur-xl dark:hover:bg-black/20"
        )}
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-label="Toggle wallet details"
      >
        {walletContent}
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-lg bg-background p-4 shadow-lg"
          >
            <h2 className="mb-2 text-lg font-semibold">Wallet Details</h2>
            <ul className="space-y-2">
              {data.tokens.map((token) => (
                <li key={token.name} className="flex items-center gap-2">
                  {token.imageUrl && (
                    <Image
                      src={token.imageUrl || "/placeholder.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  )}
                  <span className="font-medium">{token.name}</span>
                  {token.balance && (
                    <span className="ml-auto text-sm text-muted-foreground">
                      {token.balance} {token.symbol}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WalletComponent;

