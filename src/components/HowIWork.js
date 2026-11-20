"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

function FaceIcon({ kind }) {
  if (kind === "design") {
    return (
      <svg className="how-face" viewBox="0 0 88 52" aria-hidden="true">
        <rect x="18" y="8" width="52" height="36" rx="8" strokeWidth="2" />
        <path d="M30 28h28" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="22" r="1.9" data-fill="true" />
        <circle cx="54" cy="22" r="1.9" data-fill="true" />
      </svg>
    );
  }

  if (kind === "build") {
    return (
      <svg className="how-face" viewBox="0 0 88 52" aria-hidden="true">
        <path
          d="M28 14 18 26l10 12M60 14l10 12-10 12M50 12 38 40"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "deliver") {
    return (
      <svg className="how-face" viewBox="0 0 88 52" aria-hidden="true">
        <circle cx="44" cy="26" r="16" strokeWidth="2" />
        <path
          d="M36 26l5 5 11-12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="how-face" viewBox="0 0 88 52" aria-hidden="true">
      <circle cx="44" cy="26" r="18" strokeWidth="2" />
      <circle cx="37" cy="22" r="1.9" data-fill="true" />
      <circle cx="51" cy="22" r="1.9" data-fill="true" />
      <path d="M36 32c2.5 3 13.5 3 16 0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function useIsMobile(breakpoint = 720) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [breakpoint]);

  return mobile;
}

/** 4-point curve with a flat clear plateau so each card can stay sharp. */
function cardKeyframes(peak, rise, dwell) {
  const halfDwell = dwell / 2;
  let a = clamp(peak - rise - halfDwell, 0, 1);
  let b = clamp(peak - halfDwell, 0, 1);
  let c = clamp(peak + halfDwell, 0, 1);
  let d = clamp(peak + rise + halfDwell, 0, 1);

  // Keep keys strictly increasing for useTransform.
  const minGap = 0.012;
  if (b <= a) b = Math.min(1, a + minGap);
  if (c <= b) c = Math.min(1, b + minGap);
  if (d <= c) d = Math.min(1, c + minGap);
  return [a, b, c, d];
}

/** Spread peaks evenly with room for a clear dwell on each card. */
function peakFor(index, count) {
  if (count <= 1) return 0.5;
  const start = 0.1;
  const end = 0.9;
  return start + (index / (count - 1)) * (end - start);
}

function HowPhone({
  step,
  index,
  count,
  progress,
  scrubEnabled,
  isLast,
  onNext,
}) {
  const peak = peakFor(index, count);
  // Narrower rise + wider dwell = card stays clear before blurring again.
  const keys = cardKeyframes(peak, 0.16, 0.18);

  const scale = useTransform(
    progress,
    keys,
    scrubEnabled ? [0.92, 1, 1, 0.92] : [1, 1, 1, 1],
  );
  const opacity = useTransform(
    progress,
    keys,
    scrubEnabled ? [0.4, 1, 1, 0.4] : [1, 1, 1, 1],
  );
  const y = useTransform(
    progress,
    keys,
    scrubEnabled ? [28, 0, 0, 28] : [0, 0, 0, 0],
  );

  return (
    <motion.article
      className="how-phone"
      style={{ scale, opacity, y }}
    >
      <FaceIcon kind={step.icon} />
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      <div className="how-step">
        <b>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </b>
      </div>
      <button
        type="button"
        className="how-next"
        aria-label={
          isLast ? "Go to featured projects" : `Go to next step`
        }
        onClick={onNext}
      >
        →
      </button>
    </motion.article>
  );
}

export default function HowIWork({ steps = [] }) {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [travel, setTravel] = useState(0);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const scrubEnabled = !reduceMotion && !isMobile;

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    setTravel(Math.max(0, track.scrollWidth - viewport.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, steps.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    scrubEnabled ? [0, -travel] : [0, 0],
  );

  // Snappier follow so a card is centered while its clear plateau is active.
  const x = useSpring(xRaw, {
    stiffness: 88,
    damping: 28,
    mass: 0.42,
    restDelta: 0.001,
  });

  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.32],
    scrubEnabled ? [1, 0.88, 0.35] : [1, 1, 1],
  );
  const copyY = useTransform(
    scrollYProgress,
    [0, 0.28],
    scrubEnabled ? [0, 14] : [0, 0],
  );

  const scrollToStep = (index) => {
    const section = sectionRef.current;
    if (!section || !scrubEnabled) {
      trackRef.current
        ?.querySelectorAll(".how-phone")
        [index]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      return;
    }

    const start = section.getBoundingClientRect().top + window.scrollY;
    const range = Math.max(section.offsetHeight - window.innerHeight, 1);
    const progress = clamp(peakFor(index, steps.length), 0, 1);
    window.scrollTo({ top: start + progress * range, behavior: "smooth" });
  };

  const goToFeatured = () => {
    const target = document.getElementById("featured-projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.hash = "featured-projects";
  };

  if (!steps.length) return null;

  return (
    <section
      ref={sectionRef}
      className={`how-i-work${scrubEnabled ? " how-i-work--scrub" : ""}`}
      aria-label="How i work"
    >
      <div className="how-pin">
        <div className="how-pin-inner" ref={viewportRef}>
          <motion.div
            className="how-track"
            ref={trackRef}
            style={{ x: scrubEnabled ? x : 0 }}
          >
            <motion.div
              className="how-copy"
              style={{ opacity: copyOpacity, y: copyY }}
            >
              <p className="how-eyebrow">Process</p>
              <h2 className="how-title">How i work</h2>
              <p className="how-lede">
                A clear loop from understanding the problem to shipping something
                useful.
              </p>
            </motion.div>

            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;

              return (
                <HowPhone
                  key={step.title}
                  step={step}
                  index={index}
                  count={steps.length}
                  progress={scrollYProgress}
                  scrubEnabled={scrubEnabled}
                  isLast={isLast}
                  onNext={() =>
                    isLast ? goToFeatured() : scrollToStep(index + 1)
                  }
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
