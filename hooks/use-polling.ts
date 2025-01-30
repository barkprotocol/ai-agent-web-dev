import { useEffect, useRef, useCallback } from "react"

type UsePollingOptions<T> = {
  url: string | null
  onUpdate: (newData: T | null) => void
  interval?: number
  enabled?: boolean
}

function usePolling<T>({ url, onUpdate, interval = 60000, enabled = true }: UsePollingOptions<T>) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const poll = useCallback(async () => {
    if (!url) {
      onUpdate(null)
      return
    }

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: T = await response.json()
      onUpdate(data)
    } catch (error) {
      console.error("Polling error:", error)
      // You might want to call onUpdate with null or some error state here
      // onUpdate(null);
    }
  }, [url, onUpdate])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const runPoll = () => {
      poll()
      timeoutRef.current = setTimeout(runPoll, interval)
    }

    runPoll()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [poll, interval, enabled])

  const manualPoll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    poll()
  }, [poll])

  return { manualPoll }
}

export default usePolling

