'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  onComplete?: () => void;
  cursorChar?: string;
  showCursor?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  duration = 50,
  className,
  onComplete,
  cursorChar = '|',
  showCursor = true,
  tag: Tag = 'h1',
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const animatedText = useMemo(() => {
    return showCursor ? `${displayedText}${isTyping ? cursorChar : ''}` : displayedText;
  }, [displayedText, isTyping, showCursor, cursorChar]);

  const typeText = useCallback(() => {
    if (displayedText.length < text.length) {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    } else {
      setIsTyping(false);
      onComplete?.();
    }
  }, [displayedText, text, onComplete]);

  useEffect(() => {
    const typingTimer = setTimeout(typeText, duration);
    return () => clearTimeout(typingTimer);
  }, [typeText, duration]);

  useEffect(() => {
    if (!isTyping && showCursor) {
      const cursorTimer = setInterval(() => setIsTyping((prev) => !prev), 500);
      return () => clearInterval(cursorTimer);
    }
  }, [isTyping, showCursor]);

  return (
    <Tag
      className={cn(
        'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
        className
      )}
      aria-label={text}
    >
      {animatedText}
    </Tag>
  );
};

