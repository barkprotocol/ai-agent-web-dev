import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';
import { ExternalLink } from "@/components/ui/external-link";
import { toast } from '@/components/ui/use-toast';

interface Props {
  text: string;
}

export const AccountAddress = ({ text }: Props) => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard?.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "The text has been copied to your clipboard.",
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Copy failed",
        description: "Failed to copy text to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-mono">{text}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleCopy(text)}
        className="h-6 w-6 hover:bg-sidebar-accent/50"
        aria-label="Copy to clipboard"
      >
        <Copy className="h-3.5 w-3.5" />
      </Button>
      <a
        href={`https://solscan.io/account/${text}`}
        target="_blank"
        rel="noopener noreferrer"
        title="View on Solscan"
      >
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
};

