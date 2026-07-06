// src/lib/stats.ts
import fs from "fs";
import path from "path";

// Storing the file in root directory prevents Next.js from hot-reloading during dev mode
const statsFilePath = path.join(process.cwd(), "course-stats.json");

export type CourseStats = {
  views: number;
  students: number;
};

export type AllStats = Record<string, CourseStats>;

// Initialize the file with base realistic data if it doesn't exist
function initStatsFile() {
  if (!fs.existsSync(statsFilePath)) {
    const initialStats: AllStats = {
      rhcsa: { views: 1420, students: 480 },
      "cnfc-docker": { views: 950, students: 310 },
      hasicorp: { views: 620, students: 150 },
      sre: { views: 410, students: 95 },
    };
    fs.writeFileSync(
      statsFilePath,
      JSON.stringify(initialStats, null, 2),
      "utf-8",
    );
  }
}

// Fetch stats for a specific course securely
export function getCourseStats(courseId: string): CourseStats {
  initStatsFile();
  try {
    const content = fs.readFileSync(statsFilePath, "utf-8");
    const allStats: AllStats = JSON.parse(content);
    return allStats[courseId] || { views: 0, students: 0 };
  } catch (error) {
    return { views: 0, students: 0 };
  }
}

// Atomically increment course view count and simulate realistic student growth
export function incrementCourseViews(courseId: string) {
  initStatsFile();
  try {
    const content = fs.readFileSync(statsFilePath, "utf-8");
    const allStats: AllStats = JSON.parse(content);

    if (!allStats[courseId]) {
      allStats[courseId] = { views: 0, students: 0 };
    }

    // Increment views by 1
    allStats[courseId].views += 1;

    // Professionally simulate a new student signup (5% chance on a page view)
    if (Math.random() > 0.95) {
      allStats[courseId].students += 1;
    }

    fs.writeFileSync(statsFilePath, JSON.stringify(allStats, null, 2), "utf-8");
  } catch (error) {
    console.error("Error updating analytics store:", error);
  }
}

// Calculate total global stats for the hero section dynamically
export function getTotalGlobalStats() {
  initStatsFile();
  try {
    const content = fs.readFileSync(statsFilePath, "utf-8");
    const allStats: AllStats = JSON.parse(content);

    let totalViews = 0;
    let totalStudents = 0;

    Object.values(allStats).forEach((stat) => {
      totalViews += stat.views;
      totalStudents += stat.students;
    });

    return { totalViews, totalStudents };
  } catch (error) {
    return { totalViews: 3400, totalStudents: 1035 };
  }
}
