import { PublicKey } from '@solana/web3.js';
import { throttle } from '@/lib/utils';

// Constants
export const MAGIC_EDEN_API_URL = 'https://api-mainnet.magiceden.dev/v2';
export const MAGIC_EDEN_CDN_URL = 'https://img-cdn.magiceden.dev';

// Rate limiting
const RATE_LIMIT = 60; // requests per minute
const rateLimiter = throttle((fn: Function) => fn(), 60000 / RATE_LIMIT);

// Types
export interface MagicEdenCollection {
  symbol: string;
  name: string;
  description: string;
  image: string;
  twitter?: string;
  discord?: string;
  website?: string;
  categories?: string[];
  floorPrice?: number;
  listedCount?: number;
  volumeAll?: number;
}

export interface MagicEdenListing {
  pdaAddress: string;
  auctionHouse: string;
  tokenAddress: string;
  tokenMint: string;
  seller: string;
  tokenSize: number;
  price: number;
  rarity?: {
    moonrank?: number;
    howrare?: number;
  };
  extra?: {
    img: string;
  };
}

export interface MagicEdenActivity {
  signature: string;
  type: 'list' | 'delist' | 'buyNow' | 'bid' | 'cancelBid' | 'acceptBid';
  source: string;
  collection: string;
  slot: number;
  blockTime: number;
  buyer?: string;
  seller?: string;
  price?: number;
}

export class MagicEdenAPI {
  private static async fetchWithRateLimit(url: string, init?: RequestInit): Promise<Response> {
    return new Promise((resolve, reject) => {
      rateLimiter(async () => {
        try {
          const response = await fetch(url, {
            ...init,
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'Bark-AI-Agent/1.0',
              ...init?.headers,
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
   * Get collection information
   * @param symbol - Collection symbol
   * @returns Promise with collection information
   * @throws MagicEdenAPIError if the request fails
   */
  static async getCollection(symbol: string): Promise<MagicEdenCollection> {
    try {
      const url = `${MAGIC_EDEN_API_URL}/collections/${encodeURIComponent(symbol)}`;
      const response = await this.fetchWithRateLimit(url);

      if (!response.ok) {
        throw new Error(`Magic Eden API error: ${response.statusText}`);
      }

      const data = await response.json() as MagicEdenCollection;
      return data;
    } catch (error) {
      console.error('Magic Eden get collection error:', error);
      throw new MagicEdenAPIError('Failed to get collection information', error as Error);
    }
  }

  /**
   * Get collection listings
   * @param symbol - Collection symbol
   * @param limit - Number of listings to fetch (default: 20)
   * @param offset - Offset for pagination (default: 0)
   * @returns Promise with array of listings
   * @throws MagicEdenAPIError if the request fails
   */
  static async getListings(symbol: string, limit: number = 20, offset: number = 0): Promise<MagicEdenListing[]> {
    try {
      const url = `${MAGIC_EDEN_API_URL}/collections/${encodeURIComponent(symbol)}/listings?limit=${limit}&offset=${offset}`;
      const response = await this.fetchWithRateLimit(url);

      if (!response.ok) {
        throw new Error(`Magic Eden API error: ${response.statusText}`);
      }

      const data = await response.json() as MagicEdenListing[];
      return data;
    } catch (error) {
      console.error('Magic Eden get listings error:', error);
      throw new MagicEdenAPIError('Failed to get collection listings', error as Error);
    }
  }

  /**
   * Get collection activities
   * @param symbol - Collection symbol
   * @param limit - Number of activities to fetch (default: 100)
   * @param offset - Offset for pagination (default: 0)
   * @returns Promise with array of activities
   * @throws MagicEdenAPIError if the request fails
   */
  static async getActivities(symbol: string, limit: number = 100, offset: number = 0): Promise<MagicEdenActivity[]> {
    try {
      const url = `${MAGIC_EDEN_API_URL}/collections/${encodeURIComponent(symbol)}/activities?limit=${limit}&offset=${offset}`;
      const response = await this.fetchWithRateLimit(url);

      if (!response.ok) {
        throw new Error(`Magic Eden API error: ${response.statusText}`);
      }

      const data = await response.json() as MagicEdenActivity[];
      return data;
    } catch (error) {
      console.error('Magic Eden get activities error:', error);
      throw new MagicEdenAPIError('Failed to get collection activities', error as Error);
    }
  }

  /**
   * Get NFT metadata
   * @param mintAddress - NFT mint address
   * @returns Promise with NFT metadata
   * @throws MagicEdenAPIError if the request fails
   */
  static async getNftMetadata(mintAddress: string): Promise<any> {
    try {
      // Validate mint address
      try {
        new PublicKey(mintAddress);
      } catch (error) {
        throw new Error('Invalid NFT mint address');
      }

      const url = `${MAGIC_EDEN_API_URL}/tokens/${mintAddress}`;
      const response = await this.fetchWithRateLimit(url);

      if (!response.ok) {
        throw new Error(`Magic Eden API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Magic Eden get NFT metadata error:', error);
      throw new MagicEdenAPIError('Failed to get NFT metadata', error as Error);
    }
  }

  /**
   * Format Magic Eden collection URL
   * @param symbol - Collection symbol
   * @returns Formatted Magic Eden collection URL
   */
  static formatCollectionUrl(symbol: string): string {
    return `https://magiceden.io/marketplace/${encodeURIComponent(symbol)}`;
  }

  /**
   * Format Magic Eden NFT URL
   * @param mintAddress - NFT mint address
   * @returns Formatted Magic Eden NFT URL
   */
  static formatNftUrl(mintAddress: string): string {
    return `https://magiceden.io/item-details/${mintAddress}`;
  }

  /**
   * Format Magic Eden CDN image URL
   * @param path - Image path
   * @returns Formatted Magic Eden CDN image URL
   */
  static formatImageUrl(path: string): string {
    return `${MAGIC_EDEN_CDN_URL}/${path}`;
  }
}

export class MagicEdenAPIError extends Error {
  public readonly originalError: Error | null;

  constructor(message: string, originalError?: Error) {
    super(message);
    this.name = 'MagicEdenAPIError';
    this.originalError = originalError || null;
  }
}

// Utility functions
export function calculateFloorPrice(listings: MagicEdenListing[]): number {
  if (listings.length === 0) return 0;
  return Math.min(...listings.map(listing => listing.price));
}

export function calculateAveragePrice(listings: MagicEdenListing[]): number {
  if (listings.length === 0) return 0;
  const sum = listings.reduce((acc, listing) => acc + listing.price, 0);
  return sum / listings.length;
}

export function formatSolPrice(price: number): string {
  return `◎${price.toFixed(2)}`;
}

export function parseActivityType(type: MagicEdenActivity['type']): string {
  const typeMap: Record<MagicEdenActivity['type'], string> = {
    list: 'Listed',
    delist: 'Delisted',
    buyNow: 'Sold',
    bid: 'Bid Placed',
    cancelBid: 'Bid Cancelled',
    acceptBid: 'Bid Accepted',
  };
  return typeMap[type] || 'Unknown';
}

