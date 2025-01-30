import { NextResponse } from "next/server"
import fetch from "node-fetch"
import { getUserData } from "@/server/actions/user"

const DISCORD_API_BASE_URL = "https://discordapp.com/api"
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
const GUILD_ID = process.env.DISCORD_GUILD_ID
const ROLE_ID = process.env.DISCORD_ROLE_ID

export async function POST(req: Request) {
  if (!BOT_TOKEN || !GUILD_ID || !ROLE_ID) {
    console.error("Discord environment variables not set")
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
  }

  try {
    const userData = await getUserData()
    const hasEarlyAccess = userData?.data?.data?.earlyAccess

    if (!hasEarlyAccess) {
      return NextResponse.json({ error: "User does not have early access" }, { status: 403 })
    }

    const { userId } = (await req.json()) as { userId: string }

    if (!userId || typeof userId !== "string" || !/^\d+$/.test(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 })
    }

    const url = `${DISCORD_API_BASE_URL}/guilds/${GUILD_ID}/members/${userId}/roles/${ROLE_ID}`

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bot ${BOT_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Discord API responded with status ${response.status}`)
    }

    return NextResponse.json({ message: "Role granted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to grant role:", error)
    return NextResponse.json({ error: "Failed to grant role" }, { status: 500 })
  }
}

