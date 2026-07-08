import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

// Strictly define metadata for Technical SEO
export const metadata: Metadata = {
  title: "تماس با ما | OpsAcademy",
  description:
    "برای مشاوره، پشتیبانی دوره‌های لینوکس و دواپس، و یا همکاری با آکادمی Ops با ما در ارتباط باشید.",
  alternates: {
    canonical: "https://ops-academy.ir/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Page Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            تماس با <span className="text-blue-600">OpsAcademy</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            سوالی درباره مسیرهای آموزشی یا آزمایشگاه‌ها دارید؟ ما آماده پاسخگویی
            هستیم.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-slate-800 py-8 px-6 shadow-xl rounded-xl sm:px-10 border border-slate-100 dark:border-slate-700">
          <ContactForm />
        </div>

        {/* Direct Contact Info (Good for Local SEO / Trust Signals) */}
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>ایمیل پشتیبانی: support@ops-academy.ir</p>
        </div>
      </div>
    </main>
  );
}
