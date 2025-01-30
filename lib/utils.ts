import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function logWithTiming(startTime: number, message: string) {
  const elapsedTime = performance.now() - startTime
  console.log(`[${elapsedTime.toFixed(2)}ms] ${message}`)
}

export function isValidTokenUsage(usage: any): boolean {
  return (
    usage &&
    typeof usage.promptTokens === "number" &&
    typeof usage.completionTokens === "number" &&
    typeof usage.totalTokens === "number"
  )
}

