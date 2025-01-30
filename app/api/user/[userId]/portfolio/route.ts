import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { fetchUserPortfolio } from "@/lib/dashboard-utils"

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  const userId = params.userId
  const useApi = request.nextUrl.searchParams.get("useApi") === "true"

  try {
    const portfolio = await fetchUserPortfolio(userId, useApi)
    return NextResponse.json({ portfolio })
  } catch (error) {
    console.error("Error fetching user portfolio:", error)
    return NextResponse.json({ error: "Failed to fetch user portfolio" }, { status: 500 })
  }
}

