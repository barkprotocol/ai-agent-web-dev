import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ToolActionResult } from "@/types/util"

interface ConfirmDenyProps {
  message: string
}

function ConfirmDenyDialog({ message }: ConfirmDenyProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Confirmation Required</h2>
      <p className="mb-6">{message}</p>
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => window.postMessage({ type: "CONFIRM_DENY", confirmed: false }, "*")}>
          Deny
        </Button>
        <Button onClick={() => window.postMessage({ type: "CONFIRM_DENY", confirmed: true }, "*")}>Confirm</Button>
      </div>
    </Card>
  )
}

export const utilTools = {
  askForConfirmation: {
    displayName: "⚠️ Confirmation",
    description: "Confirm the execution of a function on behalf of the user.",
    parameters: z.object({
      message: z.string().describe("The message to ask for confirmation"),
    }),
    execute: async ({ message }: { message: string }): Promise<ToolActionResult> => {
      return new Promise((resolve) => {
        const handleMessage = (event: MessageEvent) => {
          if (event.data.type === "CONFIRM_DENY") {
            window.removeEventListener("message", handleMessage)
            resolve({
              success: true,
              data: { confirmed: event.data.confirmed },
            })
          }
        }

        window.addEventListener("message", handleMessage)
      })
    },
    render: (result: unknown) => {
      const typedResult = result as { message: string }
      return <ConfirmDenyDialog message={typedResult.message} />
    },
  },
}

