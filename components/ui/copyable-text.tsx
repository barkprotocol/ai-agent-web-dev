import { useCallback } from "react"
import bs58 from "bs58"
import { Copy, ExternalLink } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

interface Props {
  text: string
  showSolscan?: boolean
}

export const CopyableText = ({ text, showSolscan = false }: Props) => {
  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  }, [])

  const isValidBs58 = (str: string) => {
    try {
      bs58.decode(str)
      return true
    } catch (error) {
      return false
    }
  }

  const shouldShowSolscanLink = showSolscan && isValidBs58(text)

  return (
    <div className="flex w-full select-none items-center gap-2">
      <div className="min-w-0 flex-1 truncate">
        <span className="block font-mono text-sm">{text}</span>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCopy(text)}
          className="h-6 w-6 hover:bg-sidebar-accent/50"
          title="Copy to clipboard"
        >
          <Copy className="h-3.5 w-3.5" />
        </Button>
        {shouldShowSolscanLink && (
          <Button variant="ghost" size="sm" asChild className="h-6 w-6 hover:bg-sidebar-accent/50">
            <a
              href={`https://solscan.io/account/${text}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Solscan"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

