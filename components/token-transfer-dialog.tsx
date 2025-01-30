import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface Token {
  id: string
  content: {
    metadata: {
      symbol: string
      name: string
    }
    files: { uri: string }[]
  }
  token_info: {
    balance: number
    decimals: number
    price_info: { price_per_token: number }
  }
}

interface TokenTransferDialogProps {
  isOpen: boolean
  onClose: () => void
  tokens: Token[]
  otherAddresses: string[]
  walletId: string
  onSuccess: () => Promise<void>
}

export function TokenTransferDialog({
  isOpen,
  onClose,
  tokens,
  otherAddresses,
  walletId,
  onSuccess,
}: TokenTransferDialogProps) {
  const [step, setStep] = useState(1)
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [transactionHash, setTransactionHash] = useState("")

  const handleTokenSelect = (tokenId: string) => {
    const token = tokens.find((t) => t.id === tokenId)
    setSelectedToken(token || null)
    setStep(2)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipient(e.target.value)
  }

  const handleTransfer = async () => {
    if (!selectedToken || !amount || !recipient) return

    setIsLoading(true)
    try {
      // Implement the actual transfer logic here
      // For now, we'll just simulate a successful transfer
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setTransactionHash("0x1234567890abcdef") // Replace with actual transaction hash
      setStep(4)
      await onSuccess()
    } catch (error) {
      console.error("Transfer failed:", error)
      // Handle error state
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setSelectedToken(null)
    setAmount("")
    setRecipient("")
    setTransactionHash("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Transfer Tokens</DialogTitle>
          <DialogDescription>Send tokens to another address</DialogDescription>
        </DialogHeader>
        {step === 1 && (
          <div className="space-y-4">
            <Label htmlFor="token-select">Select Token</Label>
            <Select onValueChange={handleTokenSelect}>
              <SelectTrigger id="token-select">
                <SelectValue placeholder="Select a token" />
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.id} value={token.id}>
                    {token.content.metadata.name} ({token.content.metadata.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {step === 2 && selectedToken && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div>
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                type="text"
                placeholder="Enter recipient address"
                value={recipient}
                onChange={handleRecipientChange}
              />
            </div>
            <Button onClick={() => setStep(3)} disabled={!amount || !recipient}>
              Next
            </Button>
          </div>
        )}
        {step === 3 && selectedToken && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Confirm Transfer</h3>
            <p>
              Token: {selectedToken.content.metadata.name} ({selectedToken.content.metadata.symbol})
            </p>
            <p>Amount: {amount}</p>
            <p>Recipient: {recipient}</p>
            <Button onClick={handleTransfer} disabled={isLoading}>
              {isLoading ? "Processing..." : "Confirm Transfer"}
            </Button>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Transfer Complete</h3>
            <p>Transaction Hash: {transactionHash}</p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        )}
        <DialogFooter>
          {step > 1 && step < 4 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

