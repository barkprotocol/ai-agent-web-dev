import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export interface LaunchResult {
  signature: string
  mint: string
  metadataUri: string
}

export function LaunchResult({ signature, mint, metadataUri }: LaunchResult) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Launch Successful</CardTitle>
        <CardDescription>Your token has been successfully launched on PumpFun</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Transaction Signature</h3>
          <p className="text-sm text-muted-foreground break-all">{signature}</p>
          <Button asChild variant="link" className="p-0 h-auto" size="sm">
            <Link href={`https://solscan.io/tx/${signature}`} target="_blank" rel="noopener noreferrer">
              View on Solscan <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
        <div>
          <h3 className="font-semibold">Token Mint Address</h3>
          <p className="text-sm text-muted-foreground break-all">{mint}</p>
          <Button asChild variant="link" className="p-0 h-auto" size="sm">
            <Link href={`https://solscan.io/token/${mint}`} target="_blank" rel="noopener noreferrer">
              View on Solscan <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
        <div>
          <h3 className="font-semibold">Metadata URI</h3>
          <p className="text-sm text-muted-foreground break-all">{metadataUri}</p>
          <Button asChild variant="link" className="p-0 h-auto" size="sm">
            <Link href={metadataUri} target="_blank" rel="noopener noreferrer">
              View Metadata <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

