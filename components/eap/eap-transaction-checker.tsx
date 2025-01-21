"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { checkEAPTransaction } from "@/server/actions/eap"
import { FocusTrap } from "@/components/ui/focus-trap"

export function EAPTransactionChecker() {
  const [txHash, setTxHash] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  async function handleCheck() {
    if (!txHash.trim()) {
      setResult({
        success: false,
        message: "Please enter a valid transaction hash.",
      })
      return
    }

    setIsChecking(true)
    try {
      const response = await checkEAPTransaction({ txHash })
      if (response?.data?.success) {
        setResult({
          success: true,
          message: `Transaction verified successfully. EAP should be granted to your account.`,
        })
      } else {
        console.error("EAP verification failed:", response)
        setResult({
          success: false,
          message: "Failed to verify transaction. Please try again or contact support if the issue persists.",
        })
      }
    } catch (error) {
      console.error("EAP verification error:", error)
      setResult({
        success: false,
        message: "An error occurred while verifying the transaction. Please try again later or contact support.",
      })
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 px-6">
        <Input
          placeholder="Paste transaction hash"
          value={txHash}
          onChange={(e) => setTxHash(e.target.value)}
          aria-label="Transaction hash"
          disabled={isChecking}
        />
        <Button onClick={handleCheck} disabled={isChecking || !txHash.trim()} aria-busy={isChecking}>
          {isChecking ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Checking
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </div>

      <AlertDialog open={!!result} onOpenChange={() => setResult(null)}>
        <FocusTrap>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{result?.success ? "Transaction Verified" : "Verification Failed"}</AlertDialogTitle>
              <AlertDialogDescription>{result?.message}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </FocusTrap>
      </AlertDialog>
    </div>
  )
}

export { checkEAPTransaction }

