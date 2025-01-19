import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  createSignerFromKeypair,
  generateSigner,
  signerIdentity,
  PublicKey as UmiPublicKey,
  KeypairSigner,
  percentAmount,
  some,
  none,
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
import * as dotenv from 'dotenv';

dotenv.config();

async function updateNFTMetadata(
  umi: ReturnType<typeof createUmi>,
  metadataPda: UmiPublicKey,
  newMetadata: { name: string; uri: string },
) {
  const updateBuilder = updateV1(umi, {
    metadata: metadataPda,
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

  await updateBuilder.send();
}


async function main() {
  const umi = createUmi({
    commitment: 'confirmed',
    rpcUrl: process.env.RPC_URL || '',
    payer: generateSigner(process.env.PRIVATE_KEY || ''),
  });

  const treeKeypair = KeypairSigner.fromSecretKey(
    Uint8Array.from(JSON.parse(process.env.TREE_PRIVATE_KEY || '')),
  );

  const collectionMint = new UmiPublicKey(process.env.COLLECTION_MINT || '');
  const collectionConfig = {
    name: process.env.COLLECTION_NAME || '',
    symbol: process.env.COLLECTION_SYMBOL || '',
    uri: process.env.COLLECTION_URI || '',
    sellerFeeBasisPoints: parseInt(process.env.COLLECTION_SELLER_FEE || '0'),
  };

  const createTreeBuilder = createTree(umi, {
    merkleTree: treeKeypair,
    maxDepth: 14,
    maxBufferSize: 64,
  });

  const tree = await createTreeBuilder.send();

  const createNftBuilder = createNft(umi, {
    mint: collectionMint,
    name: collectionConfig.name,
    symbol: collectionConfig.symbol,
    uri: collectionConfig.uri,
    sellerFeeBasisPoints: percentAmount(collectionConfig.sellerFeeBasisPoints),
    isCollection: some(true),
  });

  const collection = await createNftBuilder.send();

  console.log('Collection created:', collection);
}

main().catch(console.error);

