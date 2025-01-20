"use client"

import type React from "react"
import { forwardRef, useRef, useMemo } from "react"
import Image from "next/image"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/layout/logo"

const INTEGRATIONS = [
  { name: "DexScreener", icon: "integrations/dexscreener.svg" },
  { name: "Dialect", icon: "integrations/dialect.svg" },
  { name: "Jupiter", icon: "https://ucarecdn.com/80fffad0-0b23-4004-b942-a7ac8b20462d/jupiteragjuplogo.svg" },
  { name: "Raydium", icon: "https://ucarecdn.com/8b622209-2f52-4954-8f85-666d9effb3dc/raydiumblackicon.png" },
  { name: "Magic Eden", icon: "integrations/magic_eden.svg" },
  { name: "Pump.fun", icon: "integrations/pump_fun.svg" },
]

interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

const Circle = forwardRef<HTMLDivElement, CircleProps>(({ className, children, label, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
      aria-label={label}
      {...props}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function IntegrationCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])

  const beams = useMemo(
    () => [
      { from: 0, to: 3, curvature: -75, endYOffset: -10 },
      { from: 1, to: 3, curvature: 0, endYOffset: 0 },
      { from: 2, to: 3, curvature: 75, endYOffset: 10 },
      { from: 4, to: 3, curvature: -75, endYOffset: -10, reverse: true },
      { from: 5, to: 3, curvature: 0, endYOffset: 0, reverse: true },
      { from: 6, to: 3, curvature: 75, endYOffset: 10, reverse: true },
    ],
    [],
  )

  const renderCircle = (integration: (typeof INTEGRATIONS)[0], index: number, className?: string) => (
    <Circle
      key={integration.name}
      ref={(el) => (circleRefs.current[index] = el)}
      label={integration.name}
      className={className}
    >
      {integration.name === "BARK" ? (
        <Logo />
      ) : (
        <Image
          src={integration.icon || "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"}
          alt={integration.name}
          width={32}
          height={32}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg"
          }}
        />
      )}
    </Circle>
  )

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-6 md:gap-10">
        <div className="flex flex-row items-center justify-between">
          {renderCircle(INTEGRATIONS[0], 0)}
          {renderCircle(INTEGRATIONS[1], 4)}
        </div>
        <div className="flex flex-row items-center justify-between">
          {renderCircle(INTEGRATIONS[2], 1)}
          {renderCircle(INTEGRATIONS[6], 3, "size-16")}
          {renderCircle(INTEGRATIONS[3], 5)}
        </div>
        <div className="flex flex-row items-center justify-between">
          {renderCircle(INTEGRATIONS[4], 2)}
          {renderCircle(INTEGRATIONS[5], 6)}
        </div>
      </div>

      {beams.map((beam, index) => (
        <AnimatedBeam
          key={index}
          containerRef={containerRef}
          fromRef={circleRefs.current[beam.from]}
          toRef={circleRefs.current[beam.to]}
          curvature={beam.curvature}
          endYOffset={beam.endYOffset}
          reverse={beam.reverse}
        />
      ))}
    </div>
  )
}

