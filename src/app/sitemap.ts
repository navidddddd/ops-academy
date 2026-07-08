// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { getDynamicCoursesData, getCourseLessons } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // دامنه اصلی سایت شما (حتماً در زمان پابلیش این را به دامنه واقعی تغییر دهید)
  const baseUrl = "https://ops-academy.ir";

  // ۱. مسیرهای ثابت سایت (مثل صفحه اصلی)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0, // بالاترین اولویت برای صفحه اصلی
    },
  ];

  // ۲. تولید خودکار مسیرها برای تمام مقالات MDX
  const courses = getDynamicCoursesData();
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  courses.forEach((course: any) => {
    // گرفتن تمام دروسِ این دوره
    const lessons = getCourseLessons(course.id);

    lessons.forEach((lesson: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/learn/${course.id}/${lesson.slug}`,
        lastModified: new Date(), // به گوگل می‌گوید این مقاله چه زمانی آپدیت شده است
        changeFrequency: "weekly",
        priority: 0.8, // اولویت بالای مقالات
      });
    });
  });

  // ترکیب مسیرهای ثابت و داینامیک
  return [...staticRoutes, ...dynamicRoutes];
}
