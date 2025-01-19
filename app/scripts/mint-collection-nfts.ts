import { createCollectionAndMintNFTs, mintAdditionalNFTs, CollectionConfig, NFTMetadata } from '@/app/utils/nft-minter-utils';
import { PublicKey } from '@metaplex-foundation/umi';

async function main() {
  try {
    console.log('Starting NFT minting process...');

    const collectionConfig: CollectionConfig = {
      name: 'BARK NFT Collection',
      symbol: 'BNC',
      uri: 'https://marketplace.barkprotocol.net/nft/collection.json',
      sellerFeeBasisPoints: 500, // 5%
    };

    const initialNFTs: NFTMetadata[] = [
      { name: 'Bark NFT #1', uri: 'https://marketplace.barkprotocol.net/nft/nft1.json' },
      { name: 'Bark NFT #2', uri: 'https://marketplace.barkprotocol.net/nft/nft2.json' },
    ];

    // Create a new collection and mint initial NFTs
    const { treeAddress, collectionAddress } = await createCollectionAndMintNFTs(collectionConfig, initialNFTs);

    console.log('Collection created with tree address:', treeAddress.toString());
    console.log('Collection address:', collectionAddress.toString());

    // Mint additional NFTs to the existing collection
    const additionalNFTs: NFTMetadata[] = [
      { name: 'Bark NFT #3', uri: 'https://marketplace.barkprotocol.net/nft/nft3.json' },
      { name: 'Bark NFT #4', uri: 'https://marketplace.barkprotocol.net/nft/nft4.json' },
    ];

    await mintAdditionalNFTs(
      treeAddress,
      collectionAddress,
      additionalNFTs,
      500 // 5% seller fee
    );

    console.log('NFT minting process completed successfully.');
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

main();

