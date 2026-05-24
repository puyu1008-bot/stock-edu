import { PrismaClient } from "@prisma/client"
import { getAllLessons } from "../src/lib/tracks"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 开始填充数据库...")

  // Seed all lessons from the track definitions
  const allLessons = getAllLessons()
  let created = 0

  for (const lesson of allLessons) {
    await prisma.lesson.upsert({
      where: { slug: lesson.slug },
      update: {
        title: lesson.title,
        trackId: lesson.trackId,
        stageId: lesson.stageId,
        moduleId: lesson.moduleId,
        order: lesson.order,
      },
      create: {
        id: lesson.slug,
        slug: lesson.slug,
        title: lesson.title,
        trackId: lesson.trackId,
        stageId: lesson.stageId,
        moduleId: lesson.moduleId,
        order: lesson.order,
      },
    })
    created++
  }

  console.log(`✅ 成功创建/更新 ${created} 节课程`)

  // Create a demo user (password: demo123456)
  const bcrypt = require("bcryptjs")
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Demo用户",
      passwordHash: await bcrypt.hash("demo123456", 12),
    },
  })
  console.log(`✅ Demo用户: demo@example.com / demo123456`)

  console.log("🌱 数据库填充完成！")
}

main()
  .catch((e) => {
    console.error("❌ 填充失败:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
