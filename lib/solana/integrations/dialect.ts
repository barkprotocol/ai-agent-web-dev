import { Connection, PublicKey } from '@solana/web3.js';
import {
  Dialect,
  DialectSdk,
  DialectSdkInfo,
  Environment,
  ThreadMemberScope,
} from '@dialectlabs/sdk';

// Initialize Dialect SDK
let dialectInstance: Dialect | null = null;

/**
 * Initialize the Dialect SDK
 * @param connection Solana connection
 * @param wallet User's wallet
 */
export async function initializeDialect(
  connection: Connection,
  wallet: { publicKey: PublicKey; signMessage: (message: Uint8Array) => Promise<Uint8Array> }
): Promise<void> {
  if (dialectInstance) return;

  const dialectSdkInfo: DialectSdkInfo = {
    environment: Environment.PRODUCTION, // or Environment.DEVELOPMENT for testnet
    dialectCloud: {
      tokenStore: {
        token: process.env.NEXT_PUBLIC_DIALECT_API_KEY,
      },
    },
  };

  dialectInstance = await DialectSdk.initialize(dialectSdkInfo);
  await dialectInstance.wallet.connect(wallet);
}

/**
 * Send a message to a specific thread
 * @param threadAddress The address of the thread to send the message to
 * @param content The content of the message
 */
export async function sendMessage(threadAddress: string, content: string): Promise<void> {
  if (!dialectInstance) {
    throw new Error('Dialect SDK not initialized');
  }

  const thread = await dialectInstance.threads.find(threadAddress);
  if (!thread) {
    throw new Error('Thread not found');
  }

  await thread.send({
    content,
  });
}

/**
 * Create a new thread
 * @param recipients Array of recipient public keys
 * @param name Optional name for the thread
 */
export async function createThread(
  recipients: string[],
  name?: string
): Promise<string> {
  if (!dialectInstance) {
    throw new Error('Dialect SDK not initialized');
  }

  const thread = await dialectInstance.threads.create({
    encrypted: true,
    name: name || 'New Thread',
    recipients: recipients.map(recipient => ({
      address: new PublicKey(recipient),
      scopes: [ThreadMemberScope.ADMIN],
    })),
  });

  return thread.address.toString();
}

/**
 * Get all threads for the current user
 */
export async function getThreads(): Promise<any[]> {
  if (!dialectInstance) {
    throw new Error('Dialect SDK not initialized');
  }

  const threads = await dialectInstance.threads.findAll();
  return threads.map(thread => ({
    address: thread.address.toString(),
    name: thread.name,
    lastMessageTimestamp: thread.lastMessageTimestamp,
  }));
}

/**
 * Subscribe to new messages in a thread
 * @param threadAddress The address of the thread to subscribe to
 * @param callback Function to call when a new message is received
 */
export function subscribeToThread(
  threadAddress: string,
  callback: (message: any) => void
): () => void {
  if (!dialectInstance) {
    throw new Error('Dialect SDK not initialized');
  }

  const unsubscribe = dialectInstance.threads.onMessagesUpdated(
    { thread: { address: threadAddress } },
    (event) => {
      if (event.type === 'message-received') {
        callback(event.message);
      }
    }
  );

  return unsubscribe;
}

