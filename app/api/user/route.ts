import { NextResponse } from "next/server"

// Mock database
const users: { [key: string]: any } = {}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 })
  }

  const user = users[userId]

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  return NextResponse.json(user)
}

export async function POST(request: Request) {
  try {
    const { privyId } = await request.json()

    if (!privyId) {
      return NextResponse.json({ error: "Privy ID is required" }, { status: 400 })
    }

    const newUser = {
      id: privyId,
      privyId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      earlyAccess: false,
      degenMode: false,
    }

    users[privyId] = newUser

    return NextResponse.json(newUser)
  } catch (error) {
    console.error("Error in POST /api/user:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updateData } = await request.json()

    if (!id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    if (!users[id]) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    users[id] = {
      ...users[id],
      ...updateData,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(users[id])
  } catch (error) {
    console.error("Error in PUT /api/user:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 })
  }

  if (!users[userId]) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  delete users[userId]

  return NextResponse.json({ message: "User deleted successfully" })
}

