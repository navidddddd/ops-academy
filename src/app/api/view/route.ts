// src/app/api/view/route.ts
import { NextRequest, NextResponse } from "next/server";
import { incrementCourseViews } from "@/lib/stats";

export async function POST(req: NextRequest) {
  try {
    const { courseId } = await req.json();

    if (courseId) {
      // Trigger database increment securely on the node server
      await incrementCourseViews(courseId);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Invalid course identifier" },
      { status: 400 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal analytics failure" },
      { status: 500 },
    );
  }
}
