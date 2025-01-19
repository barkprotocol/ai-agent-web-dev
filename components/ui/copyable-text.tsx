import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyableTextProps {
  text: string;
  id?: string;
  showSolscan?: boolean;
  className?: string;
}

export function CopyableText({ text, id, showSolscan = false, className }: CopyableTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <span id={id} className="text-sm font-medium">
        {text}
      </span>
      <button
        onClick={handleCopy}
        className="rounded-md p-1 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      {showSolscan && (
        <a
          href={`https://solscan.io/account/${text}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary"
        >
          View on Solscan
        </a>
      )}
    </div>
  );
}

