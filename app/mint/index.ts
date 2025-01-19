import { createCollectionAndMintNFTs, mintAdditionalNFTs, verifyCollection, updateNFTMetadata } from './nft-minter';

async function main() {
  try {
    console.log('Starting NFT minting process...');

    // Create a new collection and mint initial NFTs
    const { treeAddress, collectionAddress } = await createCollectionAndMintNFTs(
      {
        name: 'Bark Awesome Collection',
        symbol: 'BAC',
        uri: 'https://arweave.net/collection-metadata.json',
        sellerFeeBasisPoints: 500, // 5%
      },
      [
        { name: 'Bark NFT #1', uri: 'https://arweave.net/nft1.json' },
        { name: 'Bark NFT #2', uri: 'https://arweave.net/nft2.json' },
      ]
    );

    console.log('Collection created with tree address:', treeAddress.toString());
    console.log('Collection address:', collectionAddress.toString());

    // Verify the collection
    await verifyCollection(treeAddress, collectionAddress);

    // Mint additional NFTs to the existing collection
    await mintAdditionalNFTs(
      treeAddress,
      collectionAddress,
      [
        { name: 'Bark NFT #3', uri: 'https://arweave.net/nft3.json' },
        { name: 'Bark NFT #4', uri: 'https://arweave.net/nft4.json' },
      ],
      500 // 5% seller fee
    );

    // Update metadata for an existing NFT
    await updateNFTMetadata(
      treeAddress,
      { name: 'Updated Bark NFT #3', uri: 'https://arweave.net/updated-nft3.json' }
    );

    console.log('NFT minting process completed successfully.');
  } catch (error) {
    console.error('Error in main function:', error);
  }
}

main();

