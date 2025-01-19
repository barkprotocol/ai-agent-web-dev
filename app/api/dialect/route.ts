import { NextRequest, NextResponse } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';
import {
  initializeDialect,
  sendMessage,
  createThread,
  getThreads,
} from '@/lib/solana/integrations/dialect';

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com');

export async function POST(req: NextRequest) {
  try {
    const { action, data } = await req.json();

    // Mock wallet for server-side operations
    const mockWallet = {
      publicKey: new PublicKey(process.env.DIALECT_WALLET_PUBLIC_KEY || ''),
      signMessage: async (message: Uint8Array) => {
        // This is a mock implementation. In a real scenario, you'd use a proper signing mechanism.
        return new Uint8Array(64);
      },
    };

    // Initialize Dialect
    await initializeDialect(connection, mockWallet);

    switch (action) {
      case 'sendMessage':
        const { threadAddress, content } = data;
        await sendMessage(threadAddress, content);
        return NextResponse.json({ success: true, message: 'Message sent successfully' });

      case 'createThread':
        const { recipients, name } = data;
        const threadAddress = await createThread(recipients, name);
        return NextResponse.json({ success: true, threadAddress });

      case 'getThreads':
        const threads = await getThreads();
        return NextResponse.json({ success: true, threads });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Dialect API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Mock wallet for server-side operations
    const mockWallet = {
      publicKey: new PublicKey(process.env.DIALECT_WALLET_PUBLIC_KEY || ''),
      signMessage: async (message: Uint8Array) => {
        // This is a mock implementation. In a real scenario, you'd use a proper signing mechanism.
        return new Uint8Array(64);
      },
    };

    // Initialize Dialect
    await initializeDialect(connection, mockWallet);

    const threads = await getThreads();
    return NextResponse.json({ success: true, threads });
  } catch (error) {
    console.error('Dialect API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

