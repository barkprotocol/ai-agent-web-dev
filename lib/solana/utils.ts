import { resolve } from '@bonfida/spl-name-service';
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';

import { RPC_URL } from '../constants';

export const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

export const createConnection = (): Connection => new Connection(RPC_URL);

export interface TransferWithMemoParams {
  to: string;
  amount: number;
  memo: string;
}

interface PhantomProvider {
  isPhantom?: boolean;
  publicKey?: PublicKey;
  connect: () => Promise<{ publicKey: PublicKey }>;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
}

declare global {
  interface Window {
    phantom?: {
      solana?: PhantomProvider;
    };
    solana?: PhantomProvider;
  }
}

export class SolanaUtils {
  private static connection: Connection = createConnection();

  static async resolveDomainToAddress(domain: string): Promise<string> {
    try {
      const owner = await resolve(this.connection, domain);
      return owner.toBase58();
    } catch (error) {
      console.error('Failed to resolve domain:', error);
      throw new Error(`Failed to resolve domain: ${domain}`);
    }
  }

  static async getBalance(address: string): Promise<number> {
    try {
      let publicKeyStr = address;

      if (address.toLowerCase().endsWith('.sol')) {
        publicKeyStr = await this.resolveDomainToAddress(address);
      }

      const balance = await this.connection.getBalance(new PublicKey(publicKeyStr));
      return balance / LAMPORTS_PER_SOL;
    } catch (error) {
      console.error('Failed to fetch balance:', error);
      throw new Error(`Failed to fetch balance for address: ${address}`);
    }
  }

  static async getPhantomProvider(): Promise<PhantomProvider> {
    if ('phantom' in window && window.phantom?.solana?.isPhantom) {
      return window.phantom.solana;
    }
    if (window.solana?.isPhantom) {
      return window.solana;
    }
    throw new Error('Phantom wallet not found');
  }

  static async connectPhantomWallet(provider: PhantomProvider): Promise<void> {
    if (!provider.publicKey) {
      try {
        await provider.connect();
      } catch (err) {
        console.error('Failed to connect to Phantom wallet:', err);
        throw new Error('Failed to connect to Phantom wallet');
      }
    }
  }

  static async sendTransferWithMemo(params: TransferWithMemoParams): Promise<string> {
    const provider = await this.getPhantomProvider();
    await this.connectPhantomWallet(provider);

    if (!provider.publicKey) {
      throw new Error('Wallet not connected');
    }

    const { to, amount, memo } = params;
    const fromPubkey = provider.publicKey;
    const toPubkey = new PublicKey(to);

    const balance = await this.connection.getBalance(fromPubkey);
    const requiredAmount = amount * LAMPORTS_PER_SOL;
    if (balance < requiredAmount) {
      throw new Error(`Insufficient balance. You have ${balance / LAMPORTS_PER_SOL} SOL but need ${amount} SOL`);
    }

    try {
      const transaction = new Transaction();
      transaction.feePayer = fromPubkey;

      const transferInstruction = SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: requiredAmount,
      });

      const memoInstruction = new TransactionInstruction({
        keys: [{ pubkey: fromPubkey, isSigner: true, isWritable: true }],
        programId: MEMO_PROGRAM_ID,
        data: Buffer.from(memo, 'utf-8'),
      });

      transaction.add(transferInstruction, memoInstruction);

      const { blockhash } = await this.connection.getLatestBlockhash('confirmed');
      transaction.recentBlockhash = blockhash;

      const signedTransaction = await provider.signTransaction(transaction);

      const signature = await this.connection.sendRawTransaction(signedTransaction.serialize(), {
        skipPreflight: false,
        maxRetries: 5,
        preflightCommitment: 'confirmed',
      });

      console.log('Transaction sent successfully:', signature);
      return signature;
    } catch (error) {
      console.error('Transaction error:', error);
      if (error instanceof Error) {
        if (error.message.includes('insufficient lamports')) {
          throw new Error('Insufficient balance. Please make sure you have enough SOL to cover the transaction.');
        }
        if (error.message.includes('Transaction simulation failed')) {
          throw new Error('Transaction failed. Please try again.');
        }
      }
      throw error;
    }
  }
}

