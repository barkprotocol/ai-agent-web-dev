import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  createSignerFromKeypair,
  generateSigner,
  signerIdentity,
  PublicKey as UmiPublicKey,
  KeypairSigner,
  percentAmount,
  some,
  Amount,
} from '@metaplex-foundation/umi';
import {
  createTree,
  mintToCollectionV1,
  mplBubblegum,
} from '@metaplex-foundation/mpl-bubblegum';
import {
  createNft,
  mplTokenMetadata,
  verifyCollectionV1,
} from '@metaplex-foundation/mpl-token-metadata';
import * as dotenv from 'dotenv';

dotenv.config();

interface NFTMetadata {
  name: string;
  uri: string;
}

interface CollectionConfig {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: Amount<"%", number>;
}

async function createCollectionAndMintNFTs(
  collectionConfig: CollectionConfig,
  nfts: NFTMetadata[]
): Promise<{ treeAddress: UmiPublicKey; collectionAddress: UmiPublicKey }> {
  const umi = createUmi(process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com')
    .use(mplBubblegum())
    .use(mplTokenMetadata());

  const privateKey = process.env.WALLET_PRIVATE_KEY;
  if (!privateKey) {
    throw new Error('WALLET_PRIVATE_KEY is not set in the environment variables');
  }
  const secretKey = new Uint8Array(JSON.parse(privateKey));
  const keypair = umi.eddsa.createKeypairFromSecretKey(secretKey);
  const signer = createSignerFromKeypair(umi, keypair) as KeypairSigner;
  umi.use(signerIdentity(signer));

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
          creators: some([]),
        },
      });
      const mintSignature = await mintBuilder.sendAndConfirm(umi);

      console.log(`Minted NFT "${nft.name}" with signature:`, mintSignature);
    }

    // Verify the collection
    console.log('Verifying collection...');
    const verifyBuilder = verifyCollectionV1(umi, {
      collectionMint: collectionMint.publicKey,
      metadata: treeKeypair.publicKey,
      authority: umi.identity,
    });
    const verifySignature = await verifyBuilder.sendAndConfirm(umi);

    console.log('Collection verified with signature:', verifySignature);

    return {
      treeAddress: treeKeypair.publicKey,
      collectionAddress: collectionMint.publicKey,
    };
  } catch (error) {
    console.error('Error in createCollectionAndMintNFTs:', error);
    throw error;
  }
}

async function mintAdditionalNFTs(
  treeAddress: UmiPublicKey,
  collectionAddress: UmiPublicKey,
  nfts: NFTMetadata[]
): Promise<void> {
  const umi = createUmi(process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com')
    .use(mplBubblegum())
    .use(mplTokenMetadata());

  const privateKey = process.env.WALLET_PRIVATE_KEY;
  if (!privateKey) {
    throw new Error('WALLET_PRIVATE_KEY is not set in the environment variables');
  }
  const secretKey = new Uint8Array(JSON.parse(privateKey));
  const keypair = umi.eddsa.createKeypairFromSecretKey(secretKey);
  const signer = createSignerFromKeypair(umi, keypair) as KeypairSigner;
  umi.use(signerIdentity(signer));

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
          sellerFeeBasisPoints: percentAmount(5), // 5% fee
          collection: { key: collectionAddress, verified: false },
          creators: some([]),
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

async function main() {
  const collectionConfig: CollectionConfig = {
    name: 'Bark Awesome Collection',
    symbol: 'BAC',
    uri: 'https://marketplace.barkprotocol.net/nft/collection.json',
    sellerFeeBasisPoints: percentAmount(5), // 5%
  };

  const initialNFTs: NFTMetadata[] = [
    { name: 'Bark NFT #1', uri: 'https://marketplace.barkprotocol.net/nft/nft1.json' },
    { name: 'Bark NFT #2', uri: 'https://marketplace.barkprotocol.net/nft/nft2.json' },
  ];

  try {
    console.log('Creating collection and minting initial NFTs...');
    const { treeAddress, collectionAddress } = await createCollectionAndMintNFTs(collectionConfig, initialNFTs);
    console.log('Collection created successfully:');
    console.log('Tree address:', treeAddress.toString());
    console.log('Collection address:', collectionAddress.toString());

    const additionalNFTs: NFTMetadata[] = [
      { name: 'Bark NFT #3', uri: 'https://marketplace.barkprotocol.net/nft/nft3.json' },
      { name: 'Bark NFT #4', uri: 'https://marketplace.barkprotocol.net/nft/nft4.json' },
    ];

    console.log('Minting additional NFTs...');
    await mintAdditionalNFTs(treeAddress, collectionAddress, additionalNFTs);
    console.log('Additional NFTs minted successfully');

  } catch (error) {
    console.error('Failed to create collection and mint NFTs:', error);
  }
}

main();

