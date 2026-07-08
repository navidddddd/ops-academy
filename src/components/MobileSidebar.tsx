"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // بسته شدن خودکار منو وقتی کاربر روی یک درس کلیک می‌کند
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // جلوگیری از اسکرول شدن صفحه اصلی وقتی منو باز است
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <>
      {/* 👈 این بخش تغییر کرد: تبدیل به یک دکمه‌ی شیک به جای هدر تکراری */}
      <div className="lg:hidden w-full bg-white/95 backdrop-blur px-4 py-3 sticky top-[73px] z-40 border-b border-slate-100">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 transition-colors shadow-sm active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            {/* آیکون لیست (به جای همبرگری) */}
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <span className="text-sm font-extrabold text-slate-700">
              فهرست سرفصل‌های دوره
            </span>
          </div>

          {/* فلش بازشونده */}
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* پس‌زمینه تاریک و تار (Overlay) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* منوی کشویی که از راست وارد می‌شود */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[110] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
          <span className="font-black text-lg text-slate-900">سرفصل‌ها</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-full transition-colors"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* رندر کردن سایدبار اصلی */}
        <div className="p-4" dir="rtl">
          {children}
        </div>
      </div>
    </>
  );
}
