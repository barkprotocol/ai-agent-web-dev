import { type NextRequest, NextResponse } from "next/server"
import { PrivyClient, Error as PrivyError } from "@privy-io/react-auth"

const privy = new PrivyClient({
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
})

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get("token")

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 })
  }

  try {
    await privy.verifyEmail(token)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL as string}/dashboard`)
  } catch (error) {
    console.error("Error verifying email:", error)
    if (error instanceof PrivyError) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to verify email" }, { status: 500 })
  }
}

