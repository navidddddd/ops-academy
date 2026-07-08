// src/app/learn/[course]/[slug]/page.tsx
import { getLessonContent, getCourseLessons } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import CopyablePre from "@/components/CopyablePre";
import TableOfContents from "@/components/TableOfContents";
import ViewTracker from "@/components/ViewTracker";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ course: string; slug: string }>;
};

// ============================================================================
// Generate Dynamic SEO Metadata
// ============================================================================
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { course, slug } = await params;
  const source = await getLessonContent(course, slug);

  if (!source) {
    return { title: "مقاله یافت نشد | اپس آکادمی" };
  }

  const title = source.match(/title:\s*"(.*?)"/)?.[1] || "اپس آکادمی";
  const description = source.match(/description:\s*"(.*?)"/)?.[1] || "";
  const keywords = source.match(/keywords:\s*"(.*?)"/)?.[1] || "";

  return {
    title: `${title} | اپس آکادمی`,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      siteName: "Ops Academy",
      url: `https://ops-academy.ir/learn/${course}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
  };
}

// ============================================================================
// Main Server Component
// ============================================================================
export default async function LessonPage({ params }: PageProps) {
  const { course, slug } = await params;

  const source = await getLessonContent(course, slug);
  if (!source) notFound();

  // 1. Fetch raw title and clean it
  // Added Persian digits (۰-۹) to the regex so it perfectly cleans titles like "۰. نمای کلی"
  const rawTitle = source.match(/title:\s*"(.*?)"/)?.[1] || "آموزش تخصصی";
  const cleanTitle = rawTitle.replace(/^[\d۰-۹\.\-\s]+/, "");

  const description = source.match(/description:\s*"(.*?)"/)?.[1] || "";

  // 2. Setup lesson navigation (Prev/Next)
  const allLessons = getCourseLessons(course);
  const currentIndex = allLessons.findIndex((lesson) => lesson.slug === slug);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div
      className="flex flex-col lg:flex-row items-start max-w-[1400px] mx-auto w-full gap-8 px-6 py-8"
      dir="rtl"
    >
      {/* Dynamic JSON-LD Schema for Technical SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: cleanTitle,
            description: description,
            author: {
              "@type": "Organization",
              name: "Ops Academy",
            },
          }),
        }}
      />

      {/* Tracks page views in the background */}
      <ViewTracker courseId={course} />

      <article className="flex-1 min-w-0 prose prose-slate prose-img:rounded-xl max-w-4xl mx-auto transition-colors duration-300">
        <header className="mb-10 not-prose border-b border-slate-200 dark:border-slate-700/50 pb-6 transition-colors">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            {cleanTitle}
          </h1>

          {description && (
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {description}
            </p>
          )}
        </header>

        <MDXRemote
          source={source}
          components={{
            pre: CopyablePre,
            // Automatically hide any H1 tags inside the MDX content to prevent duplication
            // since we already render the frontmatter title in the page header.
            h1: () => null,
          }}
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [rehypePrettyCode, { theme: "one-dark-pro" }],
              ],
            },
          }}
        />

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center not-prose transition-colors duration-300">
          <div className="w-1/2 flex justify-start">
            {prevLesson && (
              <Link
                href={`/learn/${course}/${prevLesson.slug}`}
                className="px-6 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-all shadow-sm"
              >
                « درس قبلی
              </Link>
            )}
          </div>
          <div className="w-1/2 flex justify-end">
            {nextLesson && (
              <Link
                href={`/learn/${course}/${nextLesson.slug}`}
                className="px-6 py-2.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-500 text-blue-600 dark:text-blue-400 font-bold rounded-xl transition-all shadow-sm"
              >
                درس بعدی »
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Sticky Table of Contents Sidebar */}
      <aside className="hidden xl:block w-64 shrink-0 sticky top-[100px] h-[calc(100vh-120px)] overflow-y-auto pb-10">
        <TableOfContents />
      </aside>
    </div>
  );
}
