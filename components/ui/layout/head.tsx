import type { Metadata } from "next"

interface HeadProps {
  metadata: Metadata
}

export function Head({ metadata }: HeadProps) {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* Add other meta tags here */}
      {metadata.keywords && (
        <>
          {metadata.keywords.map((keyword, index) => (
            <meta name="keyword" content={keyword} key={index} />
          ))}
        </>
      )}
      {metadata.icons?.icon && <link rel="icon" href={metadata.icons.icon} key="icon" />}
      {metadata.icons?.shortcut && <link rel="shortcut icon" href={metadata.icons.shortcut} key="shortcut" />}
      {metadata.icons?.apple && <link rel="apple-touch-icon" href={metadata.icons.apple} key="apple" />}
      {metadata.manifest && <link rel="manifest" href={metadata.manifest} key="manifest" />}
    </head>
  )
}

