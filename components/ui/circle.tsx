'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  children?: React.ReactNode;
}

export const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children, size = 'md', variant = 'default', ...props }, ref) => {
    const sizeClasses = {
      sm: 'size-8',
      md: 'size-12',
      lg: 'size-16',
    };

    const variantClasses = {
      default: 'bg-white dark:bg-black',
      outline: 'bg-transparent border-2 border-current',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex items-center justify-center rounded-full p-3',
          'shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Circle.displayName = 'Circle';

