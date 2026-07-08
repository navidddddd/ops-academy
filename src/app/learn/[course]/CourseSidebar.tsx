"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Lesson = {
  slug: string;
  title: string;
};

type SidebarProps = {
  course: string;
  lessons: Lesson[];
};

export default function CourseSidebar({ course, lessons }: SidebarProps) {
  const pathname = usePathname();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // تابعی برای واکشی درس‌های خوانده‌شده از سرور
  const fetchProgress = () => {
    fetch(`/api/progress?courseId=${course}`)
      .then((res) => {
        if (!res.ok) throw new Error("API is not returning valid data"); // 👈 ایمن‌سازی
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setCompletedLessons(data);
      })
      .catch((err) => console.error("Progress fetch skipped:", err));
  };

  useEffect(() => {
    fetchProgress();

    // 💡 ترفند: گوش دادن به یک رویداد کاستوم تا اگر دکمه "یاد گرفتم" زده شد، سایدبار در لحظه آپدیت شود
    window.addEventListener("progressUpdated", fetchProgress);
    return () => window.removeEventListener("progressUpdated", fetchProgress);
  }, [course]);

  return (
    <nav className="flex flex-col gap-1.5">
      {lessons.map((lesson) => {
        const href = `/learn/${course}/${lesson.slug}`;
        const isActive = pathname === href;
        const isCompleted = completedLessons.includes(lesson.slug);

        return (
          <Link
            key={lesson.slug}
            href={href}
            className={`text-sm px-4 py-2.5 rounded-xl transition-all block border ${
              isActive
                ? "bg-blue-50 text-blue-700 font-bold border-blue-200 shadow-sm"
                : "text-slate-600 font-medium border-transparent hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-100"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span>{lesson.title}</span>

              {/* تیک سبز فقط برای درس‌های تکمیل شده */}
              {isCompleted && (
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
