import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { chunkArray } from '@/lib/utils';
import rawKnownAddresses from '@/lib/utils/known-addresses.json';
import { FungibleToken } from '@/types/helius/fungibleToken';
import { NonFungibleToken } from '@/types/helius/nonFungibleToken';
import { RPC_URL } from '../utils/constants';

// Types
export interface Holder {
  owner: string;
  balance: number;
  classification?: string;
}

interface MintInfo {
  mint: string;
  decimals: number;
  supply: bigint;
  isInitialized: boolean;
  freezeAuthority: string;
  mintAuthority: string;
}

type HeliusMethod =
  | 'searchAssets'
  | 'getBalance'
  | 'getTokenAccounts'
  | 'getAccountInfo'
  | 'getMultipleAccounts';

const KNOWN_ADDRESSES: Record<string, string> = rawKnownAddresses;

// Helius API helper function
async function fetchHelius<T>(method: HeliusMethod, params: any): Promise<T> {
  try {
    const response = await fetch(RPC_URL, {
      next: { revalidate: 5 },
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'request-id',
        method,
        params,
      }),
    });

    if (!response.ok) {
      throw new Error(`Helius API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (data.error) {
      throw new Error(`Helius API error: ${data.error.message || JSON.stringify(data.error)}`);
    }

    return data.result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Helius API request failed: ${error.message}`);
    }
    throw new Error('Helius API request failed with unknown error');
  }
}

// Get balance function
export async function getBalance(walletAddress: string): Promise<number> {
  const data = await fetchHelius<{ balance: string }>('getBalance', [walletAddress]);
  return Number(data.balance) / LAMPORTS_PER_SOL;
}

