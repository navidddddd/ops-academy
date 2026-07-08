// src/app/learn/[course]/page.tsx
import { redirect, notFound } from "next/navigation";
import { getCourseLessons } from "@/lib/mdx";

// In Next.js 15+, params is a Promise and must be awaited
interface CourseRedirectPageProps {
  params: Promise<{
    course: string;
  }>;
}

export default async function CourseRedirectPage({
  params,
}: CourseRedirectPageProps) {
  // 1. We MUST await params to extract the dynamic route values safely
  const { course } = await params;

  // 2. Fetch all lessons for the requested course
  const lessons = getCourseLessons(course);

  // 3. If the course doesn't exist or has zero lessons, trigger a 404 page
  if (!lessons || lessons.length === 0) {
    notFound();
  }

  // 4. Get the slug of the very first lesson (already sorted by getCourseLessons)
  const firstLessonSlug = lessons[0].slug;

  // 5. Perform a fast Server-Side Redirect to the actual first lesson
  redirect(`/learn/${course}/${firstLessonSlug}`);
}
