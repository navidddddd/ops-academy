"use client";

import React, { useState } from "react";

export default function ContactForm() {
  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle the form submission event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call delay for the demonstration
    // TODO: Connect this to your actual API endpoint later
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          نام و نام خانوادگی
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="name"
            name="name"
            required
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white sm:text-sm px-4 py-3"
            placeholder="مثال: علی رضایی"
          />
        </div>
      </div>

      {/* Email Input Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          ایمیل
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white sm:text-sm px-4 py-3"
            placeholder="you@example.com"
            dir="ltr"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          پیام شما
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white sm:text-sm px-4 py-3"
            placeholder="چگونه می‌توانیم به شما کمک کنیم؟"
          />
        </div>
      </div>

      {/* Submit Button & Success Message */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting
            ? "در حال ارسال..."
            : isSuccess
              ? "پیام شما ارسال شد"
              : "ارسال پیام"}
        </button>
      </div>
    </form>
  );
}
