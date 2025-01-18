'use client';

import useSWR from 'swr';

import { useUser } from '@/hooks/use-user';
import { throttle } from '@/lib/utils';
import { WalletPortfolio } from '@/types/helius/portfolio';

const fetcher = async (key: string, address: string): Promise<WalletPortfolio> => {
  const response = await fetch(`/api/wallet/${address}/portfolio`);
  if (!response.ok) throw new Error('Failed to fetch portfolio');
  return response.json();
};

export function useWalletPortfolio() {
  const { user } = useUser();
  const walletAddress = user?.wallets?.[0]?.publicKey;

  const { data, mutate, isLoading, error } = useSWR<WalletPortfolio, Error>(
    walletAddress ? ['wallet-portfolio', walletAddress] : null,
    fetcher,
    {
      refreshInterval: 60000, // Refresh every 60 seconds
      revalidateOnFocus: true,
      keepPreviousData: true,
    }
  );

  const refresh = throttle(() => {
    mutate();
  }, 1000);

  return { data, refresh, isLoading, error };
}

