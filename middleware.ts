import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { PrivyClient } from "@privy-io/server-auth"

const privyClient = new PrivyClient(process.env.PRIVY_APP_ID!, process.env.PRIVY_APP_SECRET!)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("privy-token")?.value

  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      await privyClient.verifyAuthToken(token)
    } catch (error) {
      console.error("Failed to verify Privy token:", error)
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}

