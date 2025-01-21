"use client"

import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
  onComplete?: () => void
}

export default function TypingAnimation({ text, duration = 200, className, onComplete }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("")
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const animate = useCallback(() => {
    let i = 0
    setIsComplete(false)

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
        setIsComplete(true)
        onComplete?.()
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [text, duration, onComplete])

  useEffect(() => {
    return animate()
  }, [animate])

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
      aria-label={text}
    >
      {isComplete ? text : displayedText}
    </h1>
  )
}

