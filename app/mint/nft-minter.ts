import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  createSignerFromKeypair,
  generateSigner,
  signerIdentity,
  PublicKey as UmiPublicKey,
  KeypairSigner,
  Signer,
  percentAmount,
  lamports,
  some,
  none,
  Option,
} from '@metaplex-foundation/umi';
import {
  createTree,
  mintToCollectionV1,
  mplBubblegum,
} from '@metaplex-foundation/mpl-bubblegum';
import {
  TokenStandard,
  createNft,
  mplTokenMetadata,
  updateV1,
  verifyCollectionV1,
} from '@metaplex-foundation/mpl-token-metadata';
import { PublicKey } from '@solana/web3.js';
import * as dotenv from 'dotenv';

dotenv.config();

// Initialize UMI
const umi = createUmi(process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com')
  .use(mplBubblegum())
  .use(mplTokenMetadata());

// Set up the signer using the private key from the environment variable
const privateKey = process.env.WALLET_PRIVATE_KEY;
if (!privateKey) {
  throw new Error('WALLET_PRIVATE_KEY is not set in the environment variables');
}
const secretKey = new Uint8Array(JSON.parse(privateKey));
const keypair = umi.eddsa.createKeypairFromSecretKey(secretKey);
const signer = createSignerFromKeypair(umi, keypair) as KeypairSigner;
umi.use(signerIdentity(signer));

interface NFTMetadata {
  name: string;
  uri: string;
}

interface CollectionConfig {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
}

export async function createCollectionAndMintNFTs(
  collectionConfig: CollectionConfig,
  nfts: NFTMetadata[]
): Promise<{ treeAddress: UmiPublicKey; collectionAddress: UmiPublicKey }> {
  try {
    // Generate a new keypair for the tree
    const treeKeypair = generateSigner(umi);

    console.log('Creating merkle tree...');
    const createTreeBuilder = await createTree(umi, {
      merkleTree: treeKeypair,
      maxDepth: 14,
      maxBufferSize: 64,
    });
    const createTreeSignature = await createTreeBuilder.sendAndConfirm(umi);

    console.log('Merkle tree created with signature:', createTreeSignature);

    // Create collection NFT
    const collectionMint = generateSigner(umi);
    console.log('Creating collection NFT...');
    const createNftBuilder = createNft(umi, {
      mint: collectionMint,
      name: collectionConfig.name,
      symbol: collectionConfig.symbol,
      uri: collectionConfig.uri,
      sellerFeeBasisPoints: percentAmount(collectionConfig.sellerFeeBasisPoints),
      isCollection: true,
    });
    const createCollectionSignature = await createNftBuilder.sendAndConfirm(umi);

    console.log('Collection NFT created with signature:', createCollectionSignature);

    // Mint NFTs to the collection
    for (const nft of nfts) {
      console.log(`Minting NFT "${nft.name}"...`);
      const mintBuilder = mintToCollectionV1(umi, {
        leafOwner: umi.identity.publicKey,
        merkleTree: treeKeypair.publicKey,
        collectionMint: collectionMint.publicKey,
        metadata: {
          name: nft.name,
          uri: nft.uri,
          sellerFeeBasisPoints: percentAmount(collectionConfig.sellerFeeBasisPoints),
          collection: { key: collectionMint.publicKey, verified: false },
          creators: []
        },
      });
      const mintSignature = await mintBuilder.sendAndConfirm(umi);

      console.log(`Minted NFT "${nft.name}" with signature:`, mintSignature);
    }

    return {
      treeAddress: treeKeypair.publicKey,
      collectionAddress: collectionMint.publicKey,
    };
  } catch (error) {
    console.error('Error in createCollectionAndMintNFTs:', error);
    throw error;
  }
}

export async function mintAdditionalNFTs(
  treeAddress: UmiPublicKey,
  collectionAddress: UmiPublicKey,
  nfts: NFTMetadata[],
  sellerFeeBasisPoints: number
): Promise<void> {
  try {
    for (const nft of nfts) {
      console.log(`Minting additional NFT "${nft.name}"...`);
      const mintBuilder = mintToCollectionV1(umi, {
        leafOwner: umi.identity.publicKey,
        merkleTree: treeAddress,
        collectionMint: collectionAddress,
        metadata: {
          name: nft.name,
          uri: nft.uri,
          sellerFeeBasisPoints: percentAmount(sellerFeeBasisPoints),
          collection: { key: collectionAddress, verified: false },
          creators: []
        },
      });
      const mintSignature = await mintBuilder.sendAndConfirm(umi);

      console.log(`Minted additional NFT "${nft.name}" with signature:`, mintSignature);
    }
  } catch (error) {
    console.error('Error in mintAdditionalNFTs:', error);
    throw error;
  }
}

export async function verifyCollection(
  treeAddress: UmiPublicKey,
  collectionAddress: UmiPublicKey
): Promise<void> {
  try {
    console.log('Verifying collection...');
    const verifyBuilder = verifyCollectionV1(umi, {
      metadata: treeAddress,
      collectionMint: collectionAddress,
      authority: umi.identity,
    });
    const verifySignature = await verifyBuilder.sendAndConfirm(umi);

    console.log('Collection verified with signature:', verifySignature);
  } catch (error) {
    console.error('Error in verifyCollection:', error);
    throw error;
  }
}

export async function updateNFTMetadata(
  mintAddress: UmiPublicKey,
  newMetadata: NFTMetadata
): Promise<void> {
  try {
    console.log(`Updating NFT metadata for mint ${mintAddress.toString()}...`);
    const updateBuilder = updateV1(umi, {
      mint: mintAddress,
      authority: umi.identity,
      data: {
        name: some(newMetadata.name),
        symbol: none(),
        uri: some(newMetadata.uri),
        sellerFeeBasisPoints: none(),
        creators: none(),
        collection: none(),
        uses: none(),
      },
    });
    const updateSignature = await updateBuilder.sendAndConfirm(umi);

    console.log(`NFT metadata updated with signature:`, updateSignature);
  } catch (error) {
    console.error('Error in updateNFTMetadata:', error);
    throw error;
  }
}

