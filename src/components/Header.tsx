import Link from "next/link";
import { getAllSearchableLessons } from "@/lib/mdx";
import SearchBox from "./SearchBox";
import MobileNav from "./MobileNav"; // 👈 ایمپورت کامپوننت جدید

export default function Header() {
  const searchIndex = getAllSearchableLessons();

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white w-6 h-6"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="font-black text-xl tracking-tight text-slate-900 leading-none">
                Ops<span className="text-blue-600">Academy</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                Mastering Cloud & DevOps
              </span>
            </div>
          </Link>

          <SearchBox searchIndex={searchIndex} />
        </div>

        <div className="flex items-center justify-end gap-6">
          {/* نویگیشن دسکتاپ */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              صفحه اصلی
            </Link>
            <Link
              href="/#courses"
              className="hover:text-slate-900 transition-colors"
            >
              دوره‌ها
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              آزمایشگاه‌ها
            </Link>
          </nav>

          {/* 👈 نویگیشن موبایل */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
