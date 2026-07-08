"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* دکمه همبرگری هدر */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-600 p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
      >
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
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* لیست کشویی لینک‌ها در موبایل */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-6 shadow-xl z-50 animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-bold text-slate-700 text-lg"
          >
            صفحه اصلی
          </Link>
          <Link
            href="/#courses"
            onClick={() => setIsOpen(false)}
            className="font-bold text-slate-700 text-lg"
          >
            دوره‌ها
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="font-bold text-slate-700 text-lg"
          >
            آزمایشگاه‌ها
          </Link>
        </div>
      )}
    </div>
  );
}
