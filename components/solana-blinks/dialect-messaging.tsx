"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useWallet } from "@solana/wallet-adapter-react"
import { DialectSdk, DialectSdkError, Environment } from "@dialectlabs/sdk"
import { SolanaWalletAdapter } from "@dialectlabs/blockchain-sdk-solana"

export function DialectMessaging() {
  const [message, setMessage] = useState("")
  const [recipient, setRecipient] = useState("")
  const [messages, setMessages] = useState<{ sender: string; content: string }[]>([])
  const { publicKey, signMessage } = useWallet()
  const [dialectSdk, setDialectSdk] = useState<DialectSdk | null>(null)

  useEffect(() => {
    if (publicKey && signMessage) {
      const wallet = new SolanaWalletAdapter({ wallet: { publicKey, signMessage } })
      const sdk = DialectSdk.create({
        environment: Environment.PRODUCTION,
        wallet,
      })
      setDialectSdk(sdk)
    }
  }, [publicKey, signMessage])

  const sendMessage = async () => {
    if (!dialectSdk || !publicKey) {
      toast.error("Please connect your wallet")
      return
    }

    try {
      await dialectSdk.messages.send({
        recipient: recipient,
        message: message,
      })

      setMessages((prev) => [...prev, { sender: publicKey.toBase58(), content: message }])
      setMessage("")
      toast.success("Message sent successfully!")
    } catch (error) {
      console.error("Error sending message:", error)
      if (error instanceof DialectSdkError) {
        toast.error(`Failed to send message: ${error.message}`)
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dialect Messaging</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="recipient">Recipient</Label>
            <Input
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Recipient's Solana address"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
            />
          </div>
          <Button onClick={sendMessage}>Send Message</Button>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recent Messages</h3>
          {messages.map((msg, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="pt-4">
                <p>
                  <strong>From:</strong> {msg.sender}
                </p>
                <p>{msg.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

