export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public recoveryAction?: () => Promise<void>,
  ) {
    super(message)
    this.name = "AppError"
  }
}

export function handleError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error
  }

  if (error instanceof Error) {
    return new AppError(error.message, "UNKNOWN_ERROR")
  }

  return new AppError("An unknown error occurred", "UNKNOWN_ERROR")
}

