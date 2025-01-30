import { checkEAPTransaction as checkEAPTransactionLib } from "@/lib/eap"

export async function checkEAPTransaction({ txHash }: { txHash: string }) {
  try {
    // In a real application, you would get the userId from the authenticated session
    const userId = "dummy-user-id"
    const result = await checkEAPTransactionLib({ txHash, userId })
    return { success: result.success, data: { message: result.message } }
  } catch (error) {
    console.error("Error in checkEAPTransaction action:", error)
    return { success: false, data: { message: "An error occurred while processing the request" } }
  }
}

