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
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0 w-max"
            >
              {/* 👈 دقیقاً همان SVG هدر قرار داده شد */}
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white w-6 h-6"
                >
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>

              {/* استایل متن هم دقیقاً شبیه هدر شد */}
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white leading-none">
                  Ops<span className="text-blue-500">Academy</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                  Mastering Cloud & DevOps
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              پلتفرم تخصصی آموزش عملی لینوکس، کانتینرها و زیرساخت ابری. ما
              مهندسان را برای چالش‌های واقعی در محیط‌های Production آماده
              می‌کنیم.
            </p>
          </div>

          <div className="flex flex-col gap-6">
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
