import fs from "fs";
import path from "path";
import matter from "gray-matter"; // پکیج جدید برای خواندن دیتای داخل MDX

const root = path.join(process.cwd(), "content");

export function getDynamicCoursesData() {
  try {
    const courseFolders = fs.readdirSync(root);
    const courses = [];

    for (const folder of courseFolders) {
      const coursePath = path.join(root, folder);

      if (fs.statSync(coursePath).isDirectory()) {
        const infoPath = path.join(coursePath, "info.json");

        if (fs.existsSync(infoPath)) {
          const infoContent = fs.readFileSync(infoPath, "utf-8");
          const courseInfo = JSON.parse(infoContent);

          const files = fs
            .readdirSync(coursePath)
            .filter((file) => file.endsWith(".mdx"));
          // مرتب‌سازی هوشمند فایل‌ها بر اساس عدد (مثلا 1-2 بعد از 1-1 قرار بگیرد)
          files.sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true }),
          );

          const firstLessonSlug =
            files.length > 0 ? files[0].replace(".mdx", "") : "";

          courses.push({
            id: folder,
            ...courseInfo,
            link: firstLessonSlug ? `/learn/${folder}/${firstLessonSlug}` : "#",
          });
        }
      }
    }
    return courses;
  } catch (error) {
    console.error("Error scanning dynamic courses:", error);
    return [];
  }
}

// ✨ آپدیت اصلی اینجاست: خواندن عنوان دقیق فارسی از داخل فایل
export function getCourseLessons(course: string) {
  const courseDir = path.join(root, course);
  try {
    const files = fs
      .readdirSync(courseDir)
      .filter((file) => file.endsWith(".mdx"));
    files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return files.map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(courseDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      // استخراج اطلاعات خطوط اول فایل
      const { data } = matter(fileContent);

      // اگر تایتل در فایل وجود داشت آن را بردار، وگرنه از همان اسم فایل استفاده کن
      const formattedTitle = data.title || slug;

      return { slug, title: formattedTitle };
    });
  } catch (e) {
    return [];
  }
}

export async function getLessonContent(course: string, slug: string) {
  const filePath = path.join(root, course, `${slug}.mdx`);
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    return null;
  }
}

export function getAllSearchableLessons() {
  try {
    const courseFolders = fs.readdirSync(root);
    let allLessons: { course: string; slug: string; title: string }[] = [];

    courseFolders.forEach((course) => {
      const coursePath = path.join(root, course);
      if (fs.statSync(coursePath).isDirectory()) {
        const lessons = getCourseLessons(course);
        lessons.forEach((lesson) => {
          allLessons.push({
            course,
            slug: lesson.slug,
            title: lesson.title,
          });
        });
      }
    });
    return allLessons;
  } catch (error) {
    return [];
  }
}
