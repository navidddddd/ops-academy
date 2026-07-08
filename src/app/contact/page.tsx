// src/app/contact/page.tsx
import { Metadata } from "next";

// Strict Technical SEO: Configuration for the Contact page
export const metadata: Metadata = {
  title: "تماس با ما | پشتیبانی و ارتباط با اپس‌آکادمی (OpsAcademy)",
  description:
    "برای مشاوره دوره‌ها، پشتیبانی فنی سناریوها یا همکاری تجاری با تیم مهندسی اپس‌آکادمی در ارتباط باشید.",
  alternates: {
    canonical: "https://ops-academy.ir/contact",
  },
};

export default function ContactPage() {
  return (
    <main
      className="bg-slate-50 min-h-screen py-24 px-6 selection:bg-blue-600 selection:text-white"
      dir="rtl"
    >
      <article className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60 mb-6 shadow-sm">
            💬 ارتباط با تیم فنی
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            تماس با{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              اپس‌آکادمی
            </span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            آیا در مورد مسیرهای آموزشی سوالی دارید؟ یا شاید در اجرای یک سناریوی
            لینوکسی به مشکل خورده‌اید؟ ما اینجا هستیم تا کمک کنیم.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Information Cards (Left/Right side depending on RTL) - 2 Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct Email Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-blue-300 transition-colors group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                ایمیل پشتیبانی
              </h3>
              <p className="text-slate-500 font-medium text-sm mb-4">
                برای سوالات تخصصی و سازمانی
              </p>
              <a
                href="mailto:support@ops-academy.ir"
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors inline-flex items-center gap-1 dir-ltr"
              >
                support@ops-academy.ir
              </a>
            </div>

            {/* Telegram/Community Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-blue-300 transition-colors group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                جامعه تلگرامی
              </h3>
              <p className="text-slate-500 font-medium text-sm mb-4">
                ارتباط سریع با مدرسین و دانشجویان
              </p>
              <a
                href="https://t.me/ops_academy_support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors inline-flex items-center gap-1 dir-ltr"
              >
                @ops_academy_support
              </a>
            </div>
          </div>

          {/* Contact Form - 3 Columns */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 opacity-50 pointer-events-none"></div>

            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
              ارسال پیام مستقیم
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-slate-700"
                  >
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="مثال: علی رضایی"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  />
                </div>
                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-slate-700"
                  >
                    ایمیل معتبر
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400 dir-ltr text-left"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-slate-700"
                >
                  موضوع پیام
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="مثال: مشکل در اجرای سناریوی داکر"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-slate-700"
                >
                  متن پیام
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="لطفاً پیام خود را با جزئیات بنویسید..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 mt-4"
              >
                ارسال پیام
                <svg
                  className="w-4 h-4 rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
}
