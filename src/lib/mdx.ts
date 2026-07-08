import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define strict types for course status
export type CourseStatus = "completed" | "in-progress";

// Define the interface mapping directly to info.json structure
export interface CourseInfo {
  title: string;
  badge: string;
  icon: string;
  description: string;
  order: number;
  views: number;
  status?: CourseStatus;
}

// Define the final Course object interface that includes generated fields
export interface Course extends CourseInfo {
  id: string;
  link: string;
  status: CourseStatus; // Making it strictly required in the UI
}

export interface Lesson {
  slug: string;
  title: string;
}

export interface SearchableLesson extends Lesson {
  course: string;
}

const root = path.join(process.cwd(), "content");

export function getDynamicCoursesData(): Course[] {
  try {
    const courseFolders = fs.readdirSync(root);
    const courses: Course[] = [];

    for (const folder of courseFolders) {
      const coursePath = path.join(root, folder);

      if (fs.statSync(coursePath).isDirectory()) {
        const infoPath = path.join(coursePath, "info.json");

        if (fs.existsSync(infoPath)) {
          const infoContent = fs.readFileSync(infoPath, "utf-8");
          const courseInfo = JSON.parse(infoContent) as CourseInfo;

          const files = fs
            .readdirSync(coursePath)
            .filter((file) => file.endsWith(".mdx"));

          // Smart sorting based on numerical prefixes (e.g., 1-2 comes after 1-1)
          files.sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true }),
          );

          const firstLessonSlug =
            files.length > 0 ? files[0].replace(".mdx", "") : "";

          courses.push({
            id: folder,
            ...courseInfo,
            // Fallback to "in-progress" if the status is missing in older info.json files
            status: courseInfo.status || "in-progress",
            link: firstLessonSlug ? `/learn/${folder}/${firstLessonSlug}` : "#",
          });
        }
      }
    }

    // Sort courses globally based on their 'order' field defined in info.json
    return courses.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error("Error scanning dynamic courses:", error);
    return [];
  }
}

export function getCourseLessons(course: string): Lesson[] {
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

      // Extract frontmatter data (e.g., exact Persian title)
      const { data } = matter(fileContent);

      // Fallback to filename slug if title is missing in frontmatter
      const formattedTitle = data.title || slug;

      return { slug, title: formattedTitle };
    });
  } catch (e) {
    return [];
  }
}

export async function getLessonContent(
  course: string,
  slug: string,
): Promise<string | null> {
  const filePath = path.join(root, course, `${slug}.mdx`);
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    return null;
  }
}

export function getAllSearchableLessons(): SearchableLesson[] {
  try {
    const courseFolders = fs.readdirSync(root);
    const allLessons: SearchableLesson[] = [];

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
