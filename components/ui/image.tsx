import { useState, useEffect } from "react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageProps extends Omit<NextImageProps, "src" | "alt"> {
  src?: string
  alt: string
  className?: string
}

export function Image({ src, alt, className, width, height, ...props }: ImageProps) {
  const [mounted, setMounted] = useState(false)
  const [imageSrc, setImageSrc] = useState(src || `/placeholder.svg?width=${width}&height=${height}`)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div aria-hidden="true" style={{ width, height }} />
  }

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn("transition-opacity duration-300", className)}
      onError={() => setImageSrc(`/placeholder.svg?width=${width}&height=${height}`)}
      {...props}
    />
  )
}

