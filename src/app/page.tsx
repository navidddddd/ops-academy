import Link from "next/link";
import { getDynamicCoursesData } from "@/lib/mdx";
// Import dynamic stats hooks
import { getCourseStats, getTotalGlobalStats } from "@/lib/stats";

const FAQS = [
  {
    q: "آیا این دوره‌ها پیش‌نیاز خاصی دارند؟",
    a: "بستگی به دوره دارد. دوره RHCSA از صفرِ مطلق شروع می‌شود، اما برای دوره Docker پیشنهاد می‌شود آشنایی اولیه‌ای با لینوکس داشته باشید.",
  },
  {
    q: "آیا به سرور واقعی برای تمرین نیاز دارم؟",
    a: "خیر! تمام آموزش‌ها طوری طراحی شده‌اند که با نصب یک ماشین مجازی ساده (VirtualBox یا WSL) روی لپ‌تاپ خودتان قابل اجرا باشند.",
  },
  {
    q: "تفاوت این پلتفرم با ویدیوهای آموزشی چیست؟",
    a: "ما به جای ویدیوهای طولانی و خسته‌کننده، از «مستندات تعاملی» استفاده می‌کنیم. شما کدهای واقعی را می‌بینید، کپی می‌کنید و دقیقاً مثل داکیومنت‌های رسمی کمپانی‌ها یاد می‌گیرید.",
  },
];

export default function HomePage() {
  const courses = getDynamicCoursesData();

  // Calculate alive server-side totals dynamically
  const { totalViews, totalStudents } = getTotalGlobalStats();
  const sortedCourses = [...courses].sort(
    (a, b) => (a.order || 99) - (b.order || 99),
  );

  return (
    <div
      className="bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white overflow-x-hidden"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 text-center overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />

        <div className="relative max-w-3xl mx-auto z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100 mb-6">
            ✨ پلتفرم تخصصی آموزش عملی لینوکس و دواپس
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight md:leading-none text-slate-900 mb-6">
            متخصص حرفه‌ای{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700">
              لینوکس و زیرساخت
            </span>{" "}
            شوید
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            ما تئوری‌های خسته‌کننده را حذف کرده‌ایم. در اپس‌آکادمی، با مستندات
            استاندارد، کدهای رنگی و آزمایشگاه‌های سناریومحور، مدیریت سیستم را در
            سطح Production یاد می‌گیرید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#courses"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5"
            >
              شروع یادگیری »
            </a>
          </div>
        </div>
      </section>

      {/* Live Global Stats Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-slate-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {totalStudents.toLocaleString("fa-IR")}+
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              دانشجوی فعال
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {totalViews.toLocaleString("fa-IR")}+
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              بازدید کل اسناد
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              +۵۰ سناریو
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              آزمایشگاه عملیاتی
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">۱٪</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              تئوری محض / ۹۹٪ عمل
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Courses Section */}
      <section id="courses" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            مسیرهای آموزشی آکادمی
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            کامل‌ترین و به‌روزترین دوره‌های تخصصی زیرساخت. هر دوره شامل مستندات
            گام‌به‌گام و آزمایشگاه‌های سناریومحور است.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sortedCourses.map((course: any, index: number) => {
            // منطق Bento Grid: دوره‌هایی که ایندکس 0، 3، 6 و... دارند، دو ستونه می‌شوند!
            const isWide = index % 3 === 0;
            const courseLiveStats = getCourseStats(course.id);

            return (
              <div
                key={course.id}
                className={`group relative bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col ${isWide ? "lg:col-span-2 lg:flex-row lg:items-center gap-6 lg:gap-10" : "col-span-1 h-full justify-between"}`}
              >
                {/* تزئینات بک‌گراند (در کارت‌های بزرگ، هاله رنگی بزرگ‌تر است) */}
                <div
                  className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-transparent rounded-br-full -z-10 transition-transform duration-700 group-hover:scale-150 opacity-60 ${isWide ? "w-96 h-96 opacity-40" : ""}`}
                ></div>

                {/* بخش متن و اطلاعات */}
                <div className="flex-1 flex flex-col w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-blue-50/50 text-blue-600 border-blue-100/50 backdrop-blur-sm">
                        {course.badge}
                      </div>
                      {/* استایل شیک‌تر برای آمار واقعی با آیکون‌های SVG */}
                      <div className="text-[11px] font-bold text-slate-500 bg-slate-50/50 border border-slate-200/50 px-2.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          {courseLiveStats.views.toLocaleString("fa-IR")}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          {courseLiveStats.students.toLocaleString("fa-IR")}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-2xl shadow-sm bg-white border border-slate-100 group-hover:-translate-y-1 transition-transform">
                      {course.icon}
                    </div>
                  </div>

                  <h3
                    className={`font-black text-slate-900 mb-3 transition-colors group-hover:text-blue-600 ${isWide ? "text-3xl" : "text-xl"}`}
                  >
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 lg:mb-0">
                    {course.description}
                  </p>
                </div>

                {/* بخش دکمه ورود (در کارت بزرگ، توسط یک خط عمودی جدا می‌شود) */}
                <div
                  className={`${isWide ? "w-full lg:w-64 shrink-0 border-t lg:border-t-0 lg:border-r border-slate-100 pt-6 lg:pt-0 lg:pr-10 flex items-center justify-center" : "w-full mt-auto pt-6 border-t border-slate-100"}`}
                >
                  <Link
                    href={course.link}
                    className="w-full bg-white text-slate-700 group-hover:text-white border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    ورود به کلاس ←
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            سوالات متداول
          </h2>
          <p className="text-slate-500 font-medium">
            پاسخ به سوالاتی که قبل از شروع مسیر ممکن است برایتان پیش بیاید.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-blue-300 transition-colors shadow-sm"
            >
              <summary className="flex items-center justify-between font-bold text-slate-800 text-lg">
                {faq.q}
                <span className="transition group-open:rotate-180 text-blue-500">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-slate-500 mt-4 leading-relaxed text-sm font-medium border-t border-slate-100 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
