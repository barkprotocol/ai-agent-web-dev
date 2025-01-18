'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from "next/image";
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface DynamicImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}

export function DynamicImage({
  lightSrc,
  darkSrc,
  alt,
  className,
  width,
  height,
  ...props
}: DynamicImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent flash of incorrect theme
  }

  const src = resolvedTheme === 'dark' ? darkSrc : lightSrc;

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
      {...props}
    />
  );
}

