"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AnimatedShinyTextProps {
  text: string
  className?: string
  duration?: number
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({ text, className = "", duration = 3 }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <span className="relative z-10" aria-label={text}>
        {text}
      </span>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["100% 0%", "-100% 0%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: duration,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
    </div>
  )
}

