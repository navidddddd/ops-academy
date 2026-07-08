import { PrismaClient } from "@prisma/client";

// ============================================================================
// Prisma Client Singleton Pattern (Best Practice for Next.js)
// Prevents connection exhaustion during development hot-reloads
// ============================================================================
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// ============================================================================
// Reading Time Utility
// ============================================================================

/**
 * Calculates the estimated reading time for MDX content.
 * @param content The raw markdown/text string.
 * @returns Estimated reading time in minutes.
 */
export function calculateReadingTime(content: string): number {
  const WPM = 225;
  const cleanText = content.replace(/<\/?[^>]+(>|$)/g, "");
  const wordCount = cleanText.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / WPM);
  return readingTime > 0 ? readingTime : 1;
}

// ============================================================================
// Database Queries (Preserving your exact original names and logic)
// ============================================================================

// 1. Increment course views dynamically in the database
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

// 2. Get global stats for the Homepage (Total Views & Total Students)
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

// 3. Get specific stats for Bento Grid cards on the Homepage
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
