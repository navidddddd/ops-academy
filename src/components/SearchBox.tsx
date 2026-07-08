// src/components/SearchBox.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Type definitions for search items
export type SearchLesson = {
  course: string;
  slug: string;
  title: string;
};

/**
 * Custom hook to debounce fast typing.
 * This prevents excessive re-renders and filtering operations.
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // Cleanup timeout on every keystroke
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchBox({
  searchIndex,
}: {
  searchIndex: SearchLesson[];
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchLesson[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Ref to detect clicks outside the component
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Apply a 300ms delay to the search query
  const debouncedQuery = useDebounce(query, 300);

  // Filter logic triggered only when the debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        item.course.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );

    setResults(filtered);
    setIsOpen(true);
  }, [debouncedQuery, searchIndex]);

  // Handle outside clicks and "Escape" key press for better Accessibility (a11y)
  useEffect(() => {
    function handleInteraction(event: MouseEvent | KeyboardEvent) {
      // Close dropdown if clicked outside
      if (
        event.type === "mousedown" &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      // Close dropdown if "Escape" key is pressed
      if (
        event.type === "keydown" &&
        (event as KeyboardEvent).key === "Escape"
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-sm mr-6 hidden md:block"
      dir="rtl"
    >
      {/* Search Input with ARIA labels for Accessibility */}
      <div className="relative">
        <svg
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="جستجو در آموزش‌ها (مثلاً Docker)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-label="جستجو در مقالات و دوره‌ها"
          className="w-full bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200 rounded-xl pr-10 pl-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 shadow-sm"
        />
      </div>

      {/* Animated Dropdown Results */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="search-results"
            role="listbox"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-3 w-full bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-[100] flex flex-col max-h-80 overflow-y-auto"
          >
            {results.length > 0 ? (
              results.map((res) => (
                <Link
                  key={`${res.course}-${res.slug}`}
                  href={`/learn/${res.course}/${res.slug}`}
                  role="option"
                  aria-selected="false"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="group px-5 py-3 hover:bg-blue-50/80 border-b border-slate-100 last:border-0 transition-colors text-right block relative"
                >
                  <div className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {res.title}
                  </div>
                  <div className="text-[11px] font-extrabold text-slate-400 group-hover:text-blue-500 mt-1 uppercase tracking-wider transition-colors">
                    {res.course}
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-6 text-center text-sm font-bold text-slate-500 flex flex-col items-center gap-2">
                <span className="text-2xl" aria-hidden="true">
                  🧐
                </span>
                مقاله‌ای یافت نشد
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
