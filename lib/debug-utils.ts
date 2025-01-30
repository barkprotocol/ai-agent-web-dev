export function debugLog(
  message: string,
  data: any = null,
  options: { module: string; level: "info" | "warn" | "error" } = { module: "General", level: "info" },
) {
  if (process.env.NODE_ENV === "development") {
    const logFunction =
      options.level === "warn" ? console.warn : options.level === "error" ? console.error : console.log
    logFunction(`[${options.module}] ${message}`, data)
  }
}

