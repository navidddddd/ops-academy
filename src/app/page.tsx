import Link from "next/link";
import { Metadata } from "next";
import { getDynamicCoursesData, Course } from "@/lib/mdx";
import { getCourseStats, getTotalGlobalStats } from "@/lib/stats";

import TechStack from "@/components/TechStack";
import Features from "@/components/Features";

// Strict Technical SEO: Configuration for static page metadata
export const metadata: Metadata = {
  title: "اپس‌آکادمی | مرجع تخصصی آموزش لینوکس، دواپس و زیرساخت",
  description:
    "سکوی پرتاب شما به دنیای DevOps. آموزش کاملاً عملی و سناریومحور لینوکس (RHCSA)، داکر، کوبرنتیز و CI/CD با مستندات تعاملی در سطح Enterprise.",
  alternates: {
    canonical: "https://ops-academy.ir",
  },
  openGraph: {
    title: "اپس‌آکادمی | مهندسی زیرساخت را در سطح Production بیاموزید",
    description:
      "با تئوری‌های خسته‌کننده خداحافظی کنید. تخصص‌های ابری را از طریق مستندات استاندارد و سناریوهای واقعی یاد بگیرید.",
    url: "https://ops-academy.ir",
    siteName: "OpsAcademy",
    locale: "fa_IR",
    type: "website",
  },
};

const FAQS = [
  {
    q: "آیا این دوره‌ها برای افراد کاملاً مبتدی مناسب است؟",
    a: "مسیرهای پایه‌ای مانند لینوکس (RHCSA) دقیقاً از نقطه صفر و با فرض عدم آشنایی قبلی طراحی شده‌اند. اما برای ورود به دوره‌های پیشرفته‌تری مثل Docker یا Kubernetes، داشتن درک اولیه از خط فرمان (CLI) لینوکس ضروری است.",
  },
  {
    q: "تفاوت اپس‌آکادمی با پلتفرم‌های ویدیویی در چیست؟",
    a: "ما به رویکرد «Learning by Doing» باور داریم. تماشای منفعلانه ویدیو، شما را مهندس نمی‌کند! در اینجا شما با مستندات تعاملی (دقیقاً مشابه داکیومنت‌های رسمی RedHat یا Google) سر و کار دارید، کدها را کپی می‌کنید و مستقیماً در ترمینال خود خروجی می‌گیرید.",
  },
  {
    q: "آیا برای انجام سناریوها به سرورهای گران‌قیمت نیاز دارم؟",
    a: "به هیچ‌وجه. معماری آموزش‌های ما به گونه‌ای است که تمامی سناریوها، از پیکربندی‌های پایه شبکه تا راه‌اندازی کلاسترها، با حداقل منابع روی لپ‌تاپ شخصی شما (با استفاده از WSL یا VirtualBox) قابل اجرا هستند.",
  },
];

