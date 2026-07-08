import React from "react";

// Define strict types for the component props
interface CourseStatsProps {
  views: number;
  readingTimeMinutes?: number;
}

export default function CourseStats({
  views,
  readingTimeMinutes = 10,
}: CourseStatsProps) {
  // Utility function to format numbers to Persian locale
  const formatNumberToPersian = (num: number) => {
    return new Intl.NumberFormat("fa-IR").format(num);
  };

  return (
    <dl className="flex flex-wrap items-center gap-4 mt-6 mb-8 text-sm sm:text-base select-none">
      {/* Views Stat */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm backdrop-blur-sm transition-colors">
        <dt className="sr-only">تعداد بازدید</dt>
        <dd className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
          {/* Eye Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 dark:text-blue-400"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="mt-0.5">{formatNumberToPersian(views)}</span>
          <span className="text-slate-500 dark:text-slate-400 text-xs mr-1 mt-0.5">
            بازدید
          </span>
        </dd>
      </div>

      {/* Reading Time Stat */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm backdrop-blur-sm transition-colors">
        <dt className="sr-only">زمان مطالعه</dt>
        <dd className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
          {/* Clock Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 dark:text-blue-400"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="mt-0.5">
            {formatNumberToPersian(readingTimeMinutes)}
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-xs mr-1 mt-0.5">
            دقیقه مطالعه
          </span>
        </dd>
      </div>
    </dl>
  );
}
