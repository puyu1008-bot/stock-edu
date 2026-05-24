export const dynamic = 'force-dynamic'

import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 })
  }

  const bookmarks = await db.bookmark.findMany({
    where: { userId: (session.user as any).id },
    include: { lesson: true },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json(bookmarks)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 })
  }

  const { lessonId } = await req.json()

  const existing = await db.bookmark.findUnique({
    where: {
      userId_lessonId: {
        userId: (session.user as any).id,
        lessonId,
      },
    },
  })

  if (existing) {
    await db.bookmark.delete({ where: { id: existing.id } })
    return NextResponse.json({ bookmarked: false })
  }

  const bookmark = await db.bookmark.create({
    data: {
      userId: (session.user as any).id,
      lessonId,
    },
  })

  return NextResponse.json({ bookmarked: true, bookmark })
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const lessonId = searchParams.get("lessonId")

  if (!lessonId) {
    return NextResponse.json({ error: "缺少课程ID" }, { status: 400 })
  }

  await db.bookmark.deleteMany({
    where: {
      userId: (session.user as any).id,
      lessonId,
    },
  })

  return NextResponse.json({ deleted: true })
}
