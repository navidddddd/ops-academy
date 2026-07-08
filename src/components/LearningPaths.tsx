// src/components/LearningPaths.tsx
import Link from "next/link";

// Interface defining the structure of a learning path
interface PathStep {
  name: string;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  href: string;
  steps: PathStep[];
}

// Static data for our DevOps and Cloud roadmaps (Translated to Persian)
const roadmaps: LearningPath[] = [
  {
    id: "linux-foundation",
    title: "لینوکس و مدیریت سیستم",
    description:
      "تسلط بر سیستم‌عامل پایه. مهارتی کاملاً ضروری برای هر مهندس دواپس و پیش‌نیاز اصلی آزمون RHCSA.",
    href: "/courses#linux",
    steps: [
      { name: "دستورات پایه" },
      { name: "مدیریت کاربران" },
      { name: "شبکه و فایروال" },
      { name: "اسکریپت‌نویسی Bash" },
    ],
  },
  {
    id: "containerization",
    title: "کانتینرسازی (Docker)",
    description:
      "یادگیری پکیج کردن و اجرای برنامه‌ها در هر محیطی با استفاده از داکر (Docker) و پادمن (Podman).",
    href: "/courses#containers",
    steps: [
      { name: "مفاهیم پایه داکر" },
      { name: "ایمیج‌ها و والیوم‌ها" },
      { name: "داکر کمپوز (Compose)" },
      { name: "امنیت کانتینرها" },
    ],
  },
  {
    id: "orchestration",
    title: "کوبرنتیز و ارکستریشن",
    description:
      "مدیریت و مقیاس‌پذیری حرفه‌ای کانتینرها؛ قلب تپنده زیرساخت‌های مدرن ابری (Cloud Native).",
    href: "/courses#kubernetes",
    steps: [
      { name: "معماری K8s" },
      { name: "پادها و دیپلویمنت‌ها" },
      { name: "سرویس‌ها و Ingress" },
      { name: "هلم چارت (Helm)" },
    ],
  },
  {
    id: "sre-cicd",
    title: "تجربیات CI/CD و SRE",
    description:
      "اتوماسیون همه‌جانبه و تضمین پایداری سیستم. شامل زیرساخت به عنوان کد (IaC) و مانیتورینگ.",
    href: "/courses#sre",
    steps: [
      { name: "مفاهیم GitOps" },
      { name: "گیت‌هاب اکشنز / گیت‌لب CI" },
      { name: "ترافورم (Terraform)" },
      { name: "پرومتئوس و گرافانا" },
    ],
  },
];

export default function LearningPaths() {
  return (
    <section
      aria-labelledby="learning-paths-title"
      className="py-16 md:py-24 bg-slate-900 border-t border-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="learning-paths-title"
            className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight mb-4"
          >
            سفر شما در دنیای دواپس از اینجا آغاز می‌شود
          </h2>
          <p className="text-lg text-slate-400">
            با نقشه‌های راه ساختاریافته ما، از نقطه صفر به یک متخصص تاییدشده
            کلاد و دواپس تبدیل شوید.
          </p>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {roadmaps.map((path, index) => (
            <article
              key={path.id}
              className="relative flex flex-col bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group mt-4 md:mt-0"
            >
              {/* Step Number Badge (Adjusted for RTL context: -right-4) */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-slate-900 shadow-sm">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3 mt-2">
                {path.title}
              </h3>

              <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                {path.description}
              </p>

              {/* Steps List */}
              <ul className="space-y-2 mb-8">
                {path.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="flex items-center text-sm text-slate-300"
                  >
                    {/* Adjusted margin for RTL context: ml-2 */}
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {step.name}
                  </li>
                ))}
              </ul>

              {/* Action Link (Adjusted icon direction and hover animation for RTL) */}
              <Link
                href={path.href}
                className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto group-hover:-translate-x-1 duration-200 w-max"
              >
                شروع یادگیری
                {/* RTL Arrow (Pointing Left) */}
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
