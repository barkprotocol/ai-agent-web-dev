'use client';

import React, { ReactNode, useEffect, useMemo, useState, useCallback } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface AnimatedListProps {
  className?: string;
  children: ReactNode;
  delay?: number;
  initialVisibleItems?: number;
  animationDuration?: number;
}

const listItemVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, originY: 0 },
  exit: { scale: 0, opacity: 0 },
};

export const AnimatedListItem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={listItemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      transition={{ type: 'spring', stiffness: 350, damping: 40 }}
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedList: React.FC<AnimatedListProps> = React.memo(({
  className,
  children,
  delay = 1000,
  initialVisibleItems = 1,
  animationDuration = 500,
}) => {
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  const incrementVisibleItems = useCallback(() => {
    setVisibleItems((prev) => Math.min(prev + 1, childrenArray.length));
  }, [childrenArray.length]);

  useEffect(() => {
    if (visibleItems < childrenArray.length) {
      const timeout = setTimeout(incrementVisibleItems, delay);
      return () => clearTimeout(timeout);
    }
  }, [visibleItems, delay, childrenArray.length, incrementVisibleItems]);

  const itemsToShow = useMemo(() => {
    return childrenArray.slice(0, visibleItems).reverse();
  }, [visibleItems, childrenArray]);

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <AnimatePresence initial={false}>
        {itemsToShow.map((item, index) => (
          <AnimatedListItem key={(item as React.ReactElement).key || `item-${index}`}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = 'AnimatedList';

