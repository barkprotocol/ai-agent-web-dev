"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement>
  fromRef: React.RefObject<HTMLDivElement>
  toRef: React.RefObject<HTMLDivElement>
  curvature?: number
  endYOffset?: number
  reverse?: boolean
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
}) => {
  const pathRef = useRef<SVGPathElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current || !pathRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const fromRect = fromRef.current.getBoundingClientRect()
      const toRect = toRef.current.getBoundingClientRect()

      const startX = fromRect.left + fromRect.width / 2 - containerRect.left
      const startY = fromRect.top + fromRect.height / 2 - containerRect.top
      const endX = toRect.left + toRect.width / 2 - containerRect.left
      const endY = toRect.top + toRect.height / 2 - containerRect.top + endYOffset

      const midX = (startX + endX) / 2
      const midY = (startY + endY) / 2 + curvature

      const path = `M${startX},${startY} Q${midX},${midY} ${endX},${endY}`
      pathRef.current.setAttribute("d", path)

      controls.start({ pathLength: 1, opacity: 1 })
    }

    updatePath()
    window.addEventListener("resize", updatePath)

    return () => window.removeEventListener("resize", updatePath)
  }, [containerRef, fromRef, toRef, curvature, endYOffset, controls])

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dbcfc7" />
          <stop offset="100%" stopColor="#c4b1a5" />
        </linearGradient>
      </defs>
      <motion.path
        ref={pathRef}
        stroke="url(#beamGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  )
}

