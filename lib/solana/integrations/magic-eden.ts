import axios from 'axios';

const MAGIC_EDEN_API_URL = 'https://api-mainnet.magiceden.dev/v2';

interface MagicEdenCollection {
  symbol: string;
  name: string;
  description: string;
  image: string;
  totalItems: number;
  floorPrice: number;
}

interface MagicEdenListing {
  pdaAddress: string;
  auctionHouse: string;
  tokenAddress: string;
  tokenMint: string;
  seller: string;
  tokenSize: number;
  price: number;
}

export async function getMagicEdenCollection(symbol: string): Promise<MagicEdenCollection> {
  try {
    const response = await axios.get(`${MAGIC_EDEN_API_URL}/collections/${symbol}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Magic Eden collection:', error);
    throw error;
  }
}

export async function getMagicEdenListings(symbol: string, limit: number = 20): Promise<MagicEdenListing[]> {
  try {
    const response = await axios.get(`${MAGIC_EDEN_API_URL}/collections/${symbol}/listings`, {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Magic Eden listings:', error);
    throw error;
  }
}

export async function getMagicEdenNFTMetadata(mintAddress: string): Promise<any> {
  try {
    const response = await axios.get(`${MAGIC_EDEN_API_URL}/tokens/${mintAddress}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Magic Eden NFT metadata:', error);
    throw error;
  }
}

export async function getMagicEdenCollectionStats(symbol: string): Promise<any> {
  try {
    const response = await axios.get(`${MAGIC_EDEN_API_URL}/collections/${symbol}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Magic Eden collection stats:', error);
    throw error;
  }
}

