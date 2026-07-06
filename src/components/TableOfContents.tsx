"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // پیدا کردن تمام تیترهای H2 و H3 داخل مقاله
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3"),
    );
    const headingData = elements.map((elem) => ({
      id: elem.id,
      text: elem.textContent || "",
      level: elem.tagName === "H2" ? 2 : 3,
    }));

    setHeadings(headingData);

    // سیستم هوشمند برای تشخیص اینکه کاربر الان روی کدام تیتر است (Intersection Observer)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    elements.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  // اگر مقاله‌ای تیتر نداشت، این منو اصلاً نمایش داده نمی‌شود
  if (headings.length === 0) return null;

  return (
    // ✨ کلاس‌های sticky، top، max-h و overflow از اینجا حذف شدند ✨
    // کنترل این موارد الان فقط دستِ سایدبارِ پدر در page.tsx است
    <div className="pl-4">
      <h4 className="font-extrabold text-slate-800 mb-4 text-sm uppercase tracking-wider">
        فهرست مطالب
      </h4>
      <ul className="flex flex-col gap-3 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pr-4" : ""}>
            <a
              href={`#${h.id}`}
              // ✨ کلاس‌های leading-relaxed و text-right اضافه شدند تا متن‌های طولانی را کنترل کنند ✨
              className={`block transition-all duration-200 leading-relaxed text-right ${
                activeId === h.id
                  ? "text-blue-600 font-bold border-r-2 border-blue-600 pr-3"
                  : "text-slate-500 hover:text-slate-800 border-r-2 border-transparent pr-3"
              }`}
              style={{ wordBreak: "break-word" }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
