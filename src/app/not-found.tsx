"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-light px-4 text-center">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-7xl font-bold text-gradient">404</div>
        <h1 className="text-3xl font-bold text-[#0F1729]">Page Not Found</h1>
        <p className="text-[#5A6577]">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-[#2B5FD9] to-[#1E40AF] px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
