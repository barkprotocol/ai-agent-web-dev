import { SolanaAgentKit } from "solana-agent-kit";
import { Connection, Keypair } from "@solana/web3.js";
import * as dotenv from "dotenv";

dotenv.config();

export interface TokenMetadata {
  name: string;
  symbol: string;
  uri: string;
  decimals: number;
  initialSupply: number;
}

function initializeSolanaAgentKit(): SolanaAgentKit {
  const rpcUrl = process.env.SOLANA_RPC_URL || "https://api.devnet.solana.com";
  const connection = new Connection(rpcUrl, "confirmed");

  const privateKeyString = process.env.WALLET_PRIVATE_KEY;
  if (!privateKeyString) {
    throw new Error("WALLET_PRIVATE_KEY is not set in the environment variables");
  }

  const privateKey = new Uint8Array(JSON.parse(privateKeyString));
  const keypair = Keypair.fromSecretKey(privateKey);

  return new SolanaAgentKit({
    connection,
    wallet: keypair,
    // Add any additional configuration options here
  });
}

export async function deployGamingToken(agent: SolanaAgentKit): Promise<string> {
  const tokenMetadata: TokenMetadata = {
    name: "Gaming Credits",
    symbol: "GCRED",
    uri: "https://example.com/token-metadata.json",
    decimals: 6,
    initialSupply: 1_000_000
  };

  try {
    console.log(`Deploying token: ${tokenMetadata.name} (${tokenMetadata.symbol})`);
    
    const result = await agent.deployToken(
      tokenMetadata.name,
      tokenMetadata.uri,
      tokenMetadata.symbol,
      tokenMetadata.decimals,
      tokenMetadata.initialSupply
    );

    console.log(`Token deployed successfully. Mint address: ${result.mint.toString()}`);
    return result.mint.toString();
  } catch (error) {
    console.error("Error deploying token:", error);
    throw error;
  }
}

export async function deployCustomToken(agent: SolanaAgentKit, tokenMetadata: TokenMetadata): Promise<string> {
  try {
    console.log(`Deploying custom token: ${tokenMetadata.name} (${tokenMetadata.symbol})`);
    
    const result = await agent.deployToken(
      tokenMetadata.name,
      tokenMetadata.uri,
      tokenMetadata.symbol,
      tokenMetadata.decimals,
      tokenMetadata.initialSupply
    );

    console.log(`Custom token deployed successfully. Mint address: ${result.mint.toString()}`);
    return result.mint.toString();
  } catch (error) {
    console.error("Error deploying custom token:", error);
    throw error;
  }
}

async function main() {
  try {
    const agent = initializeSolanaAgentKit();

    // Deploy the gaming token
    const gamingTokenMint = await deployGamingToken(agent);
    console.log("Gaming token deployed with mint address:", gamingTokenMint);

    // Deploy a custom token
    const customTokenMetadata: TokenMetadata = {
      name: "Custom Token",
      symbol: "CTKN",
      uri: "https://example.com/custom-token-metadata.json",
      decimals: 9,
      initialSupply: 10_000_000
    };
    const customTokenMint = await deployCustomToken(agent, customTokenMetadata);
    console.log("Custom token deployed with mint address:", customTokenMint);

  } catch (error) {
    console.error("Error in main function:", error);
  }
}

// Uncomment the following line to run the main function
// main();

