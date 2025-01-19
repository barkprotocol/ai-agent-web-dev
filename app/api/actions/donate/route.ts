import { NextRequest, NextResponse } from 'next/server';
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { getRoutes, executeSwap } from '@/lib/solana/integrations/jupiter';

// Initialize Solana connection
const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com');

// Define token addresses
const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
const BARK_MINT = new PublicKey('2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg');

// Donation wallet address
const DONATION_WALLET = new PublicKey(process.env.DONATION_WALLET_ADDRESS || '');

export async function POST(req: NextRequest) {
  try {
    const { amount, token, userPublicKey } = await req.json();

    if (!amount || !token || !userPublicKey) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const userPubkey = new PublicKey(userPublicKey);
    let transaction: Transaction;

    switch (token.toUpperCase()) {
      case 'SOL':
        transaction = await createSolDonationTransaction(amount, userPubkey);
        break;
      case 'USDC':
        transaction = await createUsdcDonationTransaction(amount, userPubkey);
        break;
      case 'BARK':
        transaction = await createBarkDonationTransaction(amount, userPubkey);
        break;
      default:
        return NextResponse.json({ error: 'Invalid token type' }, { status: 400 });
    }

    // Serialize the transaction
    const serializedTransaction = transaction.serialize({ requireAllSignatures: false });
    const base64Transaction = serializedTransaction.toString('base64');

    return NextResponse.json({ transaction: base64Transaction });

  } catch (error) {
    console.error('Donation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function createSolDonationTransaction(amount: number, fromPubkey: PublicKey): Promise<Transaction> {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey,
      toPubkey: DONATION_WALLET,
      lamports: amount * LAMPORTS_PER_SOL
    })
  );

  return transaction;
}

async function createUsdcDonationTransaction(amount: number, fromPubkey: PublicKey): Promise<Transaction> {
  const usdcToken = new Token(connection, USDC_MINT, TOKEN_PROGRAM_ID, fromPubkey);
  const fromTokenAccount = await usdcToken.getOrCreateAssociatedAccountInfo(fromPubkey);
  const toTokenAccount = await usdcToken.getOrCreateAssociatedAccountInfo(DONATION_WALLET);

  const transaction = new Transaction().add(
    Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromPubkey,
      [],
      amount * 1e6 // USDC has 6 decimal places
    )
  );

  return transaction;
}

async function createBarkDonationTransaction(amount: number, fromPubkey: PublicKey): Promise<Transaction> {
  const barkToken = new Token(connection, BARK_MINT, TOKEN_PROGRAM_ID, fromPubkey);
  const fromTokenAccount = await barkToken.getOrCreateAssociatedAccountInfo(fromPubkey);
  const toTokenAccount = await barkToken.getOrCreateAssociatedAccountInfo(DONATION_WALLET);

  const transaction = new Transaction().add(
    Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromPubkey,
      [],
      amount * 1e9 // Assuming BARK has 9 decimal places, adjust if different
    )
  );

  return transaction;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const amount = searchParams.get('amount');
    const inputToken = searchParams.get('inputToken');
    const outputToken = searchParams.get('outputToken');

    if (!amount || !inputToken || !outputToken) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const routes = await getRoutes(
      inputToken,
      outputToken,
      parseFloat(amount) * 1e9, // Assuming 9 decimal places, adjust if different
      1 // 1% slippage
    );

    if (routes.length === 0) {
      return NextResponse.json({ error: 'No routes found' }, { status: 404 });
    }

    const bestRoute = routes[0]; // Assuming the first route is the best

    return NextResponse.json({
      inputAmount: amount,
      outputAmount: bestRoute.outAmount / 1e9, // Convert back to human-readable format
      priceImpact: bestRoute.priceImpactPct * 100,
      route: bestRoute
    });

  } catch (error) {
    console.error('Route fetching error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

