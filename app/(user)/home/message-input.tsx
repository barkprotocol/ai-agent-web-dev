import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { SendHorizontal } from "lucide-react"
import debounce from "lodash/debounce"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface MessageInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (message: string) => Promise<void>
}

const MAX_CHARS = 3000

export function MessageInput({ value, onChange, onSubmit }: MessageInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const debouncedAdjustHeight = useCallback(
    debounce(() => {
      const textarea = textareaRef.current
      if (!textarea) return

      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
    }, 100),
    [],
  )

  useEffect(() => {
    debouncedAdjustHeight()
  }, [value, debouncedAdjustHeight])

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!value.trim()) return
    try {
      await onSubmit(value)
    } catch (error) {
      console.error("Error submitting message:", error)
      toast.error("Failed to send message. Please try again.")
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (newValue.length <= MAX_CHARS) {
      onChange(newValue)
    } else {
      toast.error("Maximum character limit reached")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="relative duration-500 animate-in fade-in slide-in-from-bottom-4">
      <div className="relative rounded-xl bg-muted">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            maxLength={MAX_CHARS}
            placeholder="Type your message..."
            aria-label="Conversation input"
            className="min-h-[110px] w-full resize-none overflow-hidden border-0 bg-transparent px-4 py-3 text-base focus-visible:ring-0"
          />

          <div className="flex items-center justify-between border-t px-4 py-2">
            <span className="text-xs text-muted-foreground">
              {value.length}/{MAX_CHARS}
            </span>

            <Button
              type="submit"
              size="icon"
              variant="ghost"
              disabled={!value.trim()}
              className="group relative flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              title="Send message"
            >
              <SendHorizontal
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-110"
                aria-hidden="true"
              />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MessageInput

