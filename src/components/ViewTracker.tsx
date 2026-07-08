"use client";

import { useEffect, useRef } from "react";

// Define strict typing for props
interface ViewTrackerProps {
  courseId: string;
}

export default function ViewTracker({ courseId }: ViewTrackerProps) {
  // Use a ref to prevent double-firing in React 18 Strict Mode
  const hasFetched = useRef(false);

  useEffect(() => {
    // If the request has already been sent, exit early
    if (hasFetched.current) return;

    // Mark as fetched immediately to prevent race conditions
    hasFetched.current = true;

    const recordView = async () => {
      try {
        await fetch("/api/view", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ courseId }),
          // Explicitly tell the browser NOT to cache this fetch request
          cache: "no-store",
        });
      } catch (error) {
        console.error("ViewTracker Error: Failed to record view.", error);
      }
    };

    recordView();
  }, [courseId]); // Only re-run if the courseId actually changes

  // This is an invisible utility component for SEO and UI purposes; it renders nothing
  return null;
}
