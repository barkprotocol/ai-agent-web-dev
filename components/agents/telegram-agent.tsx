'use client'

import React, { useState } from 'react'
import { MessageCircle, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'sonner'
import { initializeSolanaAgentKit } from '@/app/utils/solana-agent'

export function TelegramAgent() {
  const [botToken, setBotToken] = useState('')
  const [chatId, setChatId] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const isValidBotToken = (token: string) => /^\d+:[A-Za-z0-9_-]{35}$/.test(token);

  const handleSendMessage = async () => {
    if (!botToken || !chatId || !message) return
    if (!isValidBotToken(botToken)) {
      toast.error('Invalid bot token format. Please check and try again.')
      return
    }

    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()
      // In a real implementation, this would call the Telegram's BarkBot API
      // using the Solana agent
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      toast.success('Message sent successfully via BarkBot!')
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="h-6 w-6" />
          <span>Telegram Agent</span>
        </CardTitle>
        <CardDescription>Send AI-powered messages through your Telegram bot</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="botToken">Bot Token</Label>
            <Input
              id="botToken"
              placeholder="Enter your Telegram bot token"
              value={botToken}
              onChange={(e) => setBotToken(e.target.value)}
            />
            {!isValidBotToken(botToken) && botToken && (
              <p className="text-sm text-red-500">Invalid bot token format</p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="chatId">Chat ID</Label>
            <Input
              id="chatId"
              placeholder="Enter the chat ID"
              value={chatId}
              onChange={(e) => setChatId(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSendMessage} 
          disabled={isLoading || !isValidBotToken(botToken) || !chatId || !message} 
          className="w-full"
        >
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

