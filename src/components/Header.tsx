import Link from "next/link";
import { getAllSearchableLessons } from "@/lib/mdx";
import SearchBox from "./SearchBox";

export default function Header() {
  const searchIndex = getAllSearchableLessons();

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center font-black text-white shadow-md shadow-blue-500/20">
              Ops
            </div>
            <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 hidden sm:block">
              Ops Academy
            </span>
          </Link>

          <SearchBox searchIndex={searchIndex} />
        </div>

        <div className="flex items-center justify-end gap-6">
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
        </div>
      </div>
    </header>
  );
}
