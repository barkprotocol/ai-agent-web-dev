'use client';

import { useEffect, useRef, useMemo } from 'react';
import { animate, useInView, useMotionValue, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number;
  decimalPlaces?: number;
  duration?: number;
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  duration = 2,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const formatter = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
  }, [decimalPlaces]);

  useEffect(() => {
    if (!isInView) return;

    const animateValue = (value: MotionValue<number>) => {
      const controls = animate(value, direction === 'down' ? 0 : value, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = formatter.format(Number(latest.toFixed(decimalPlaces)));
          }
        },
      });

      return controls.stop;
    };

    const timeoutId = setTimeout(() => animateValue(motionValue), delay * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [motionValue, isInView, delay, value, direction, duration, decimalPlaces, formatter]);

  return (
    <span
      className={cn(
        'inline-block tabular-nums tracking-wider text-foreground',
        className
      )}
      ref={ref}
      aria-live="polite"
      aria-atomic="true"
    >
      {formatter.format(direction === 'down' ? value : 0)}
    </span>
  );
}

