import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        wallets: true,
        conversations: true,
        Rule: true,
        Action: true,
        tokenStats: true,
        TelegramChat: true,
        SavedPrompts: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error("Error in GET /api/user:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { privyId } = await request.json()

    if (!privyId) {
      return NextResponse.json({ error: "Privy ID is required" }, { status: 400 })
    }

    const user = await prisma.user.create({
      data: {
        privyId,
      },
    })

    return NextResponse.json(user)
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

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(user)
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

  try {
    await prisma.user.delete({
      where: { id: userId },
    })

    return NextResponse.json({ message: "User deleted successfully" })
  } catch (error) {
    console.error("Error in DELETE /api/user:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

