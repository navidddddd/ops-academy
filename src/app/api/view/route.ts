import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Prevent Next.js from aggressively caching this API route
export const dynamic = "force-dynamic";

// Initialize Prisma Client
// Note: In production, it's better to use a singleton Prisma instance to avoid connection limits
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { courseId } = body;

    // Validate request body
    if (!courseId) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 },
      );
    }

    // Upsert logic: Create the record if it doesn't exist, otherwise increment the views by 1
    const updatedStat = await prisma.courseStat.upsert({
      where: {
        courseId: courseId,
      },
      update: {
        views: { increment: 1 },
      },
      create: {
        courseId: courseId,
        views: 1,
        students: 0, // Default value for new courses
      },
    });

    return NextResponse.json(updatedStat, { status: 200 });
  } catch (error) {
    console.error("Failed to update course views:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  } finally {
    // Optional: Disconnect prisma if not using a singleton, though Next.js usually handles this
    await prisma.$disconnect();
  }
}
