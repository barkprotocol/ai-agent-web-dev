import { PublicKey } from '@solana/web3.js';
import { throttle } from '@/lib/utils';

// Constants
export const DIALECT_API_URL = 'https://api.dialect.to/v1';

// Rate limiting
const RATE_LIMIT = 60; // requests per minute
const rateLimiter = throttle((fn: Function) => fn(), 60000 / RATE_LIMIT);

// Types
export interface DialectThread {
  id: string;
  name: string;
  encrypted: boolean;
  members: string[];
  createdAt: string;
  updatedAt: string;
}

export interface DialectMessage {
  id: string;
  threadId: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface DialectNotification {
  id: string;
  recipient: string;
  title: string;
  body: string;
  type: 'email' | 'sms' | 'telegram' | 'wallet';
  createdAt: string;
}

export class DialectAPI {
  private static apiKey: string;

  /**
   * Initialize the Dialect API with an API key
   * @param apiKey - Dialect API key
   */
  static initialize(apiKey: string) {
    this.apiKey = apiKey;
  }

  private static async fetchWithRateLimit(url: string, init?: RequestInit): Promise<Response> {
    return new Promise((resolve, reject) => {
      rateLimiter(async () => {
        try {
          if (!this.apiKey) {
            throw new Error('Dialect API key not initialized');
          }

          const response = await fetch(url, {
            ...init,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.apiKey}`,
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
   * Create a new thread
   * @param name - Thread name
   * @param members - Array of member public keys
   * @param encrypted - Whether the thread should be encrypted
   * @returns Promise with created thread
   * @throws DialectAPIError if the request fails
   */
  static async createThread(name: string, members: string[], encrypted: boolean = true): Promise<DialectThread> {
    try {
      // Validate member addresses
      members.forEach(member => {
        try {
          new PublicKey(member);
        } catch (error) {
          throw new Error(`Invalid member address: ${member}`);
        }
      });

      const url = `${DIALECT_API_URL}/threads`;
      const response = await this.fetchWithRateLimit(url, {
        method: 'POST',
        body: JSON.stringify({ name, members, encrypted }),
      });

      if (!response.ok) {
        throw new Error(`Dialect API error: ${response.statusText}`);
      }

      const data = await response.json() as DialectThread;
      return data;
    } catch (error) {
      console.error('Dialect create thread error:', error);
      throw new DialectAPIError('Failed to create thread', error as Error);
    }
  }

  /**
   * Get threads for a user
   * @param userAddress - User's public key
   * @returns Promise with array of threads
   * @throws DialectAPIError if the request fails
   */
  static async getThreads(userAddress: string): Promise<DialectThread[]> {
    try {
      // Validate user address
      try {
        new PublicKey(userAddress);
      } catch (error) {
        throw new Error('Invalid user address');
      }

      const url = `${DIALECT_API_URL}/threads?member=${userAddress}`;
      const response = await this.fetchWithRateLimit(url);

      if (!response.ok) {
        throw new Error(`Dialect API error: ${response.statusText}`);
      }

      const data = await response.json() as DialectThread[];
      return data;
    } catch (error) {
      console.error('Dialect get threads error:', error);
      throw new DialectAPIError('Failed to get threads', error as Error);
    }
  }

  /**
   * Send a message to a thread
   * @param threadId - Thread ID
   * @param text - Message text
   * @param author - Author's public key
   * @returns Promise with sent message
   * @throws DialectAPIError if the request fails
   */
  static async sendMessage(threadId: string, text: string, author: string): Promise<DialectMessage> {
    try {
      // Validate author address
      try {
        new PublicKey(author);
      } catch (error) {
        throw new Error('Invalid author address');
      }

      const url = `${DIALECT_API_URL}/messages`;
      const response = await this.fetchWithRateLimit(url, {
        method: 'POST',
        body: JSON.stringify({ threadId, text, author }),
      });

      if (!response.ok) {
        throw new Error(`Dialect API error: ${response.statusText}`);
      }

      const data = await response.json() as DialectMessage;
      return data;
    } catch (error) {
      console.error('Dialect send message error:', error);
      throw new DialectAPIError('Failed to send message', error as Error);
    }
  }

  /**
   * Get messages from a thread
   * @param threadId - Thread ID
   * @param limit - Number of messages to fetch (default: 50)
   * @param before - Fetch messages before this timestamp
   * @returns Promise with array of messages
   * @throws DialectAPIError if the request fails
   */
  static async getMessages(threadId: string, limit: number = 50, before?: string): Promise<DialectMessage[]> {
    try {
      let url = `${DIALECT_API_URL}/messages?threadId=${threadId}&limit=${limit}`;
      if (before) {
        url += `&before=${before}`;
      }

      const response = await this.fetchWithRateLimit(url);

      if (!response.ok) {
        throw new Error(`Dialect API error: ${response.statusText}`);
      }

      const data = await response.json() as DialectMessage[];
      return data;
    } catch (error) {
      console.error('Dialect get messages error:', error);
      throw new DialectAPIError('Failed to get messages', error as Error);
    }
  }

  /**
   * Send a notification
   * @param recipient - Recipient's public key
   * @param title - Notification title
   * @param body - Notification body
   * @param type - Notification type (email, sms, telegram, or wallet)
   * @returns Promise with sent notification
   * @throws DialectAPIError if the request fails
   */
  static async sendNotification(recipient: string, title: string, body: string, type: 'email' | 'sms' | 'telegram' | 'wallet'): Promise<DialectNotification> {
    try {
      // Validate recipient address
      try {
        new PublicKey(recipient);
      } catch (error) {
        throw new Error('Invalid recipient address');
      }

      const url = `${DIALECT_API_URL}/notifications`;
      const response = await this.fetchWithRateLimit(url, {
        method: 'POST',
        body: JSON.stringify({ recipient, title, body, type }),
      });

      if (!response.ok) {
        throw new Error(`Dialect API error: ${response.statusText}`);
      }

      const data = await response.json() as DialectNotification;
      return data;
    } catch (error) {
      console.error('Dialect send notification error:', error);
      throw new DialectAPIError('Failed to send notification', error as Error);
    }
  }
}

export class DialectAPIError extends Error {
  public readonly originalError: Error | null;

  constructor(message: string, originalError?: Error) {
    super(message);
    this.name = 'DialectAPIError';
    this.originalError = originalError || null;
  }
}

// Utility functions
export function formatDialectTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleString();
}

export function truncateAddress(address: string, length: number = 4): string {
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}

export function isDialectThread(obj: any): obj is DialectThread {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'encrypted' in obj &&
    'members' in obj &&
    'createdAt' in obj &&
    'updatedAt' in obj
  );
}

export function isDialectMessage(obj: any): obj is DialectMessage {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'threadId' in obj &&
    'author' in obj &&
    'text' in obj &&
    'createdAt' in obj
  );
}

