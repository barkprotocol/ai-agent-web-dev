import cn from "classnames"
import type React from "react"
import { useState, useEffect } from "react"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string
  alt: string
  className?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  const [mounted, setMounted] = useState(false)
  const [width = 100, height = 100] = [props.width, props.height]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div aria-hidden="true" style={{ width, height }} />
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = "/placeholder.svg"
      }}
      {...props}
    />
  )
}

export default Image

