import { SolanaAgentKit } from "solana-agent-kit";
import { PublicKey } from "@solana/web3.js";
import { deployGamingToken, deployCustomToken, TokenMetadata } from "../utils/deploy-spl-token";
import { initializeSolanaAgentKit } from "../utils/solana-agent"

async function mintGamingTokens(agent: SolanaAgentKit, amount: number): Promise<string> {
  try {
    console.log(`Minting ${amount} Gaming Credits (GCRED)`);
    
    // First, deploy the gaming token if it doesn't exist
    const mintAddress = await deployGamingToken(agent);
    const mintPublicKey = new PublicKey(mintAddress);

    // Mint additional tokens
    const result = await agent.mintToken(mintPublicKey, amount);

    console.log(`Successfully minted ${amount} GCRED tokens`);
    return result.signature;
  } catch (error) {
    console.error("Error minting gaming tokens:", error);
    throw error;
  }
}

async function mintCustomTokens(
  agent: SolanaAgentKit, 
  tokenMetadata: TokenMetadata, 
  amount: number
): Promise<string> {
  try {
    console.log(`Minting ${amount} ${tokenMetadata.symbol} tokens`);
    
    // First, deploy the custom token if it doesn't exist
    const mintAddress = await deployCustomToken(agent, tokenMetadata);
    const mintPublicKey = new PublicKey(mintAddress);

    // Mint additional tokens
    const result = await agent.mintToken(mintPublicKey, amount);

    console.log(`Successfully minted ${amount} ${tokenMetadata.symbol} tokens`);
    return result.signature;
  } catch (error) {
    console.error("Error minting custom tokens:", error);
    throw error;
  }
}

async function main() {
  try {
    const agent = initializeSolanaAgentKit();

    // Mint gaming tokens
    const gamingTokenSignature = await mintGamingTokens(agent, 1000);
    console.log("Gaming tokens minted with signature:", gamingTokenSignature);

    // Mint custom tokens
    const customTokenMetadata: TokenMetadata = {
      name: "Custom Token",
      symbol: "CTKN",
      uri: "https://example.com/custom-token-metadata.json",
      decimals: 9,
      initialSupply: 10_000_000
    };
    const customTokenSignature = await mintCustomTokens(agent, customTokenMetadata, 5000);
    console.log("Custom tokens minted with signature:", customTokenSignature);

  } catch (error) {
    console.error("Error in main function:", error);
  }
}

// Uncomment the following line to run the main function
// main();

export { mintGamingTokens, mintCustomTokens };

