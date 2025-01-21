import { motion, useMotionValue, AnimatePresence } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { animate } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  direction: "up" | "down"
  duration?: number
  delay?: number
  decimalPlaces?: number
  formatter?: (value: number) => string
  className?: string
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  direction,
  duration = 0.8,
  delay = 0,
  decimalPlaces = 0,
  formatter = (value) => value.toLocaleString(),
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = true

  useEffect(() => {
    if (!isInView) return

    const animateValue = (value: MotionValue<number>) => {
      const controls = animate(value, direction === "down" ? 0 : value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = formatter.format(Number(latest.toFixed(decimalPlaces)))
          }
        },
      })

      return controls.stop
    }

    const timeoutId = setTimeout(() => animateValue(motionValue), delay * 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [motionValue, isInView, delay, value, direction, duration, decimalPlaces])

  return (
    <span
      className={cn("inline-block tabular-nums tracking-wider text-foreground", className)}
      ref={ref}
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Animated number counting ${direction} to ${value}`}
      role="status"
    >
      {formatter.format(direction === "down" ? value : 0)}
    </span>
  )
}

export default AnimatedNumber

