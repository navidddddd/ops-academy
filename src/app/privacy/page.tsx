// src/app/privacy/page.tsx
import { Metadata } from "next";

// Strict Technical SEO: Configuration for legal page metadata
export const metadata: Metadata = {
  title: "حریم خصوصی | اپس‌آکادمی (OpsAcademy)",
  description:
    "سیاست‌های حفظ حریم خصوصی کاربران و نحوه مدیریت داده‌ها در پلتفرم آموزشی تخصصی اپس‌آکادمی.",
  alternates: {
    canonical: "https://ops-academy.ir/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main
      className="bg-slate-50 min-h-screen py-24 px-6 selection:bg-blue-600 selection:text-white"
      dir="rtl"
    >
      <article className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        {/* Page Header */}
        <header className="mb-10 pb-8 border-b border-slate-100">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            سیاست حفظ حریم خصوصی
          </h1>
          <p className="text-slate-500 font-medium">
            آخرین به‌روزرسانی: <time dateTime="2026-07-08">تیر ۱۴۰۵</time>
          </p>
        </header>

        {/* 
          Main Content: Using Tailwind Typography (prose) for consistent document styling
        */}
        <div className="prose prose-slate prose-blue max-w-none prose-headings:font-extrabold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline">
          <h2>۱. رویکرد ما به حریم خصوصی</h2>
          <p>
            در <strong>اپس‌آکادمی (OpsAcademy)</strong>، حریم خصوصی شما بالاترین
            اولویت ماست. به عنوان یک پلتفرم تخصصی آموزش زیرساخت و دواپس، ما به
            اصل «حداقل جمع‌آوری داده» (Data Minimization) کاملاً پایبند هستیم و
            معتقدیم اطلاعات شما متعلق به خودتان است.
          </p>

          <h2>۲. داده‌هایی که جمع‌آوری می‌کنیم</h2>
          <ul>
            <li>
              <strong>داده‌های پیشرفت آموزشی:</strong> در حال حاضر، وضعیت تکمیل
              دروس شما در دوره‌ها صرفاً از طریق یک شناسه ناشناس (UUID) در مرورگر
              شما ذخیره می‌شود تا تجربه کاربری یکپارچه‌ای داشته باشید.
            </li>
            <li>
              <strong>داده‌های تحلیلی (Analytics):</strong> ما از ابزارهای
              استاندارد و بدون کوکیِ شخص ثالث برای بررسی ترافیک کلی سایت استفاده
              می‌کنیم که هیچ‌گونه اطلاعات هویتی و شخصی (PII) را ردیابی و ذخیره
              نمی‌کند.
            </li>
          </ul>

          <h2>۳. استفاده از کوکی‌ها (Cookies)</h2>
          <p>
            ما تنها از کوکی‌های کاملاً ضروری (Essential Cookies) و Local Storage
            برای ذخیره وضعیت‌های رابط کاربری و پیگیری پیشرفت دوره‌های شما
            استفاده می‌کنیم. ما <strong>هیچ‌گونه</strong> کوکی تبلیغاتی یا ردیاب
            شخص ثالث (Third-party Trackers) روی سیستم شما قرار نمی‌دهیم.
          </p>

          <h2>۴. امنیت زیرساخت و داده‌ها</h2>
          <p>
            تمامی ارتباطات شما با سرورهای اپس‌آکادمی از طریق پروتکل امن{" "}
            <strong>HTTPS / SSL</strong> رمزنگاری شده است. دیتابیس‌های ما روی
            زیرساخت‌های ابری فوق‌ایمن (Enterprise Cloud) قرار دارند و دسترسی به
            آن‌ها کاملاً محدود و مانیتور شده است.
          </p>

          <h2>۵. تغییرات در سیاست‌ها</h2>
          <p>
            با توسعه پلتفرم و اضافه شدن ویژگی‌های جدید (مانند سیستم ثبت‌نام و
            داشبورد کاربری)، این صفحه ممکن است به‌روزرسانی شود. در صورت اعمال
            تغییرات اساسی، تاریخ به‌روزرسانی در بالای همین صفحه تغییر خواهد کرد.
            ادامه استفاده شما از پلتفرم به منزله مطالعه و پذیرش این سیاست‌هاست.
          </p>
        </div>
      </article>
    </main>
  );
}
