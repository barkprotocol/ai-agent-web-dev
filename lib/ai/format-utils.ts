/**
 * Format utilities for displaying data
 */

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

/**
 * Format user creation date
 */
export function formatUserCreationDate(date: string | undefined): string {
  if (!date) return ""
  return new Date(date).toLocaleDateString("en-US", DATE_FORMAT_OPTIONS)
}

/**
 * Format wallet address for display
 */
export function formatWalletAddress(address: string | undefined, length = 5): string {
  if (!address) return "Anonymous"
  return `${address.slice(0, length)}...${address.slice(-length)}`
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

