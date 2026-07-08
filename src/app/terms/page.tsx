// src/app/terms/page.tsx
import { Metadata } from "next";

// Strict Technical SEO: Configuration for legal page metadata
export const metadata: Metadata = {
  title: "قوانین و مقررات | اپس‌آکادمی (OpsAcademy)",
  description:
    "شرایط و قوانین استفاده از خدمات، دوره‌ها و مستندات آموزشی پلتفرم اپس‌آکادمی.",
  alternates: {
    canonical: "https://ops-academy.ir/terms",
  },
};

export default function TermsPage() {
  return (
    <main
      className="bg-slate-50 min-h-screen py-24 px-6 selection:bg-blue-600 selection:text-white"
      dir="rtl"
    >
      <article className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        {/* Page Header */}
        <header className="mb-10 pb-8 border-b border-slate-100">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            قوانین و مقررات استفاده
          </h1>
          <p className="text-slate-500 font-medium">
            آخرین به‌روزرسانی: <time dateTime="2026-07-08">تیر ۱۴۰۵</time>
          </p>
        </header>

        {/* 
          Main Content: Using Tailwind Typography (prose) for consistent document styling
        */}
        <div className="prose prose-slate prose-blue max-w-none prose-headings:font-extrabold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline">
          <h2>۱. پذیرش شرایط</h2>
          <p>
            ورود شما به وب‌سایت <strong>اپس‌آکادمی (OpsAcademy)</strong> و
            استفاده از مستندات، دوره‌ها و آزمایشگاه‌های آموزشی به معنای آگاهی
            کامل و پذیرش این قوانین است. اگر با هر یک از این شرایط موافق نیستید،
            لطفاً از پلتفرم استفاده نکنید.
          </p>

          <h2>۲. مالکیت فکری (Copyright)</h2>
          <p>
            تمامی حقوق مادی و معنوی محتوای موجود در این پلتفرم، از جمله متن دروس
            (MDX)، سناریوهای آزمایشگاهی، کدهای نمونه، گرافیک‌ها و لوگوی اختصاصی،
            متعلق به اپس‌آکادمی است.
          </p>
          <ul>
            <li>
              استفاده شخصی و آموزشی از محتوا برای یادگیری کاملاً آزاد است.
            </li>
            <li>
              کپی‌برداری، بازنشر، فروش یا استفاده تجاری از محتوای دوره‌ها بدون
              کسب اجازه کتبی، پیگرد قانونی خواهد داشت.
            </li>
          </ul>

          <h2>۳. استفاده مجاز و محدودیت‌ها</h2>
          <p>
            کاربران موظفند از پلتفرم در چارچوب قوانین سایبری استفاده کنند.
            هرگونه تلاش برای موارد زیر اکیداً ممنوع است:
          </p>
          <ul>
            <li>
              استفاده از ربات‌های خزنده (Scrapers) برای استخراج انبوه داده‌ها و
              محتوای دروس.
            </li>
            <li>
              تلاش برای نفوذ، تست نفوذ غیرمجاز یا ایجاد اختلال (DDoS) در
              زیرساخت‌های سرور.
            </li>
            <li>
              استفاده از سناریوهای آموزشی برای انجام حملات سایبری در محیط‌های
              واقعی (Production).
            </li>
          </ul>

          <h2>۴. سلب مسئولیت (Disclaimer)</h2>
          <p>
            سناریوها و کدهای ارائه شده در اپس‌آکادمی جنبه آموزشی دارند. اگرچه ما
            تمام تلاش خود را برای ارائه کدهای استاندارد و Best Practice به کار
            می‌گیریم، اما{" "}
            <strong>
              مسئولیت اجرای کدها در محیط‌های عملیاتی (Production) سازمانِ شما،
              تماماً بر عهده خودتان است
            </strong>
            . اپس‌آکادمی هیچ‌گونه مسئولیتی در قبال قطعی، از دست رفتن داده‌ها یا
            خسارات وارده به زیرساخت‌های شما نمی‌پذیرد. همیشه کدها را ابتدا در
            محیط تستی (Staging) بررسی کنید.
          </p>

          <h2>۵. دسترس‌پذیری سرویس (Uptime)</h2>
          <p>
            تیم فنی اپس‌آکادمی (با بهره‌گیری از زیرساخت‌های ابری Edge) در تلاش
            است تا پلتفرم را به صورت ۲۴ ساعته در دسترس نگه دارد. با این حال،
            ممکن است برای انجام به‌روزرسانی‌های فنی، دسترسی به سایت برای مدت
            کوتاهی با اختلال مواجه شود که پیشاپیش از صبر و شکیبایی شما
            سپاسگزاریم.
          </p>
        </div>
      </article>
    </main>
  );
}
