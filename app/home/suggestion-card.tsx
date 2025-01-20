import React from "react"
import { motion } from "framer-motion"

import type { Suggestion } from "./data/suggestions"

interface SuggestionCardProps extends Suggestion {
  delay?: number
  onSelect: (text: string) => void
}

export function SuggestionCard({ id, title, subtitle, delay = 0, onSelect }: SuggestionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(title)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onSelect(title)
        }
      }}
      className="flex w-full flex-col gap-1.5 rounded-xl bg-muted/50 p-3.5 text-left 
        transition-colors duration-200 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-labelledby={`suggestion-title-${id}`}
    >
      <div id={`suggestion-title-${id}`} className="text-sm font-medium">
        {title}
      </div>
      <div className="text-xs text-muted-foreground/80">{subtitle}</div>
    </motion.button>
  )
}

