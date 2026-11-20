"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ExperiencePhotoCarousel from "./ExperiencePhotoCarousel";
import ScrollWordText from "./ScrollWordText";
import { motionEase, useMotionProfile } from "../lib/motion";

function ExperienceRow({
  item,
  index,
  isActive,
  onSelect,
  rowRef,
}) {
  const localRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollViewport, fadeUpHidden, duration } = useMotionProfile();

  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ["start 0.9", "start 0.35"],
  });

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof rowRef === "function") rowRef(node);
  };

  const activeState = reduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : isActive
      ? { opacity: 1, x: 0, y: 0 }
      : { opacity: 0.38, x: -10, y: 6 };

  const detailState = reduceMotion
    ? { opacity: 1, y: 0 }
    : isActive
      ? { opacity: 1, y: 0 }
      : { opacity: 0.45, y: 16 };

  const largeLogo = Boolean(item.logoLarge);

  // Balanced enter/exit band so the last item (IGTS) fades the same way
  // as mid-list items when scrolling toward Achievements and back.
  const rowViewport = {
    ...scrollViewport,
    once: false,
    amount: 0.28,
    margin: "-12% 0px -16% 0px",
  };

  const rowVariants = {
    hidden: {
      opacity: fadeUpHidden.opacity,
      y: fadeUpHidden.y,
      transition: { duration, ease: motionEase },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: motionEase },
    },
  };

  return (
    <motion.li
      ref={setRefs}
      data-index={index}
      className={`exp-timeline__item relative grid list-none items-center gap-5 py-8 lg:grid-cols-2 lg:gap-10 lg:py-10 ${
        isActive ? "is-active" : ""
      }`}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      variants={reduceMotion ? undefined : rowVariants}
      viewport={reduceMotion ? undefined : rowViewport}
    >
      <motion.button
        type="button"
        onClick={() => onSelect(index)}
        aria-current={isActive ? "true" : undefined}
        className="group relative z-10 flex w-full cursor-pointer items-start gap-3.5 text-left sm:gap-4"
        initial={false}
        animate={activeState}
        transition={{ duration: 0.36, ease: motionEase }}
      >
        <motion.span
          className={`exp-timeline__marker relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            isActive
              ? "bg-zinc-900 text-white"
              : "border border-zinc-300 bg-white text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-700"
          }`}
          initial={false}
          animate={
            reduceMotion ? { scale: 1 } : { scale: isActive ? 1.12 : 1 }
          }
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
        >
          {index + 1}
        </motion.span>

        <span className="min-w-0 flex-1 pt-0.5">
          <span className="flex items-center gap-2.5">
            <span
              className={`flex flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 ${
                largeLogo
                  ? "h-12 w-12 p-0.5 sm:h-14 sm:w-14"
                  : "h-9 w-9 p-1"
              }`}
            >
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt=""
                  width={largeLogo ? 56 : 36}
                  height={largeLogo ? 56 : 36}
                  className="h-full w-full rounded-md object-contain"
                />
              ) : (
                <span className="text-xs font-bold text-zinc-400">
                  {(item.orgShort || item.org || "?").slice(0, 1)}
                </span>
              )}
            </span>
            <ScrollWordText
              text={item.orgShort || item.org}
              progress={scrollYProgress}
              reducedMotion={Boolean(reduceMotion)}
              className="min-w-0 truncate text-sm font-semibold text-zinc-800"
            />
            <span className="ml-auto flex-shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-500">
              {item.year || item.period}
            </span>
          </span>

          <ScrollWordText
            text={item.role}
            progress={scrollYProgress}
            reducedMotion={Boolean(reduceMotion)}
            className="mt-1.5 block text-[0.95rem] font-semibold tracking-tight text-zinc-900 sm:text-base"
          />

          <span className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-zinc-500">
            {item.location ? <span>{item.location}</span> : null}
            {item.location && item.type ? (
              <span className="text-zinc-300">•</span>
            ) : null}
            {item.type ? (
              <span className="rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-medium text-zinc-600">
                {item.type}
              </span>
            ) : null}
          </span>

          {item.description ? (
            <p className="mt-2.5 text-sm leading-6 text-zinc-600">
              {item.description}
            </p>
          ) : null}
        </span>
      </motion.button>

      <motion.aside
        className="exp-timeline__detail rounded-2xl border border-zinc-200 bg-white p-3 sm:rounded-3xl sm:p-4"
        initial={false}
        animate={detailState}
        transition={{ duration: 0.36, ease: motionEase }}
      >
        <ExperiencePhotoCarousel item={item} />

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-0.5 sm:mt-3.5">
          <p className="text-xs font-medium tracking-wide text-zinc-500 sm:text-sm">
            {item.period}
          </p>

          {item.ctaUrl || item.certificateUrl ? (
            <a
              href={item.ctaUrl || item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-zinc-900 px-4 text-xs font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98]"
              onClick={(event) => event.stopPropagation()}
            >
              {item.ctaLabel || (item.certificateUrl ? "Certificate" : "Open")}
            </a>
          ) : null}
        </div>
      </motion.aside>
    </motion.li>
  );
}

export default function ExperienceTimeline({ items = [] }) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean);
    if (!nodes.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const index = Number(visible[0].target.dataset.index);
        if (Number.isNaN(index)) return;

        setActive((prev) => (prev === index ? prev : index));
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [items.length]);

  const selectItem = (index) => {
    setActive(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  if (!items.length) return null;

  const progress = (active + 1) / items.length;

  return (
    <ol className="exp-timeline relative m-0 list-none p-0">
      <span
        aria-hidden="true"
        className="exp-timeline__track absolute top-3 bottom-3 left-[15px] z-0 hidden w-px overflow-hidden bg-zinc-200 lg:block"
      >
        <motion.span
          className="exp-timeline__track-fill absolute inset-x-0 top-0 h-full bg-zinc-900"
          style={{ transformOrigin: "top center" }}
          initial={false}
          animate={{ scaleY: reduceMotion ? 1 : progress }}
          transition={{ duration: 0.4, ease: motionEase }}
        />
      </span>

      {items.map((item, index) => (
        <ExperienceRow
          key={`${item.role}-${item.org}-${item.period}`}
          item={item}
          index={index}
          isActive={index === active}
          onSelect={selectItem}
          rowRef={(node) => {
            itemRefs.current[index] = node;
          }}
        />
      ))}
    </ol>
  );
}
