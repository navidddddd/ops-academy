import Link from "next/link";
import { getDynamicCoursesData } from "@/lib/mdx";

export default function Footer() {
  const courses = getDynamicCoursesData();
  const currentYear = new Date().getFullYear();

  // مرتب‌سازی دوره‌ها بر اساس بیشترین بازدید (views) و انتخاب ۵ تای اول
  const popularCourses = [...courses]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  return (
    <footer
      className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-auto"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-max">
              <div className="h-10 w-10 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center font-black text-white shadow-md shadow-blue-500/20">
                Ops
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Ops Academy
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              پلتفرم تخصصی آموزش عملی لینوکس، کانتینرها و زیرساخت ابری. ما
              مهندسان را برای چالش‌های واقعی در محیط‌های Production آماده
              می‌کنیم.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* عنوان تغییر کرد به پربازدیدترین‌ها */}
            <h4 className="text-white font-extrabold text-lg tracking-wide">
              پربازدیدترین دوره‌ها
            </h4>
            <ul className="flex flex-col gap-3">
              {popularCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={course.link}
                    className="text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <span className="text-blue-500 text-xs">■</span>
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white font-extrabold text-lg tracking-wide">
              دسترسی سریع
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/#courses"
                  className="hover:text-white transition-colors"
                >
                  همه دوره‌ها
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  آزمایشگاه‌های عملی
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium flex-wrap">
            <span dir="ltr">© {currentYear}</span>
            <span className="text-slate-300 font-bold tracking-wider">
              Ops Academy.
            </span>
            <span>تمامی حقوق محفوظ است.</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500 text-xs font-medium">
            <Link href="#" className="hover:text-white transition-colors">
              قوانین و مقررات
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              حریم خصوصی
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
