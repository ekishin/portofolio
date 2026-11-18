"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { motionEase } from "../lib/motion";

function ExperienceRow({
  item,
  index,
  count,
  isActive,
  onSelect,
  rowRef,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <li
      ref={rowRef}
      data-index={index}
      className={`exp-timeline__item relative grid list-none items-center gap-5 py-8 lg:grid-cols-2 lg:gap-10 lg:py-10 ${
        isActive ? "is-active" : ""
      }`}
    >
      <motion.button
        type="button"
        onClick={() => onSelect(index)}
        aria-current={isActive ? "true" : undefined}
        className="group relative z-10 flex w-full cursor-pointer items-start gap-3.5 text-left sm:gap-4"
        initial={false}
        animate={
          reduceMotion
            ? { opacity: 1, x: 0, y: 0 }
            : isActive
              ? { opacity: 1, x: 0, y: 0 }
              : { opacity: 0.32, x: -12, y: 8 }
        }
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
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 p-1">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full rounded-md object-contain"
                />
              ) : (
                <span className="text-xs font-bold text-zinc-400">
                  {(item.orgShort || item.org || "?").slice(0, 1)}
                </span>
              )}
            </span>
            <span className="truncate text-sm font-semibold text-zinc-800">
              {item.orgShort || item.org}
            </span>
            <span className="ml-auto flex-shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-500">
              {item.year || item.period}
            </span>
          </span>

          <span className="mt-1.5 block text-[0.95rem] font-semibold tracking-tight text-zinc-900 sm:text-base">
            {item.role}
          </span>

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
        </span>
      </motion.button>

      <motion.aside
        className="exp-timeline__detail rounded-2xl border border-zinc-200 bg-white p-4 sm:rounded-3xl sm:p-5"
        initial={false}
        animate={
          reduceMotion
            ? { opacity: 1, y: 0 }
            : isActive
              ? { opacity: 1, y: 0 }
              : { opacity: 0.45, y: 16 }
        }
        transition={{ duration: 0.36, ease: motionEase }}
      >
        {item.photo ? (
          <div className="relative mb-3.5 aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 sm:mb-4 sm:rounded-2xl">
            <Image
              src={item.photo}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
        ) : null}

        <p className="text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase">
          {item.period}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
          {item.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-zinc-500">{item.org}</p>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>

        <p className="mt-3 text-[10px] font-medium tracking-[0.12em] text-zinc-400 uppercase">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
      </motion.aside>
    </li>
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
          count={items.length}
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
