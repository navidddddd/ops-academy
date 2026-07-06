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

type PageProps = {
  params: Promise<{ course: string; slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { course, slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | ${course.toUpperCase()} Course`,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { course, slug } = await params;

  const source = await getLessonContent(course, slug);
  if (!source) notFound();

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
      {/* کامپوننت ردیاب بازدیدها */}
      <ViewTracker courseId={course} />

      {/* بخش محتوای اصلی مقاله - با پشتیبانی کامل از حالت تاریک */}
      <article className="flex-1 min-w-0 prose prose-slate prose-img:rounded-xl max-w-4xl mx-auto transition-colors duration-300">
        <MDXRemote
          source={source}
          components={{ pre: CopyablePre }}
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

        {/* دکمه‌های ناوبری پایین صفحه */}
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

      {/* بخش فهرست مطالب در سمت چپ - ثابت و دارای اسکرول داخلی */}
      <aside className="hidden xl:block w-64 shrink-0 sticky top-[100px] h-[calc(100vh-120px)] overflow-y-auto pb-10">
        <TableOfContents />
      </aside>
    </div>
  );
}
