// src/components/CompleteButton.tsx
"use client";

import { useState, useEffect } from "react";

type Props = { courseId: string; slug: string; onToggle?: () => void };

export default function CompleteButton({ courseId, slug, onToggle }: Props) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // بررسی وضعیت اولیه درس هنگام لود صفحه
  useEffect(() => {
    fetch(`/api/progress?courseId=${courseId}`)
      .then((res) => res.json())
      .then((completedSlugs) => {
        if (Array.isArray(completedSlugs)) {
          setIsCompleted(completedSlugs.includes(slug));
        }
      });
  }, [courseId, slug]);

  const handleToggle = async () => {
    setIsLoading(true);
    const nextState = !isCompleted;

    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, slug, completed: nextState }),
      });
      setIsCompleted(nextState);

      // 💡 همگام‌سازی زنده: ارسال سیگنال به مرورگر تا سایدبار در لحظه متوجه تغییر شود و تیک بزند
      window.dispatchEvent(new Event("progressUpdated"));

      if (onToggle) onToggle();
    } catch (err) {
      console.error("Failed to update progress:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isLoading}
      className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-[0.98] ${
        isCompleted
          ? "bg-emerald-600 hover:bg-emerald-500 text-white"
          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
      }`}
    >
      <svg
        className={`w-5 h-5 transition-transform ${isCompleted ? "scale-110" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 13l4 4L19 7"
        />
      </svg>
      {isCompleted
        ? "این درس را یاد گرفته‌اید"
        : "علامت‌گذاری به عنوان یادگرفته شده"}
    </button>
  );
}
