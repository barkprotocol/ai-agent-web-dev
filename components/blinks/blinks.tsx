"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { useWallet } from "@solana/wallet-adapter-react"
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { uploadImage } from "@/lib/image-upload"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ConfirmationDialog } from "./confirmation-dialog"

const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com"

type BlinkType = "donation" | "payment" | "gift" | "governance"

interface Blink {
  type: BlinkType
  recipient: string
  amount: number
  memo: string
  image?: string
}

const MAX_TRANSACTION_AMOUNT = 100 // Maximum transaction amount in SOL
const TRANSACTION_COOLDOWN = 60000 // Cooldown period in milliseconds (1 minute)

const validateInput = () => {
  if (!validateSolanaAddress(newBlink.recipient)) {
    setError("Please provide a valid Solana address")
    return false
  }
  if (newBlink.amount <= 0 || newBlink.amount > MAX_TRANSACTION_AMOUNT) {
    setError(`Please enter an amount between 0 and ${MAX_TRANSACTION_AMOUNT} SOL`)
    return false
  }
  const currentTime = Date.now()
  if (currentTime - lastTransactionTime < TRANSACTION_COOLDOWN) {
    setError("Please wait a moment before making another transaction")
    return false
  }
  return true
}

export function Blinks() {
  const [blinks, setBlinks] = useState<Blink[]>([])
  const [newBlink, setNewBlink] = useState<Blink>({
    type: "donation",
    recipient: "",
    amount: 0,
    memo: "",
  })
  const [image, setImage] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [lastTransactionTime, setLastTransactionTime] = useState(0)
  const { publicKey, signTransaction } = useWallet()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewBlink((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: BlinkType) => {
    setNewBlink((prev) => ({ ...prev, type: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const validateSolanaAddress = (address: string): boolean => {
    try {
      new PublicKey(address)
      return true
    } catch (error) {
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!publicKey || !signTransaction) {
      toast.error("Please connect your wallet")
      return
    }

    if (!validateInput()) {
      return
    }

    setIsConfirmationOpen(true)
  }

  const handleConfirmTransaction = async () => {
    setIsConfirmationOpen(false)
    setIsLoading(true)
    setError(null)

    try {
      let imageUrl = ""
      if (image) {
        imageUrl = (await uploadImage(image)) || ""
      }

      const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!, "confirmed")
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey!,
          toPubkey: new PublicKey(newBlink.recipient),
          lamports: newBlink.amount * LAMPORTS_PER_SOL,
        }),
      )

      const { blockhash } = await connection.getLatestBlockhash()
      transaction.recentBlockhash = blockhash
      transaction.feePayer = publicKey!

      const signedTransaction = await signTransaction!(transaction)
      const signature = await connection.sendRawTransaction(signedTransaction.serialize())

      await connection.confirmTransaction(signature)

      setLastTransactionTime(Date.now())
      const blinkWithImage = { ...newBlink, image: imageUrl }
      setBlinks((prev) => [...prev, blinkWithImage])
      setNewBlink({ type: "donation", recipient: "", amount: 0, memo: "" })
      setImage(null)
      toast.success("Blink created successfully!")
    } catch (error) {
      console.error("Error creating blink:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
      toast.error("Failed to create blink. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blinks</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="type">Type</Label>
            <Select onValueChange={handleSelectChange} value={newBlink.type}>
              <SelectTrigger>
                <SelectValue placeholder="Select blink type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="donation">Donation</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="gift">Gift</SelectItem>
                <SelectItem value="governance">Governance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="recipient">Recipient</Label>
            <Input
              id="recipient"
              name="recipient"
              value={newBlink.recipient}
              onChange={handleInputChange}
              placeholder="Recipient's Solana address"
              required
            />
          </div>
          <div>
            <Label htmlFor="amount">Amount (SOL)</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={newBlink.amount}
              onChange={handleInputChange}
              placeholder="Amount in SOL"
              required
            />
          </div>
          <div>
            <Label htmlFor="memo">Memo</Label>
            <Textarea
              id="memo"
              name="memo"
              value={newBlink.memo}
              onChange={handleInputChange}
              placeholder="Add a memo (optional)"
            />
          </div>
          <div>
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" onChange={handleImageUpload} accept="image/*" />
          </div>
          <Button type="submit" disabled={isLoading || !publicKey || !validateInput()}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Blink...
              </>
            ) : (
              "Create Blink"
            )}
          </Button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recent Blinks</h3>
          {blinks.length === 0 ? (
            <p className="text-muted-foreground">No blinks created yet.</p>
          ) : (
            blinks.map((blink, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="pt-4">
                  <p>
                    <strong>Type:</strong> {blink.type}
                  </p>
                  <p>
                    <strong>Recipient:</strong> {blink.recipient}
                  </p>
                  <p>
                    <strong>Amount:</strong> {blink.amount} SOL
                  </p>
                  {blink.memo && (
                    <p>
                      <strong>Memo:</strong> {blink.memo}
                    </p>
                  )}
                  {blink.image && (
                    <img
                      src={blink.image || "/placeholder.svg"}
                      alt="Blink"
                      className="mt-2 max-w-full h-auto rounded-md"
                    />
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <ConfirmationDialog
          isOpen={isConfirmationOpen}
          onClose={() => setIsConfirmationOpen(false)}
          onConfirm={handleConfirmTransaction}
          title="Confirm Transaction"
          description={`Are you sure you want to send ${newBlink.amount} SOL to ${newBlink.recipient}?`}
        />
      </CardContent>
    </Card>
  )
}

