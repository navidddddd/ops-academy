// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // اگر در آینده خواستی صفحاتی مثل پنل ادمین را از چشم گوگل مخفی کنی، اینجا می‌نویسی:
      // disallow: '/admin/',
    },
    // آدرس دقیق سایت‌مپ شما برای ربات‌های گوگل
    sitemap: "https://ops-academy.ir/sitemap.xml",
  };
}
