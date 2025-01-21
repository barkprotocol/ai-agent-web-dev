import type React from "react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { debounce } from "lodash"
import { Button } from "@/components/ui/button"
import { Toast } from "@/components/ui/toast"
import { SendHorizontal } from "lucide-react"

type Props = {
  onSubmit: (message: string) => Promise<void>
  onChange?: (value: string) => void
}

const MAX_CHARS = 3000

const MessageInput: React.FC<Props> = ({ onSubmit, onChange }) => {
  const [value, setValue] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const debouncedAdjustHeight = useMemo(
    () =>
      debounce(() => {
        const textarea = textareaRef.current
        if (!textarea) return

        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
      }, 100),
    [],
  )

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault()
      if (!value.trim()) return
      try {
        await onSubmit(value)
        setValue("")
      } catch (error) {
        console.error("Error submitting message:", error)
        toast.error("Failed to send message. Please try again.")
      }
    },
    [value, onSubmit],
  )

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      if (newValue.length <= MAX_CHARS) {
        setValue(newValue)
        onChange?.(newValue)
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto"
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
      } else {
        toast.error("Maximum character limit reached")
      }
    },
    [onChange],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit],
  )

  useEffect(() => {
    debouncedAdjustHeight()
    return () => {
      debouncedAdjustHeight.cancel()
    }
  }, [value, debouncedAdjustHeight])

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
        placeholder="Message..."
        className="flex-1 resize-none rounded-lg border border-input bg-background p-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        disabled={!value.trim()}
        className="group relative flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        title="Send message"
        aria-label="Send message"
      >
        <SendHorizontal
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-110"
          aria-hidden="true"
        />
      </Button>
    </form>
  )
}

export default MessageInput

