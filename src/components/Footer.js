"use client";

import { profile } from "../data/portfolioData";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200/80 bg-[var(--footer)]">
      <div className="page-width flex items-center justify-between gap-4 py-5">
        <p className="font-mono text-xs text-zinc-500">
          © 2026 {profile.name}. All rights reserved.
        </p>
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-[var(--footer)] text-zinc-700 transition-[transform,border-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:border-zinc-900 hover:text-zinc-900 active:translate-y-0 active:scale-[0.96]"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 19V5m0 0-5 5m5-5 5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
