'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedShinyTextProps {
  text: string;
  className?: string;
  animationDuration?: number;
  gradientColors?: {
    from: string;
    via: string;
    to: string;
  };
  textGradient?: {
    from: string;
    to: string;
  };
  disableAnimation?: boolean;
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = React.memo(({
  text,
  className,
  animationDuration = 2,
  gradientColors = {
    from: 'white/0',
    via: 'white/50',
    to: 'white/0',
  },
  textGradient = {
    from: 'white',
    to: 'gray-200',
  },
  disableAnimation = false,
}) => {
  const shineVariants = useMemo(() => ({
    initial: { x: '-100%' },
    animate: { x: '100%' },
  }), []);

  const shineTransition = useMemo(() => ({
    repeat: Infinity,
    repeatType: 'loop' as const,
    duration: animationDuration,
    ease: 'linear',
  }), [animationDuration]);

  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label={text}
    >
      {!disableAnimation && (
        <motion.div
          className={cn(
            'absolute inset-0 bg-gradient-to-r',
            `from-${gradientColors.from}`,
            `via-${gradientColors.via}`,
            `to-${gradientColors.to}`
          )}
          variants={shineVariants}
          initial="initial"
          animate="animate"
          transition={shineTransition}
        />
      )}
      <span 
        className={cn(
          'relative z-10 bg-gradient-to-r text-transparent bg-clip-text',
          `from-${textGradient.from}`,
          `to-${textGradient.to}`
        )}
      >
        {text}
      </span>
    </motion.div>
  );
});

AnimatedShinyText.displayName = 'AnimatedShinyText';

