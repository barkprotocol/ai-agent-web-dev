import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface BannerProps {
  children: React.ReactNode;
}

export function Banner({ children }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex w-full items-center justify-between bg-primary px-4 py-2 text-sm text-primary-foreground">
      <span>{children}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 rounded-full p-0 hover:bg-primary-foreground/20"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-3 w-3" />
        <span className="sr-only">Close</span>
      </Button>
    </div>
  );
}

