'use client';

import React, { forwardRef, useRef, useMemo } from 'react';
import Image from "next/image";
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/layout/logo';

const INTEGRATIONS = [
  { name: 'DexScreener', icon: 'integrations/dexscreener.svg' },
  { name: 'Dialect', icon: 'integrations/dialect.svg' },
  { name: 'Jupiter', icon: 'integrations/jupiter.svg' },
  { name: 'Magic Eden', icon: 'integrations/magic_eden.svg' },
  { name: 'Pump Fun', icon: 'integrations/pump_fun.svg' },
  { name: 'Bark Protocol', icon: 'integrations/bark_protocol.svg' },
];

interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          className
        )}
        aria-label={label}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Circle.displayName = 'Circle';

export function IntegrationCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const beams = useMemo(() => [
    { from: 0, to: 3, curvature: -75, endYOffset: -10 },
    { from: 1, to: 3, curvature: 0, endYOffset: 0 },
    { from: 2, to: 3, curvature: 75, endYOffset: 10 },
    { from: 4, to: 3, curvature: -75, endYOffset: -10, reverse: true },
    { from: 5, to: 3, curvature: 0, endYOffset: 0, reverse: true },
    { from: 6, to: 3, curvature: 75, endYOffset: 10, reverse: true },
  ], []);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-6 md:gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle key={INTEGRATIONS[0].name} ref={el => circleRefs.current[0] = el} label={INTEGRATIONS[0].name}>
            <Image 
              src={INTEGRATIONS[0].icon || "/placeholder.svg"} 
              alt={INTEGRATIONS[0].name} 
              width={32} 
              height={32}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </Circle>
          <Circle key={INTEGRATIONS[1].name} ref={el => circleRefs.current[4] = el} label={INTEGRATIONS[1].name}>
            <Image 
              src={INTEGRATIONS[1].icon || "/placeholder.svg"} 
              alt={INTEGRATIONS[1].name} 
              width={32} 
              height={32}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle key={INTEGRATIONS[2].name} ref={el => circleRefs.current[1] = el} label={INTEGRATIONS[2].name}>
            <Image 
              src={INTEGRATIONS[2].icon || "/placeholder.svg"} 
              alt={INTEGRATIONS[2].name} 
              width={32} 
              height={32}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </Circle>
          <Circle key={"Bark AI"} ref={el => circleRefs.current[3] = el} className="size-16" label="Bark AI">
            <Logo />
          </Circle>
          <Circle key={INTEGRATIONS[3].name} ref={el => circleRefs.current[5] = el} label={INTEGRATIONS[3].name}>
            <Image 
              src={INTEGRATIONS[3].icon || "/placeholder.svg"} 
              alt={INTEGRATIONS[3].name} 
              width={32} 
              height={32}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle key={INTEGRATIONS[4].name} ref={el => circleRefs.current[2] = el} label={INTEGRATIONS[4].name}>
            <Image 
              src={INTEGRATIONS[4].icon || "/placeholder.svg"} 
              alt={INTEGRATIONS[4].name} 
              width={32} 
              height={32}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </Circle>
          <Circle key={INTEGRATIONS[5].name} ref={el => circleRefs.current[6] = el} label={INTEGRATIONS[5].name}>
            <Image 
              src={INTEGRATIONS[5].icon || "/placeholder.svg"} 
              alt={INTEGRATIONS[5].name} 
              width={32} 
              height={32}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </Circle>
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
  );
}

