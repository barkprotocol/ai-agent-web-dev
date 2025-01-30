import type { Metadata } from "next"

interface SharedMetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export function sharedMetadata({
  title,
  description,
  keywords = [],
  ogImage = "https://barkprotocol.com/og-image.jpg",
}: SharedMetadataProps): Metadata {
  const defaultKeywords = ["BARK Protocol", "AI Agent", "Solana", "DeFi", "Blockchain", "Artificial Intelligence"]

  return {
    title: `${title} | BARK AI Agent`,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: "BARK Protocol Team" }],
    openGraph: {
      title: `${title} | BARK AI Agent`,
      description,
      type: "website",
      url: "https://barkprotocol.com",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "BARK AI Agent",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | BARK AI Agent`,
      description,
      images: [ogImage],
      creator: "@barkprotocol",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  }
}

