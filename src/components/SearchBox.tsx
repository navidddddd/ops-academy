"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type SearchLesson = { course: string; slug: string; title: string };

export default function SearchBox({
  searchIndex,
}: {
  searchIndex: SearchLesson[];
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchLesson[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Search logic: filters lessons based on user typing
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.course.toLowerCase().includes(query.toLowerCase()),
    );
    setResults(filtered);
    setIsOpen(true);
  }, [query, searchIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-sm mr-6 hidden md:block"
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="جستجو در آموزش‌ها (مثلا Docker)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
        dir="rtl"
      />

      {/* Dropdown Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-3 w-full bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-[100] flex flex-col max-h-80 overflow-y-auto">
          {results.map((res) => (
            <Link
              key={`${res.course}-${res.slug}`}
              href={`/learn/${res.course}/${res.slug}`}
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
              className="px-5 py-3 hover:bg-blue-50 border-b border-slate-100 last:border-0 transition-colors text-right block"
            >
              <div className="text-sm font-bold text-slate-800">
                {res.title}
              </div>
              <div className="text-xs font-bold text-blue-600 mt-1 uppercase tracking-wider">
                {res.course}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {isOpen && results.length === 0 && (
        <div className="absolute top-full mt-3 w-full bg-white border border-slate-200 rounded-2xl shadow-xl z-[100] p-6 text-center text-sm font-bold text-slate-500">
          مقاله‌ای یافت نشد 🧐
        </div>
      )}
    </div>
  );
}
