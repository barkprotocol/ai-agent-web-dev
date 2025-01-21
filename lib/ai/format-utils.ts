/**
 * Format utilities for displaying data
 */

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

const TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
}

/**
 * Format user creation date
 */
export function formatUserCreationDate(date: string | Date | undefined): string {
  if (!date) return ""
  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateObj.toLocaleDateString("en-US", DATE_FORMAT_OPTIONS)
}

/**
 * Format date and time
 */
export function formatDateTime(date: string | Date | undefined): string {
  if (!date) return ""
  const dateObj = typeof date === "string" ? new Date(date) : date
  return `${dateObj.toLocaleDateString("en-US", DATE_FORMAT_OPTIONS)} ${dateObj.toLocaleTimeString("en-US", TIME_FORMAT_OPTIONS)}`
}

/**
 * Format wallet address for display
 */
export function formatWalletAddress(address: string | undefined, length = 5): string {
  if (!address) return "Anonymous"
  return address.length > length * 2 ? `${address.slice(0, length)}...${address.slice(-length)}` : address
}

/**
 * Helper function to format a number to short notation:
 * e.g. 1_100_000 => 1.1M, 466_800 => 466.8K
 */
export function formatShortNumber(value: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
  return formatter.format(value)
}

/**
 * Format Privy ID by removing prefix
 */
export function formatPrivyId(id: string | undefined): string {
  if (!id) return ""
  return id.replace(/^did:privy:/, "")
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Format a number as currency
 */
export function formatCurrency(value: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value)
}

/**
 * Truncate a string to a specified length
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 3) + "..."
}

/**
 * Format a file size in bytes to a human-readable string
 */
export function formatFileSize(bytes: number): string {
  const units = ["B", "KB", "MB", "GB", "TB"]
  let i = 0
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024
    i++
  }
  return `${bytes.toFixed(2)} ${units[i]}`
}

