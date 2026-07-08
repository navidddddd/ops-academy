import { getCourseLessons, getDynamicCoursesData } from "@/lib/mdx";
import CourseSidebar from "./CourseSidebar";
import MobileSidebar from "@/components/MobileSidebar";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
};

export default async function CourseLayout({ children, params }: LayoutProps) {
  const { course } = await params;

  // ۱. واکشی درس‌ها
  const lessons = getCourseLessons(course);

  // ۲. واکشی اطلاعات دوره (برای خواندن نام فارسی از info.json)
  const allCourses = getDynamicCoursesData();
  const currentCourseInfo = allCourses.find((c: any) => c.id === course);
  // اگر به هر دلیلی نام فارسی پیدا نشد، به عنوان بک‌آپ همان اسم پوشه را نشان بده
  const courseTitle = currentCourseInfo?.title || course.toUpperCase();

  // 💡 محتوای سایدبار (برای دسکتاپ و موبایل)
  const sidebarContent = (
    <>
      <div className="mb-6 border-b border-slate-200 pb-4">
        {/* متن کوچک بالای نام دوره */}
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          دوره آموزشی
        </span>
        {/* نام اصلی و فارسی دوره که از info.json خوانده می‌شود */}
        <h2 className="text-lg md:text-xl font-extrabold text-slate-800 mt-2 leading-snug">
          {courseTitle}
        </h2>
      </div>

      <CourseSidebar course={course} lessons={lessons} />
    </>
  );

  return (
    <div
      className="flex flex-col lg:flex-row items-start flex-1 bg-white min-h-screen"
      dir="rtl"
    >
      {/* 📱 منوی همبرگری و کشویی برای سایز موبایل */}
      <MobileSidebar>{sidebarContent}</MobileSidebar>

      {/* 💻 سایدبار ثابت سمت راست برای دسکتاپ */}
      <aside className="hidden lg:block w-72 shrink-0 border-l border-slate-200 bg-slate-50/50 p-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* 📝 محتوای اصلی مقاله */}
      <main className="flex-1 w-full min-w-0 bg-white">{children}</main>
    </div>
  );
}
