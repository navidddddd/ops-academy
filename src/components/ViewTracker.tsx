// src/components/ViewTracker.tsx
"use client";

import { useEffect } from "react";

export default function ViewTracker({ courseId }: { courseId: string }) {
  useEffect(() => {
    // Send a non-blocking background network request to increment the view
    fetch("/api/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    }).catch((err) => console.error("Analytics ping failed:", err));
  }, [courseId]);

  return null; // This is a silent structural tracker and renders no UI
}
