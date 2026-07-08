import { Metadata } from "next";
import { getDynamicCoursesData } from "@/lib/mdx";
import { getCourseStats } from "@/lib/stats";
import CourseList from "@/components/CourseList"; // Our new Client Component

export const metadata: Metadata = {
  title: "مسیرهای آموزشی و دوره‌ها | OpsAcademy",
  description:
    "مشاهده تمامی دوره‌های تخصصی و مسیرهای آموزشی لینوکس (RHCSA)، داکر، کوبرنتیز و CI/CD در سطح Enterprise.",
  alternates: {
    canonical: "https://ops-academy.ir/courses",
  },
};

// Ensure real-time stats update by disabling static caching for this page
export const revalidate = 0;

export default async function CoursesPage() {
  // 1. Fetch all course data statically
  const courses = getDynamicCoursesData();

  // 2. Sort courses based on their pre-defined order
  const sortedCourses = [...courses].sort(
    (a, b) => (a.order || 99) - (b.order || 99),
  );

  // 3. Concurrently fetch dynamic database stats for each course
  const coursesWithStats = await Promise.all(
    sortedCourses.map(async (course) => {
      const stats = await getCourseStats(course.id);
      return { ...course, stats };
    }),
  );

  return (
    <div
      className="bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white min-h-screen"
      dir="rtl"
    >
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Page Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            مسیرهای آموزشی؛ طراحی شده برای بازار کار
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            از مدیریت سیستم‌عامل تا معماری میکروسرویس‌ها. هر دوره به گونه‌ای
            تدوین شده است که شما را برای چالش‌های واقعی محیط‌های Production
            آماده کند.
          </p>
        </div>

        {/* We pass the heavily-fetched server data down to our 
            Client Component to handle the 'Load More' interactivity 
        */}
        <CourseList initialCourses={coursesWithStats} />
      </main>
    </div>
  );
}
