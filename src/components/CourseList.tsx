"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Course } from "@/lib/mdx";

// Define the interface for the props we expect
interface CourseListProps {
  initialCourses: (Course & { stats: any })[];
}

export default function CourseList({ initialCourses }: CourseListProps) {
  // Start by showing 4 courses. You can change this number.
  const COURSES_PER_PAGE = 4;
  const [visibleCount, setVisibleCount] = useState(COURSES_PER_PAGE);

  // Derive the currently visible courses based on the state
  const visibleCourses = initialCourses.slice(0, visibleCount);
  const hasMore = visibleCount < initialCourses.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + COURSES_PER_PAGE);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Render Visible Courses (ALL FULL-WIDTH) */}
      <div className="flex flex-col gap-8">
        {visibleCourses.map((course) => {
          const courseLiveStats = course.stats;

          return (
            <article
              key={course.id}
              className="group relative bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 w-full"
            >
              {/* Background Glow Effect */}
              <div
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-br-full -z-10 transition-transform duration-700 group-hover:scale-150 opacity-40"
                aria-hidden="true"
              />

              <div className="flex-1 flex flex-col w-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Dynamic Status Badge */}
                    {course.status === "completed" ? (
                      <div className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-emerald-50 text-emerald-600 border-emerald-200/60 backdrop-blur-sm flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        آماده استفاده
                      </div>
                    ) : (
                      <div className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-amber-50 text-amber-600 border-amber-200/60 backdrop-blur-sm flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        در حال توسعه...
                      </div>
                    )}

                    {/* Marketing Badge */}
                    <div className="text-[11px] font-bold px-3 py-1.5 rounded-full border bg-blue-50/50 text-blue-700 border-blue-200/50 backdrop-blur-sm shadow-sm">
                      {course.badge}
                    </div>

                    {/* Stats Badges */}
                    <div className="text-[11px] font-bold text-slate-500 bg-slate-50/50 border border-slate-200/50 px-2.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                      <span
                        className="flex items-center gap-1"
                        title="تعداد بازدید"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {courseLiveStats?.views?.toLocaleString("fa-IR") || "۰"}
                      </span>
                      <span className="text-slate-300" aria-hidden="true">
                        |
                      </span>
                      <span
                        className="flex items-center gap-1"
                        title="تعداد دانشجویان"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        {courseLiveStats?.students?.toLocaleString("fa-IR") ||
                          "۰"}
                      </span>
                    </div>
                  </div>

                  <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-2xl shadow-sm bg-white border border-slate-100 group-hover:-translate-y-1 transition-transform">
                    {course.icon}
                  </div>
                </div>

                <h3 className="font-black text-slate-900 mb-3 transition-colors group-hover:text-blue-700 text-2xl md:text-3xl">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 lg:mb-0">
                  {course.description}
                </p>
              </div>

              {/* Action Button Segment */}
              <div className="w-full lg:w-64 shrink-0 border-t lg:border-t-0 lg:border-r border-slate-100 pt-6 lg:pt-0 lg:pr-10 flex items-center justify-center">
                <Link
                  href={course.link}
                  className="w-full bg-white text-slate-700 group-hover:text-white border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:shadow-blue-600/20"
                >
                  ورود به مستندات
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* 2. Load More Button */}
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-xl transition-colors duration-200 flex items-center gap-2"
          >
            مشاهده دوره‌های بیشتر
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
