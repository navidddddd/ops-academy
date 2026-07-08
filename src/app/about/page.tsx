// src/app/about/page.tsx
import { Metadata } from "next";

// Strict Technical SEO: Configuration for the About page metadata
export const metadata: Metadata = {
  title: "درباره ما | داستان شکل‌گیری اپس‌آکادمی (OpsAcademy)",
  description:
    "اپس‌آکادمی توسط مهندسان برای مهندسان ساخته شده است. ماموریت ما آموزش کاربردی و سناریومحور لینوکس، دواپس و زیرساخت‌های ابری در سطح Enterprise است.",
  alternates: {
    canonical: "https://ops-academy.ir/about",
  },
  openGraph: {
    title: "درباره اپس‌آکادمی | تخصص ابری در سطح Production",
    description:
      "تئوری‌های خسته‌کننده را فراموش کنید. داستان پلتفرمی که یادگیری زیرساخت را با مستندات تعاملی متحول کرد.",
    url: "https://ops-academy.ir/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main
      className="bg-slate-50 min-h-screen py-24 px-6 selection:bg-blue-600 selection:text-white"
      dir="rtl"
    >
      <article className="max-w-4xl mx-auto">
        {/* Hero Section of About Page */}
        <section className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60 mb-6 shadow-sm">
            👨‍💻 توسط مهندسان، برای مهندسان
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            درباره{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              اپس‌آکادمی
            </span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            ما اینجا هستیم تا فاصله بین تئوری‌های خسته‌کننده دانشگاهی و چالش‌های
            واقعی محیط‌های Production را از بین ببریم.
          </p>
        </section>

        {/* 
          Main Content Grid: Structured for readability and modern UI 
        */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-12">
          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-500">🎯</span> ماموریت ما
            </h2>
            <div className="prose prose-slate prose-blue max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium">
              <p>
                یادگیری لینوکس و ابزارهای دواپس (DevOps) نباید با تماشای
                منفعلانه ساعت‌ها ویدیوی آموزشی انجام شود. مهندسی زیرساخت با{" "}
                <strong>
                  تایپ کردن کامندها، خراب کردن سرورها و دیباگ کردن لاگ‌ها
                </strong>{" "}
                ساخته می‌شود. ماموریت اپس‌آکادمی، ارائه یک پلتفرم مبتنی بر
                مستندات تعاملی (Interactive Documentation) است که شما را
                مستقیماً درگیر حل سناریوهای واقعی می‌کند.
              </p>
            </div>
          </section>

          {/* Philosophy Section */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-500">💡</span> فلسفه آموزشی (Zero to
              Hero)
            </h2>
            <div className="prose prose-slate prose-blue max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium">
              <p>
                ما معتقدیم تخصص از پایه شروع می‌شود. دوره‌های ما (مانند RHCSA یا
                Docker) طوری معماری شده‌اند که شما را از مفاهیم پایه‌ای (Core
                Concepts) به سمت معماری کلاسترها و استقرارهای سازمانی
                (Enterprise Deployments) هدایت کنند. در اینجا خبری از «کپی-پیست»
                بدون درک منطق نیست؛ شما یاد می‌گیرید که <em>چرا</em> یک ابزار
                کار می‌کند.
              </p>
            </div>
          </section>

          {/* Core Values (Grid) */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-500">⚙️</span> ارزش‌های کلیدی پلتفرم
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">
                  ۱٪ تئوری، ۹۹٪ عمل
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  مستندات ما بر اساس چالش‌های روزمره یک SysAdmin و SRE طراحی
                  شده‌اند. سناریوها دقیقاً مشابه تسک‌های محیط کار واقعی هستند.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">
                  مستندات زنده و پویا (MDX)
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  با بهره‌گیری از تکنولوژی MDX، مقالات ما صرفاً متن نیستند.
                  آن‌ها کامپوننت‌های تعاملی، کدهای هایلایت شده و ساختاریافته
                  هستند.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">
                  استقلال سخت‌افزاری
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  برای یادگیری نیازی به سرورهای گران‌قیمت ندارید. تمام سناریوها
                  با حداقل منابع روی ماشین‌های مجازی شخصی قابل پیاده‌سازی هستند.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">
                  همیشه به‌روز
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  دنیای Cloud هر روز تغییر می‌کند. محتوای دوره‌های ما به صورت
                  مداوم با آخرین نسخه‌های رسمی (مثل RedHat 9) آپدیت می‌شود.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
