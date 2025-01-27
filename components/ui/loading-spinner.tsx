import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  fullScreen?: boolean
  className?: string
}

export function LoadingSpinner({ size = "md", fullScreen = false, className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const spinnerClasses = cn(
    "animate-spin rounded-full border-4 border-primary border-t-transparent",
    sizeClasses[size],
    className,
  )

  const containerClasses = cn("flex items-center justify-center", fullScreen && "h-screen")

  return (
    <div className={containerClasses} role="status">
      <div className={spinnerClasses} aria-hidden="true"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