// Search wallet assets function
export async function searchWalletAssets(ownerAddress: string): Promise<{
  fungibleTokens: FungibleToken[];
  nonFungibleTokens: NonFungibleToken[];
}> {
  try {
    const data = await fetchHelius<{
      items: (FungibleToken | NonFungibleToken)[];
      nativeBalance: { lamports: number; price_per_sol: number; total_price: number };
    }>('searchAssets', {
      ownerAddress,
      tokenType: 'all',
      displayOptions: {
        showNativeBalance: true,
        showInscription: false,
        showCollectionMetadata: false,
      },
    });

    if (!data.items) {
      throw new Error('Invalid response format from Helius API');
    }

    let fungibleTokens: FungibleToken[] = data.items.filter(
      (item): item is FungibleToken =>
        item.interface === 'FungibleToken' || item.interface === 'FungibleAsset'
    );

    // Hardcoding images for specific tokens
    fungibleTokens = fungibleTokens.map(item => {
      const tokenImages: Record<string, string> = {
        'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
        'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1': 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1/logo.png',
      };

      if (item.id in tokenImages) {
        return {
          ...item,
          content: {
            ...item.content,
            files: [{ uri: tokenImages[item.id], cdn_uri: '', mime: 'image/png' }],
            links: { image: tokenImages[item.id] },
          },
        };
      }
      return item;
    });

    const nonFungibleTokens: NonFungibleToken[] = data.items.filter(
      (item): item is NonFungibleToken =>
        !['FungibleToken', 'FungibleAsset'].includes(item.interface)
    );

    // Create SOL token object
    const solToken: FungibleToken = {
      interface: 'FungibleAsset',
      id: 'So11111111111111111111111111111111111111112',
      content: {
        $schema: 'https://schema.metaplex.com/nft1.0.json',
        json_uri: '',
        files: [{
          uri: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
          cdn_uri: '',
          mime: 'image/png',
        }],
        metadata: {
          description: 'Solana Token',
          name: 'Wrapped SOL',
          symbol: 'SOL',
          token_standard: 'Native Token',
        },
        links: {
          image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
        },
      },
      authorities: [],
      compression: {
        eligible: false,
        compressed: false,
        data_hash: '',
        creator_hash: '',
        asset_hash: '',
        tree: '',
        seq: 0,
        leaf_id: 0,
      },
      grouping: [],
      royalty: {
        royalty_model: '',
        target: null,
        percent: 0,
        basis_points: 0,
        primary_sale_happened: false,
        locked: false,
      },
      creators: [],
      ownership: {
        frozen: false,
        delegated: false,
        delegate: null,
        ownership_model: 'token',
        owner: nonFungibleTokens[0]?.ownership.owner,
      },
      supply: null,
      mutable: true,
      burnt: false,
      token_info: {
        symbol: 'SOL',
        balance: data.nativeBalance.lamports,
        supply: 0,
        decimals: 9,
        token_program: '',
        associated_token_address: '',
        price_info: {
          price_per_token: data.nativeBalance.price_per_sol,
          total_price: data.nativeBalance.total_price,
          currency: '',
        },
      },
    };

    fungibleTokens.push(solToken);

    return { fungibleTokens, nonFungibleTokens };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to search wallet assets: ${error.message}`);
    }
    throw new Error('Failed to search wallet assets with unknown error');
  }
}

// Get mint account info function
export async function getMintAccountInfo(mint: string): Promise<MintInfo> {
  const data = await fetchHelius<{ value: any }>('getAccountInfo', [mint, { encoding: 'jsonParsed' }]);

  if (!data.value) {
    throw new Error(`No account info found for mint: ${mint}`);
  }

  const value = data.value;
  if (!value.data || !value.data.parsed || value.data.parsed.type !== 'mint') {
    throw new Error(`Account is not a valid SPL mint: ${mint}`);
  }

  const info = value.data.parsed.info;
  return {
    mint,
    decimals: info.decimals,
    supply: BigInt(info.supply),
    isInitialized: info.isInitialized,
    freezeAuthority: info.freezeAuthority,
    mintAuthority: info.mintAuthority,
  };
}

// Get token holders function
export async function getTokenHolders(mintInfo: MintInfo): Promise<Map<string, Holder>> {
  const holderMap = new Map<string, Holder>();
  let page = 1;

  while (true) {
    const data = await fetchHelius<{ token_accounts: any[] }>('getTokenAccounts', {
      page,
      limit: 1000,
      displayOptions: {},
      mint: mintInfo.mint,
    });

    if (!data.token_accounts || data.token_accounts.length === 0) {
      break;
    }

    data.token_accounts.forEach((account: any) => {
      const owner = account.owner;
      const balanceRaw = BigInt(account.amount || '0');
      const balance = Number(balanceRaw) / 10 ** mintInfo.decimals;

      if (holderMap.has(owner)) {
        const h = holderMap.get(owner)!;
        h.balance += balance;
      } else {
        holderMap.set(owner, { owner, balance });
      }
    });

    page++;
  }

  return holderMap;
}

// Classify addresses function
async function classifyAddresses(
  holderMap: Map<string, Holder>,
  addresses: string[],
  chunkSize = 20
): Promise<void> {
  const addressChunks = chunkArray(addresses, chunkSize);

  for (const chunk of addressChunks) {
    const accountInfos = await fetchHelius<any[]>('getMultipleAccounts', [chunk, { encoding: 'jsonParsed' }]);

    if (!accountInfos || !Array.isArray(accountInfos)) {
      continue;
    }

    for (let i = 0; i < chunk.length; i++) {
      const addr = chunk[i];
      const accInfo = accountInfos[i];
      const holder = holderMap.get(addr);
      if (!holder) continue;

      if (addr in KNOWN_ADDRESSES) {
        holder.classification = KNOWN_ADDRESSES[addr];
      } else if (accInfo && accInfo.owner) {
        const programId = accInfo.owner;
        holder.classification = KNOWN_ADDRESSES[programId] ?? `Unrecognized Program`;
      } else {
        holder.classification = "Unknown or Doesn't Exist";
      }
    }
  }
}

// Get holders classification function
export async function getHoldersClassification(mint: string, limit: number = 10): Promise<{
  topHolders: Holder[];
  totalHolders: number;
  totalSupply: number;
}> {
  const mintAccountInfo = await getMintAccountInfo(mint);
  const totalSupply = Number(mintAccountInfo.supply) / 10 ** mintAccountInfo.decimals;

  const holderMap = await getTokenHolders(mintAccountInfo);

  const sortedHolders = Array.from(holderMap.values()).sort((a, b) => b.balance - a.balance);

  const topHolders = sortedHolders.slice(0, limit);
  await classifyAddresses(holderMap, topHolders.map(h => h.owner), limit);

  return {
    topHolders,
    totalHolders: holderMap.size,
    totalSupply,
  };
}

