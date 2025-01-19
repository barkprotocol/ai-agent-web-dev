import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { SolanaAgentKit, createSolanaTools } from "solana-agent-kit";
import * as crypto from 'crypto';

// Function to securely decrypt private key using AES-256-GCM
async function decryptPrivateKey(encryptedPrivateKey: string): Promise<Uint8Array> {
  const algorithm = 'aes-256-gcm';
  const secretKey = process.env.ENCRYPTION_KEY;
  const iv = process.env.ENCRYPTION_IV;

  if (!secretKey || !iv) {
    throw new Error("Encryption key or IV is not set in environment variables");
  }

  try {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedPrivateKey, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return new Uint8Array(JSON.parse(decrypted));
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('Failed to decrypt private key');
  }
}

interface SolanaAgentKitConfig {
  connection: Connection;
  wallet: Keypair;
  openAiApiKey: string;
  coinGeckoApiKey?: string;
  coinMarketCapApiKey?: string;
}

// Initialize the Solana Agent
export async function initializeSolanaAgentKit(): Promise<SolanaAgentKit> {
  const encryptedPrivateKey = process.env.ENCRYPTED_PRIVATE_KEY;
  const rpcUrl = process.env.SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com";
  const openAiApiKey = process.env.OPENAI_API_KEY;
  const coinGeckoApiKey = process.env.COINGECKO_API_KEY;
  const coinMarketCapApiKey = process.env.COINMARKETCAP_API_KEY;

  if (!encryptedPrivateKey) {
    throw new Error("Encrypted private key is not set in environment variables");
  }

  if (!openAiApiKey) {
    throw new Error("OpenAI API key is not set in environment variables");
  }

  try {
    const privateKey = await decryptPrivateKey(encryptedPrivateKey);
    const keypair = Keypair.fromSecretKey(privateKey);
    const connection = new Connection(rpcUrl, "confirmed");

    return new SolanaAgentKit({
      connection,
      wallet: keypair,
      openAiApiKey,
      coinGeckoApiKey,
      coinMarketCapApiKey,
    });
  } catch (error) {
    console.error('Failed to initialize SolanaAgentKit:', error);
    throw new Error('Failed to initialize SolanaAgentKit');
  }
}

export async function createSolanaAgentTools() {
  return createSolanaTools(await initializeSolanaAgentKit());
}

export async function getWalletBalance(publicKey: string): Promise<number> {
  const agent = await initializeSolanaAgentKit();
  const balance = await agent.getBalance(new PublicKey(publicKey));
  return balance / 1e9; // Convert lamports to SOL
}

// Send transaction with validation and monitoring
export async function sendTransaction(toPublicKey: string, amount: number): Promise<string> {
  // Validate the amount
  if (amount <= 0) {
    throw new Error('Amount must be greater than 0.');
  }

  const agent = await initializeSolanaAgentKit();
  const pubKey = new PublicKey(toPublicKey);
  const lamports = amount * 1e9; // Convert SOL to lamports

  // Check wallet balance
  const walletBalance = await agent.getBalance(agent.wallet.publicKey);
  if (walletBalance < lamports) {
    throw new Error('Insufficient balance.');
  }

  // Send transaction
  const signature = await agent.sendTransaction(pubKey, lamports);

  // Monitor transaction
  const connection = agent.connection;
  const status = await connection.confirmTransaction(signature, 'confirmed');
  if (status.value.err) {
    throw new Error('Transaction failed.');
  }

  console.log('Transaction confirmed:', signature);
  return signature;
}

export async function getPythPrice(priceFeedId: string): Promise<number | null> {
  const agent = await initializeSolanaAgentKit();
  try {
    const price = await agent.getPythPrice(new PublicKey(priceFeedId));
    return price;
  } catch (error) {
    console.error('Error fetching Pyth price:', error);
    return null;
  }
}

export async function getCoinGeckoPrice(coinId: string): Promise<number | null> {
  const agent = await initializeSolanaAgentKit();
  try {
    const priceData = await agent.getCoinGeckoPrice(coinId);
    return priceData[coinId]?.usd || null;
  } catch (error) {
    console.error('Error fetching CoinGecko price:', error);
    return null;
  }
}

export async function getCoinMarketCapPrice(symbol: string): Promise<number | null> {
  const agent = await initializeSolanaAgentKit();
  try {
    const priceData = await agent.getCoinMarketCapPrice(symbol);
    return priceData.data[symbol]?.quote.USD.price || null;
  } catch (error) {
    console.error('Error fetching CoinMarketCap price:', error);
    return null;
  }
}

