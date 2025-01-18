import { NextRequest, NextResponse } from 'next/server';

import { searchWalletAssets } from '@/lib/solana/helius';
import { transformToPortfolio } from '@/types/helius/portfolio';

export async function GET(
  request: NextRequest,
  { params }: { params: { address: string } }
) {
  try {
    const { address } = params;

    if (!address || typeof address !== 'string') {
      return NextResponse.json(
        { error: 'Invalid wallet address' },
        { status: 400 }
      );
    }

    // Basic Solana address validation (you might want to use a more robust validation)
    if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) {
      return NextResponse.json(
        { error: 'Invalid Solana wallet address format' },
        { status: 400 }
      );
    }

    const { fungibleTokens, nonFungibleTokens } = await searchWalletAssets(address);
    
    if (!fungibleTokens || !nonFungibleTokens) {
      throw new Error('Failed to fetch wallet assets');
    }

    const portfolio = transformToPortfolio(
      address,
      fungibleTokens,
      nonFungibleTokens
    );

    return NextResponse.json(portfolio);
  } catch (error) {
    console.error('Error fetching wallet portfolio:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Failed to fetch wallet portfolio: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'An unexpected error occurred while fetching the wallet portfolio' },
      { status: 500 }
    );
  }
}

