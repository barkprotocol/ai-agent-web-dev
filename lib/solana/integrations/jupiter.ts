import { Connection, PublicKey } from '@solana/web3.js';
import { TokenInfo } from '@solana/spl-token-registry';
import { Jupiter, RouteInfo, TOKEN_LIST_URL } from '@jup-ag/core';

let jupiter: Jupiter | null = null;

/**
 * Initialize Jupiter
 * @param connection Solana RPC connection
 * @param cluster Solana cluster ('mainnet-beta' | 'devnet')
 */
export async function initializeJupiter(connection: Connection, cluster: 'mainnet-beta' | 'devnet'): Promise<void> {
  if (jupiter) return;

  jupiter = await Jupiter.load({
    connection,
    cluster,
    userPublicKey: null, // We'll set this later when we have the user's public key
  });
}

/**
 * Fetch token list
 * @returns Array of TokenInfo
 */
export async function getTokenList(): Promise<TokenInfo[]> {
  const response = await fetch(TOKEN_LIST_URL);
  const tokenList = await response.json();
  return tokenList.tokens;
}

/**
 * Get routes for a swap
 * @param inputMint Input token mint address
 * @param outputMint Output token mint address
 * @param amount Amount of input tokens (in lamports)
 * @param slippage Allowed slippage (e.g., 1 for 1%)
 * @returns Array of RouteInfo
 */
export async function getRoutes(
  inputMint: string,
  outputMint: string,
  amount: number,
  slippage: number
): Promise<RouteInfo[]> {
  if (!jupiter) throw new Error('Jupiter not initialized');

  const routes = await jupiter.computeRoutes({
    inputMint: new PublicKey(inputMint),
    outputMint: new PublicKey(outputMint),
    amount,
    slippageBps: slippage * 100,
    forceFetch: true,
  });

  return routes.routesInfos;
}

/**
 * Execute a swap
 * @param route Selected route from getRoutes
 * @param userPublicKey User's wallet public key
 * @returns Transaction signature
 */
export async function executeSwap(route: RouteInfo, userPublicKey: PublicKey): Promise<string> {
  if (!jupiter) throw new Error('Jupiter not initialized');

  const { transactions } = await jupiter.exchange({
    routeInfo: route,
    userPublicKey,
  });

  const { txid } = await jupiter.sendAndConfirmTransaction(transactions.swapTransaction);

  return txid;
}

/**
 * Get the price impact for a swap
 * @param route Selected route from getRoutes
 * @returns Price impact as a percentage
 */
export function getPriceImpact(route: RouteInfo): number {
  return route.priceImpactPct * 100;
}

/**
 * Get the minimum received amount for a swap
 * @param route Selected route from getRoutes
 * @returns Minimum received amount
 */
export function getMinimumReceived(route: RouteInfo): number {
  return route.otherAmountThreshold;
}

/**
 * Update user's public key for Jupiter instance
 * @param userPublicKey User's wallet public key
 */
export function updateUserPublicKey(userPublicKey: PublicKey): void {
  if (!jupiter) throw new Error('Jupiter not initialized');
  jupiter.setUserPublicKey(userPublicKey);
}

