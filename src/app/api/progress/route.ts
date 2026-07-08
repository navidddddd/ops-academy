// src/app/api/progress/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// پاس دادن مستقیم آدرس دیتابیس برای جلوگیری از خطای PrismaClientInitializationError
const prisma = new PrismaClient();

const MOCK_USER_ID = "anonymous_user_1";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("courseId");

    if (!courseId) return NextResponse.json([]); // اگر آیدی نبود، آرایه خالی بده

    const progress = await prisma.userProgress.findMany({
      where: { userId: MOCK_USER_ID, courseId },
    });

    return NextResponse.json(progress.map((p) => p.slug));
  } catch (error) {
    console.error("GET Progress Error:", error);
    return NextResponse.json([]); // 👈 در صورت خطای دیتابیس، جای HTML آرایه خالی برمی‌گرداند تا فرانت‌اند کِرَش نکند
  }
}

export async function POST(request: Request) {
  try {
    const { courseId, slug, completed } = await request.json();

    if (completed) {
      await prisma.userProgress.upsert({
        where: {
          userId_courseId_slug: { userId: MOCK_USER_ID, courseId, slug },
        },
        update: {},
        create: { userId: MOCK_USER_ID, courseId, slug },
      });
    } else {
      await prisma.userProgress.deleteMany({
        where: { userId: MOCK_USER_ID, courseId, slug },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST Progress Error:", error);
    return NextResponse.json(
      { success: false, error: "DB Error" },
      { status: 500 },
    );
  }
}
