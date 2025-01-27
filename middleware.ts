import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add your middleware logic here
  // For example, you can check for authentication, add headers, etc.

  // This is a simple example that adds a custom header
  const response = NextResponse.next()
  response.headers.set("x-bark-custom-header", "hello from BARK Protocol")
  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
}

