import { throttle } from '@/lib/utils';

// Constants
export const DEXSCREENER_API_URL = 'https://api.dexscreener.com';
export const SOLANA_CHAIN_ID = 'solana';

// Rate limiting
const RATE_LIMIT = 30; // requests per minute
const rateLimiter = throttle((fn: Function) => fn(), 60000 / RATE_LIMIT);

// Types
export interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
}

export interface TransactionData {
  buys: number;
  sells: number;
}

export interface Transactions {
  m5: TransactionData;
  h1: TransactionData;
  h6: TransactionData;
  h24: TransactionData;
}

export interface VolumeData {
  h24: number;
  h6: number;
  h1: number;
  m5: number;
}

export interface PriceChangeData {
  m5: number;
  h1: number;
  h6: number;
  h24: number;
}

export interface LiquidityData {
  usd: number;
  base: number;
  quote: number;
}

export interface Social {
  type: string;
  url: string;
}

export interface Website {
  label: string;
  url: string;
}

export interface PairInfo {
  imageUrl?: string;
  header?: string;
  openGraph?: string;
  websites?: Website[];
  socials?: Social[];
}

export interface DexPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: TokenInfo;
  quoteToken: TokenInfo;
  priceNative: string;
  priceUsd: string;
  txns: Transactions;
  volume: VolumeData;
  priceChange: PriceChangeData;
  liquidity: LiquidityData;
  fdv: number;
  marketCap: number;
  pairCreatedAt: number;
  info?: PairInfo;
}

export interface DexScreenerError {
  code: string;
  message: string;
}

export class DexScreenerAPI {
  private static async fetchWithRateLimit(url: string): Promise<Response> {
    return new Promise((resolve, reject) => {
      rateLimiter(async () => {
        try {
          const response = await fetch(url, {
            next: { revalidate: 30 },
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'Bark-AI-Agent/1.0',
            },
          });
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  /**
   * Search for trading pairs on DEX platforms
   * @param query - Search query (token symbol, name, or address)
   * @param limit - Maximum number of results to return (default: 10)
   * @returns Promise with array of trading pairs or empty array if none found
   * @throws Error if the API request fails
   */
  static async searchPairs(query: string, limit: number = 10): Promise<DexPair[]> {
    try {
      const encodedQuery = encodeURIComponent(query);
      const url = `${DEXSCREENER_API_URL}/latest/dex/search?q=${encodedQuery}&limit=${limit}`;
      
      const response = await this.fetchWithRateLimit(url);
      
      if (!response.ok) {
        throw new Error(`DexScreener API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.pairs || !Array.isArray(data.pairs)) {
        console.warn('DexScreener API returned invalid data format');
        return [];
      }

      return data.pairs
        .filter((p: DexPair) => p.chainId === SOLANA_CHAIN_ID)
        .sort((a: DexPair, b: DexPair) => b.volume.h24 - a.volume.h24)
        .slice(0, limit);
    } catch (error) {
      console.error('DexScreener search error:', error);
      throw new DexScreenerAPIError('Failed to search pairs', error as Error);
    }
  }

  /**
   * Get detailed information about a specific trading pair
   * @param pairAddress - The address of the trading pair
   * @returns Promise with pair details or null if not found
   * @throws Error if the API request fails
   */
  static async getPairDetails(pairAddress: string): Promise<DexPair | null> {
    try {
      const url = `${DEXSCREENER_API_URL}/latest/dex/pairs/${SOLANA_CHAIN_ID}/${pairAddress}`;
      
      const response = await this.fetchWithRateLimit(url);
      
      if (!response.ok) {
        throw new Error(`DexScreener API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.pair) {
        return null;
      }

      return data.pair as DexPair;
    } catch (error) {
      console.error('DexScreener get pair details error:', error);
      throw new DexScreenerAPIError('Failed to get pair details', error as Error);
    }
  }

  /**
   * Get all trading pairs for a specific token
   * @param tokenAddress - The address of the token
   * @returns Promise with array of trading pairs or empty array if none found
   * @throws Error if the API request fails
   */
  static async getTokenPairs(tokenAddress: string): Promise<DexPair[]> {
    try {
      const url = `${DEXSCREENER_API_URL}/latest/dex/tokens/${tokenAddress}`;
      
      const response = await this.fetchWithRateLimit(url);
      
      if (!response.ok) {
        throw new Error(`DexScreener API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.pairs || !Array.isArray(data.pairs)) {
        return [];
      }

      return data.pairs
        .filter((p: DexPair) => p.chainId === SOLANA_CHAIN_ID)
        .sort((a: DexPair, b: DexPair) => b.volume.h24 - a.volume.h24);
    } catch (error) {
      console.error('DexScreener get token pairs error:', error);
      throw new DexScreenerAPIError('Failed to get token pairs', error as Error);
    }
  }
}

export class DexScreenerAPIError extends Error {
  public readonly originalError: Error | null;

  constructor(message: string, originalError?: Error) {
    super(message);
    this.name = 'DexScreenerAPIError';
    this.originalError = originalError || null;
  }
}

// Utility functions
export function formatDexScreenerUrl(pair: DexPair): string {
  return `https://dexscreener.com/${pair.chainId}/${pair.pairAddress}`;
}

export function calculatePriceImpact(amount: number, liquidityUsd: number): number {
  return (amount / liquidityUsd) * 100;
}

