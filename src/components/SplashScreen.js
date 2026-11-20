"use client";

import { useEffect, useState } from "react";

const HOLD_MS = 4000;
const FADE_MS = 500;
const STORAGE_KEY = "portfolio-splash-seen";

export default function SplashScreen() {
  const [phase, setPhase] = useState("show"); // show | leaving | done

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "1") {
      setPhase("done");
      return undefined;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let leaveTimer;
    let holdTimer;

    const finish = () => {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setPhase("done");
    };

    const startFade = () => {
      if (reduced) {
        finish();
        return;
      }
      setPhase("leaving");
      leaveTimer = window.setTimeout(finish, FADE_MS);
    };

    holdTimer = window.setTimeout(startFade, HOLD_MS);

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(leaveTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#fafafa] transition-[opacity,visibility] duration-500 ease-out ${
        phase === "leaving"
          ? "pointer-events-none invisible opacity-0"
          : "visible opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-busy={phase === "show"}
      aria-label="Loading portfolio"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.10),_transparent_55%)]"
      />

      <div
        aria-hidden="true"
        className={`splash-logo-pulse relative flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 shadow-[0_10px_30px_rgba(24,24,27,0.18)] sm:h-20 sm:w-20 ${
          phase === "leaving" ? "[animation-play-state:paused]" : ""
        }`}
      >
        <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
          ES
        </span>
      </div>

      <p className="relative font-[family-name:var(--font-geist-mono)] text-[11px] font-medium tracking-[0.28em] text-zinc-500 uppercase">
        Loading portfolio
      </p>
    </div>
  );
}
