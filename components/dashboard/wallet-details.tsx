import { useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Wallet from "@/components/ui/icons/wallet.png"

interface Token {
  name: string
  imageUrl: string
  balance: number | string
  symbol: string
}

interface WalletDetailsProps {
  data: {
    totalBalance: number
    tokens: Token[]
  }
  isExpanded: boolean
  toggleExpanded: () => void
}

function WalletDetails({ data, isExpanded, toggleExpanded }: WalletDetailsProps) {
  const walletContent = useMemo(
    () => (
      <div className="flex items-center gap-1.5" aria-label="Wallet balance">
        <Wallet className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span className="text-sm font-medium text-muted-foreground">
          {data.totalBalance ? `$${data.totalBalance.toFixed(2)}` : "My Wallet"}
        </span>
      </div>
    ),
    [data.totalBalance],
  )

  return (
    <div>
      <motion.div
        layout="preserve-aspect"
        className={cn(
          "flex cursor-pointer items-center gap-1.5 rounded-2xl bg-black/[0.02] px-3 py-2 backdrop-blur-[12px]",
          "transition-colors hover:bg-black/[0.04] dark:bg-black/10 dark:backdrop-blur-xl dark:hover:bg-black/20",
        )}
        onClick={toggleExpanded}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            toggleExpanded()
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        aria-label="Toggle wallet details"
      >
        {walletContent}
      </motion.div>
      {isExpanded && (
        <ul className="mt-4 space-y-1">
          {data.tokens.map((token, index) => (
            <li key={token.name} className="flex items-center gap-2">
              {token.imageUrl && (
                <Image
                  src={token.imageUrl || "/placeholder.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-full"
                  priority={index === 0}
                />
              )}
              <span className="font-medium">{token.name}</span>
              {token.balance && (
                <span className="ml-auto text-sm text-muted-foreground">
                  {typeof token.balance === "number" ? token.balance.toFixed(2) : token.balance} {token.symbol}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default WalletDetails