export default async function HomePage() {
  const courses = getDynamicCoursesData();
  const { totalViews, totalStudents } = await getTotalGlobalStats();

  // 1. Fetch stats for all courses concurrently
  const coursesWithStats = await Promise.all(
    courses.map(async (course) => {
      const stats = await getCourseStats(course.id);
      return { ...course, stats };
    }),
  );

  // 2. Sort by views (descending) to find the most popular courses
  // 3. Slice the array to get only the top 10 items for the homepage
  const trendingCourses = coursesWithStats
    .sort((a, b) => (b.stats?.views || 0) - (a.stats?.views || 0))
    .slice(0, 10);

  // Technical SEO: Generating Structured Data (JSON-LD)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      ...trendingCourses.map((course) => ({
        "@type": "Course",
        "@id": `https://ops-academy.ir/learn/${course.id}`,
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "OpsAcademy",
          sameAs: "https://ops-academy.ir",
        },
      })),
    ],
  };

  return (
    <div
      className="bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white overflow-x-hidden"
      dir="rtl"
    >
      {/* JSON-LD Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 text-center overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />

        <div className="relative max-w-3xl mx-auto z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60 mb-6 shadow-sm">
            🚀 سکوی پرتاب شما به دنیای فناوری‌های ابری
          </span>
          <h1 className="text-4xl md:text-[3.5rem] font-black tracking-tight leading-tight md:leading-tight text-slate-900 mb-6">
            مهندسی زیرساخت را در{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700">
              سطح Enterprise
            </span>{" "}
            بیاموزید
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            با تئوری‌های خسته‌کننده خداحافظی کنید. در اپس‌آکادمی، از طریق
            مستندات تعاملی، کدهای استاندارد و سناریوهای مبتنی بر چالش‌های واقعی،
            تخصص‌هایی نظیر Linux، Containers و CI/CD را کاملاً عملیاتی مسلط
            شوید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/courses"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-1 hover:shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              مشاهده تمامی دوره‌ها
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Global Stats Section */}
      <section
        className="max-w-5xl mx-auto px-6 py-12 bg-slate-50"
        aria-label="Global Statistics"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {totalStudents?.toLocaleString("fa-IR") || "۰"}+
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              مهندسِ در حال یادگیری
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {totalViews?.toLocaleString("fa-IR") || "۰"}+
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              بار مطالعه مستندات
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              +۵۰ سناریو
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              سناریوی عملیاتی
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 mb-1">۱٪</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              تئوری / ۹۹٪ تمرین عملی
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      {/* 🌟 TRENDING COURSES SECTION (Top 10 Bento Grid) */}
      <section id="trending-courses" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              محبوب‌ترین مسیرهای آموزشی
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl">
              دوره‌هایی که بیشترین استقبال را در بین مهندسان زیرساخت داشته‌اند.
            </p>
          </div>
          <Link
            href="/courses"
            className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            مشاهده همه
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trendingCourses.map(
            (course: Course & { stats: any }, index: number) => {
              const isWide = index % 3 === 0;
              const courseLiveStats = course.stats;

              return (
                <article
                  key={course.id}
                  className={`group relative bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col ${
                    isWide
                      ? "lg:col-span-2 lg:flex-row lg:items-center gap-6 lg:gap-10"
                      : "col-span-1 h-full justify-between"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-transparent rounded-br-full -z-10 transition-transform duration-700 group-hover:scale-150 opacity-60 ${
                      isWide ? "w-96 h-96 opacity-40" : ""
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex-1 flex flex-col w-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-wrap items-center gap-2">
                        {course.status === "completed" ? (
                          <div className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-emerald-50 text-emerald-600 border-emerald-200/60 backdrop-blur-sm flex items-center gap-1">
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            آماده استفاده
                          </div>
                        ) : (
                          <div className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-amber-50 text-amber-600 border-amber-200/60 backdrop-blur-sm flex items-center gap-1">
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
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>
                            در حال توسعه...
                          </div>
                        )}

                        <div className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-blue-50/50 text-blue-700 border-blue-200/50 backdrop-blur-sm shadow-sm">
                          {course.badge}
                        </div>

                        <div className="text-[11px] font-bold text-slate-500 bg-slate-50/50 border border-slate-200/50 px-2.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                          <span
                            className="flex items-center gap-1"
                            title="تعداد بازدید"
                          >
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
                            {courseLiveStats?.views?.toLocaleString("fa-IR") ||
                              "۰"}
                          </span>
                          <span className="text-slate-300" aria-hidden="true">
                            |
                          </span>
                          <span
                            className="flex items-center gap-1"
                            title="تعداد دانشجویان"
                          >
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
                            {courseLiveStats?.students?.toLocaleString(
                              "fa-IR",
                            ) || "۰"}
                          </span>
                        </div>
                      </div>

                      <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-2xl shadow-sm bg-white border border-slate-100 group-hover:-translate-y-1 transition-transform">
                        {course.icon}
                      </div>
                    </div>

                    <h3
                      className={`font-black text-slate-900 mb-3 transition-colors group-hover:text-blue-700 ${isWide ? "text-3xl" : "text-xl"}`}
                    >
                      {course.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 lg:mb-0">
                      {course.description}
                    </p>
                  </div>

                  <div
                    className={`${isWide ? "w-full lg:w-64 shrink-0 border-t lg:border-t-0 lg:border-r border-slate-100 pt-6 lg:pt-0 lg:pr-10 flex items-center justify-center" : "w-full mt-auto pt-6 border-t border-slate-100"}`}
                  >
                    <Link
                      href={course.link}
                      className="w-full bg-white text-slate-700 group-hover:text-white border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:shadow-blue-600/20"
                    >
                      ورود به مستندات
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            },
          )}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-4 rounded-xl font-bold text-sm transition-colors"
          >
            مشاهده همه دوره‌ها
          </Link>
        </div>
      </section>

      <Features />

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            سوالات متداول
          </h2>
          <p className="text-slate-500 font-medium">
            پاسخ به سوالاتی که پیش از شروع مسیرِ تبدیل شدن به یک مهندس دواپس
            ممکن است داشته باشید.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-blue-300 transition-colors shadow-sm hover:shadow-md"
            >
              <summary className="flex items-center justify-between font-bold text-slate-800 text-lg">
                {faq.q}
                <span className="transition group-open:rotate-180 text-blue-600 bg-blue-50 rounded-full p-1">
                  <svg
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-slate-600 mt-4 leading-relaxed text-sm font-medium border-t border-slate-100 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
