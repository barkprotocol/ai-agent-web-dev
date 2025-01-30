import { useEffect, useState, useCallback } from "react"
import cn from "classnames"

interface TypingTextProps {
  text: string
  duration: number
  className?: string
}

const TypingText: React.FC<TypingTextProps> = ({ text, duration, className }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [i, setI] = useState(0)

  const typingEffect = useCallback(() => {
    if (i < text.length) {
      setDisplayedText(text.substring(0, i + 1))
      setI(i + 1)
    }
  }, [i, text])

  useEffect(() => {
    const intervalId = setInterval(typingEffect, duration)

    return () => {
      clearInterval(intervalId)
    }
  }, [duration, typingEffect])

  return (
    <h1
      key={text}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText || text}
    </h1>
  )
}

export default TypingText

