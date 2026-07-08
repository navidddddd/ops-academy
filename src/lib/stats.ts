// src/lib/stats.ts
import { PrismaClient } from "@prisma/client";

// پاس دادن مستقیم آدرس دیتابیس برای جلوگیری از خطای PrismaClientInitializationError
const prisma = new PrismaClient();

// ۱. افزایش تعداد بازدید یک دوره به صورت زنده در دیتابیس
export async function incrementCourseViews(courseId: string) {
  try {
    await prisma.courseStat.upsert({
      where: { courseId },
      update: { views: { increment: 1 } },
      create: { courseId, views: 1, students: 0 },
    });
  } catch (error) {
    console.error("Database tracking failed:", error);
  }
}

// ۲. دریافت آمارهای کلی صفحه اصلی (مجموع کل بازدیدها و کل دانشجوها)
export async function getTotalGlobalStats() {
  try {
    const stats = await prisma.courseStat.aggregate({
      _sum: {
        views: true,
        students: true,
      },
    });

    return {
      totalViews: stats._sum.views || 0,
      totalStudents: stats._sum.students || 0,
    };
  } catch (error) {
    console.error("Failed to load global stats:", error);
    return { totalViews: 0, totalStudents: 0 };
  }
}

// ۳. دریافت آمارهای اختصاصی برای کارت‌های Bento Grid در صفحه اصلی
export async function getCourseStats(courseId: string) {
  try {
    const stat = await prisma.courseStat.findUnique({
      where: { courseId },
    });

    return {
      views: stat?.views || 0,
      students: stat?.students || 0,
    };
  } catch (error) {
    console.error(`Failed to load stats for ${courseId}:`, error);
    return { views: 0, students: 0 };
  }
}
