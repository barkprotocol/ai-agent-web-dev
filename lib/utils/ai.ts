export function getConfirmationResult(message: { content: string }): boolean | undefined {
  const content = message.content.toLowerCase().trim()
  if (content === "confirm" || content === "yes") {
    return true
  } else if (content === "deny" || content === "no") {
    return false
  }
  return undefined
}

export function getUnconfirmedConfirmationMessage(messages: any[]): any | undefined {
  return messages.find((m) => m.content.includes("Confirmation required:"))
}

export async function handleConfirmation({ current, unconfirmed }: { current: any; unconfirmed: any }) {
  if (!unconfirmed) {
    return { confirmationHandled: false, updates: [] }
  }

  const confirmationResult = getConfirmationResult(current)
  if (confirmationResult === undefined) {
    return { confirmationHandled: false, updates: [] }
  }

  // Here you would implement the logic to handle the confirmation
  // For now, we'll just return a simple object
  return {
    confirmationHandled: true,
    updates: [{ type: "confirmation", result: confirmationResult }],
  }
}

