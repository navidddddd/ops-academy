"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="flex flex-col gap-1.5">
      {lessons.map((lesson) => {
        const href = `/learn/${course}/${lesson.slug}`;
        const isActive = pathname === href;

        return (
          <Link
            key={lesson.slug}
            href={href}
            className={`text-sm px-4 py-2.5 rounded-xl transition-all block border ${
              isActive
                ? "bg-blue-50 text-blue-700 font-bold border-blue-200 shadow-sm" // 👈 استایل درس فعلی (هایلایت)
                : "text-slate-600 font-medium border-transparent hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-100" // 👈 استایل بقیه دروس
            }`}
          >
            {lesson.title}
          </Link>
        );
      })}
    </nav>
  );
}
