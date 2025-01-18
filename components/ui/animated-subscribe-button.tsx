'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactNode;
  changeText: React.ReactNode;
  className?: string;
}

function isValidColor(color: string): boolean {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
}

const buttonVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const textVariants: Variants = {
  initial: { y: -50 },
  animate: { y: 0 },
  exit: { x: 50, transition: { duration: 0.1 } },
};

export const AnimatedSubscribeButton: React.FC<AnimatedSubscribeButtonProps> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor = '#ffffff',
  changeText,
  initialText,
  className,
}) => {
  if (!isValidColor(buttonColor) || (buttonTextColor && !isValidColor(buttonTextColor))) {
    console.error('Invalid color provided for AnimatedSubscribeButton');
    return null;
  }

  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  const handleClick = () => setIsSubscribed(!isSubscribed);

  return (
    <AnimatePresence mode="wait">
      <motion.button
        className={cn(
          "relative flex w-[200px] items-center justify-center overflow-hidden rounded-md p-[10px]",
          isSubscribed ? "bg-white outline outline-1 outline-black" : "",
          className
        )}
        onClick={handleClick}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        aria-pressed={isSubscribed}
        style={{
          '--button-color': buttonColor,
          '--text-color': buttonTextColor,
        } as React.CSSProperties}
      >
        <motion.span
          key={isSubscribed ? "subscribed" : "not-subscribed"}
          className={cn(
            "relative block font-semibold",
            isSubscribed ? "h-full w-full" : ""
          )}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ color: isSubscribed ? 'var(--button-color)' : 'var(--text-color)' }}
        >
          {isSubscribed ? changeText : initialText}
        </motion.span>
      </motion.button>
    </AnimatePresence>
  );
};

