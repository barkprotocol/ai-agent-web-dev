import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import type { DiscordData, DiscordFetchStatus } from '@/app/types/discord';
import { fetchDiscordData } from '@/lib/api/discord';

export function useDiscordData(endpoint: string) {
  const [data, setData] = useState<DiscordData | null>(null);
  const [status, setStatus] = useState<DiscordFetchStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setStatus('loading');
      setError(null);
      const result = await fetchDiscordData(endpoint);
      setData(result);
      setStatus('success');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch Discord data';
      setError(message);
      setStatus('error');
      toast.error('Discord Error', {
        description: message,
      });
    }
  }, [endpoint]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    status,
    error,
    retry,
    isLoading: status === 'loading',
    isError: status === 'error',
    isSuccess: status === 'success',
  };
}

