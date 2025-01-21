import type React from "react"
import { useState } from "react"
import { ActionResponse, type TypedActionResponse } from "@/app/types/action"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

interface TransferResult {
  txId: string
  amount: number
}

const TokenTransfer: React.FC = () => {
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")

  const handleTransfer = async () => {
    try {
      // Simulating an API call
      const response: TypedActionResponse<TransferResult> = await fetch("/api/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipient, amount: Number.parseFloat(amount) }),
      }).then((res) => res.json())

      if (response.success && response.data) {
        toast.success(`Transfer successful! Transaction ID: ${response.data.txId}`)
      } else {
        toast.error(response.error || "Transfer failed")
      }
    } catch (error) {
      toast.error("An error occurred during the transfer")
    }
  }

  return (
    <div className="space-y-4">
      <Input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient address"
        aria-label="Recipient address input"
      />
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        aria-label="Amount input"
      />
      <Button onClick={handleTransfer}>Transfer</Button>
    </div>
  )
}

export default TokenTransfer

