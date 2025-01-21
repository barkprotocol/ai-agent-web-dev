import { ErrorBoundary } from "@/components/ui/error-boundary"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

function TokenDetails({ metadata }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <ErrorBoundary fallback={<div>An error occurred while displaying the launch result.</div>}>
      <Card className="w-full max-w-2xl">
        <div className="flex items-center gap-4">
          <Image
            src={metadata.image || "/placeholder.svg"}
            alt={`${metadata.name} token image`}
            fill
            className="object-cover"
          />
          <div>
            <h2 className="text-xl font-bold">{metadata.name}</h2>
            <p className="text-sm text-muted-foreground">
              {metadata.description.substring(0, isExpanded ? metadata.description.length : 100)}
              {isExpanded ? "" : "..."}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Show less of the token description" : "Show more of the token description"}
            >
              {isExpanded ? "Show less" : "Show more"}
            </Button>
          </div>
        </div>
      </Card>
    </ErrorBoundary>
  )
}

export default TokenDetails

