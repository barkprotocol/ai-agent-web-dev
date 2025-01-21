import type { Message as PrismaMessage } from "@prisma/client"
import type { Attachment, CoreAssistantMessage, CoreMessage, CoreToolMessage, Message, ToolInvocation } from "ai"

import { sendTelegramNotification } from "@/server/actions/telegram"

/**
 * Retrieves the most recent user message from an array of messages.
 * @param messages - Array of core messages to search through
 * @returns The last user message in the array, or undefined if none exists
 */
export function getMostRecentUserMessage(messages: CoreMessage[]): CoreMessage | undefined {
  return messages.findLast((message) => message.role === "user")
}

/**
 * Sanitizes response messages by removing incomplete tool calls and empty content.
 * @param messages - Array of tool or assistant messages to sanitize
 * @returns Array of sanitized messages with valid content only
 */
export function sanitizeResponseMessages(
  messages: (CoreToolMessage | CoreAssistantMessage)[],
): (CoreToolMessage | CoreAssistantMessage)[] {
  const toolResultIds = new Set<string>()

  // Collect all tool result IDs
  messages.forEach((message) => {
    if (message.role === "tool") {
      message.content.forEach((content) => {
        if (content.type === "tool-result") {
          toolResultIds.add(content.toolCallId)
        }
      })
    }
  })

  // Sanitize message content
  return messages
    .map((message) => {
      if (message.role !== "assistant" || typeof message.content === "string") {
        return message
      }

      const sanitizedContent = message.content.filter((content) =>
        content.type === "tool-call"
          ? toolResultIds.has(content.toolCallId)
          : content.type !== "text" || content.text.length > 0,
      )

      return { ...message, content: sanitizedContent }
    })
    .filter(
      (message) =>
        message.role === "tool" ||
        (Array.isArray(message.content) && message.content.length > 0) ||
        (typeof message.content === "string" && message.content.length > 0),
    )
}

/**
 * Adds tool message results to existing chat messages by updating their tool invocations.
 * @param params - Object containing toolMessage and messages
 * @returns Updated array of messages with tool results incorporated
 */
function addToolMessageToChat({
  toolMessage,
  messages,
}: {
  toolMessage: CoreToolMessage
  messages: Message[]
}): Message[] {
  return messages.map((message) => {
    if (!message.toolInvocations) return message

    const updatedToolInvocations = message.toolInvocations.map((toolInvocation) => {
      const toolResult = toolMessage.content.find(
        (tool) => "toolCallId" in tool && tool.toolCallId === toolInvocation.toolCallId,
      )

      if (toolResult && "result" in toolResult) {
        return {
          ...toolInvocation,
          state: "result" as const,
          result: toolResult.result,
        }
      }

      return toolInvocation
    })

    return { ...message, toolInvocations: updatedToolInvocations }
  })
}

/**
 * Converts Prisma database messages to UI-compatible message format.
 * @param messages - Array of Prisma messages to convert
 * @returns Array of UI-formatted messages with proper content structure
 */
export function convertToUIMessages(messages: PrismaMessage[]): Message[] {
  return messages.reduce<Message[]>((chatMessages, rawMessage) => {
    if (rawMessage.role === "tool") {
      return addToolMessageToChat({
        toolMessage: rawMessage as unknown as CoreToolMessage,
        messages: chatMessages,
      })
    }

    let textContent = ""
    const toolInvocations: ToolInvocation[] = []
    const attachments: Attachment[] = []

    const content = Array.isArray(rawMessage.content)
      ? rawMessage.content
      : typeof rawMessage.content === "object" && rawMessage.content && "content" in rawMessage.content
        ? rawMessage.content.content || []
        : [rawMessage.content]

    content.forEach((c) => {
      if (!c) return
      const item = c as any

      switch (item.type) {
        case "text":
          textContent += item.text
          break
        case "tool-call":
          toolInvocations.push({
            state: "call",
            toolCallId: item.toolCallId,
            toolName: item.toolName,
            args: item.args,
          })
          break
        case "image":
          attachments.push({
            url: item.image,
            name: "image.png",
            contentType: "image/png",
          })
          break
      }
    })

    chatMessages.push({
      id: rawMessage.id,
      role: rawMessage.role as Message["role"],
      content: textContent,
      toolInvocations,
      experimental_attachments: attachments,
    })

    return chatMessages
  }, [])
}

