"use client"

import React, { type ReactElement, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
  reverse?: boolean
}

export const AnimatedList = React.memo(
  ({ className = "", children, delay = 1000, reverse = true }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(() => React.Children.toArray(children), [children])

    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1)
        }, delay)

        return () => clearTimeout(timeout)
      }
    }, [index, delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1)
      return reverse ? result.reverse() : result
    }, [index, childrenArray, reverse])

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item, idx) => (
            <AnimatedListItem key={(item as ReactElement).key || idx}>{item}</AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  },
)

AnimatedList.displayName = "AnimatedList"

interface AnimatedListItemProps {
  children: React.ReactNode
}

export function AnimatedListItem({ children }: AnimatedListItemProps) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

