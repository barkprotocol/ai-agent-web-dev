export const Placeholder = {
  generate: ({ width, height, text }: { width: number; height: number; text: string }) => {
    return `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`
  },
  nft: () => {
    return Placeholder.generate({ width: 300, height: 300, text: "NFT" })
  },
}

