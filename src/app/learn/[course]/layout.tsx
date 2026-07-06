import { getCourseLessons } from "@/lib/mdx";
import CourseSidebar from "./CourseSidebar";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
};

export default async function CourseLayout({ children, params }: LayoutProps) {
  const { course } = await params;
  const lessons = getCourseLessons(course);

  return (
    <div className="flex items-start flex-1 bg-white" dir="rtl">
      {/* Right Sidebar - Fixed and sticky under the header */}
      <aside className="w-72 shrink-0 border-l border-slate-200 bg-slate-50/50 p-6 hidden lg:block sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
        <div className="mb-6 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Course
          </span>
          <h2 className="text-xl font-extrabold text-slate-800 mt-1">
            {course.toUpperCase()} Course
          </h2>
        </div>

        {/* 👈 استفاده از کامپوننت لینک‌ها که هایلایت هوشمند دارد */}
        <CourseSidebar course={course} lessons={lessons} />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white min-w-0">{children}</main>
    </div>
  );
}
