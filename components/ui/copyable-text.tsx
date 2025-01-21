import { Copy, Check } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

function MyComponent({
  text,
  showSolscan,
  copied,
  handleCopy,
}: { text: string; showSolscan: boolean; copied: boolean; handleCopy: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copied!" : "Copy to clipboard"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {showSolscan && (
        <a
          href={`https://solscan.io/account/${text}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary"
          aria-label={`View ${text} on Solscan (opens in a new tab)`}
        >
          View on Solscan
        </a>
      )}
    </div>
  )
}

export default MyComponent

