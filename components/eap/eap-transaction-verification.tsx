import { AlertDialog, AlertDialogContent, AlertDialogDescription } from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { FocusTrap } from "@/components/ui/focus-trap"

export default function TransactionChecker() {
  const [txHash, setTxHash] = useState("")
  const [result, setResult] = useState<{ message: string; success: boolean } | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  const handleCheck = async () => {
    if (!txHash.trim()) {
      toast({
        title: "Error",
        description: "Please enter a transaction hash.",
        variant: "destructive",
      })
      return
    }

    setIsChecking(true)
    try {
      // Simulate API call
      const response = await fetch(`/api/transactions/${txHash}`)
      const data = await response.json()
      setResult({ message: data.message, success: data.success })
    } catch (error) {
      setResult({ message: "Error checking transaction", success: false })
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Input
          placeholder="Paste transaction hash"
          value={txHash}
          onChange={(e) => setTxHash(e.target.value)}
          className="flex-grow"
          disabled={isChecking}
          aria-label="Transaction hash input"
        />
        <Button onClick={handleCheck} disabled={isChecking}>
          Check
        </Button>
      </div>
      <AlertDialog open={!!result} onOpenChange={() => setResult(null)}>
        <FocusTrap>
          <AlertDialogContent>
            <AlertDialogDescription aria-live="polite">{result?.message}</AlertDialogDescription>
          </AlertDialogContent>
        </FocusTrap>
      </AlertDialog>
    </div>
  )
}

