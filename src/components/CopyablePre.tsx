"use client";

import { useState, useRef } from "react";

export default function CopyablePre({ children, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (preRef.current) {
      // استخراج متن خالصِ داخل باکس مشکی
      const text = preRef.current.textContent || "";
      await navigator.clipboard.writeText(text);

      // تغییر متن دکمه برای ۲ ثانیه تا کاربر متوجه شود کپی موفق بوده است
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group" dir="ltr">
      {/* دکمه کپی که فقط وقتی موس روی باکس برود ظاهر می‌شود */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 bg-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-600 px-3 py-1.5 rounded-lg text-xs font-mono opacity-0 group-hover:opacity-100 transition-all z-10 cursor-pointer shadow-sm"
      >
        {copied ? "کپی شد!" : "Copy"}
      </button>

      {/* باکس مشکی اصلی که کدها در آن رندر می‌شوند */}
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
