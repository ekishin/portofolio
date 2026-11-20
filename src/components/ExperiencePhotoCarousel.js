"use client";

import { useEffect, useRef, useState } from "react";
import SafeImage from "./SafeImage";

function normalizePhoto(entry) {
  if (!entry) return null;
  if (typeof entry === "string") return { src: entry, position: "50% 50%" };
  if (entry.src) {
    return { src: entry.src, position: entry.position || "50% 50%" };
  }
  return null;
}

function resolvePhotos(item) {
  if (Array.isArray(item.photos) && item.photos.length > 0) {
    return item.photos.map(normalizePhoto).filter(Boolean);
  }
  const single = normalizePhoto(item.photo);
  return single ? [single] : [];
}

export default function ExperiencePhotoCarousel({ item }) {
  const photos = resolvePhotos(item);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const photoKey = photos.map((photo) => photo.src).join("|");

  useEffect(() => {
    setIndex(0);
  }, [item.role, item.org, photoKey]);

  if (!photos.length) return null;

  const multi = photos.length > 1;

  const go = (next) => {
    setIndex((prev) => (prev + next + photos.length) % photos.length);
  };

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current == null || !multi) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    go(delta < 0 ? 1 : -1);
  };

  return (
    <div
      className="group/photo relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 sm:rounded-2xl"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {photos.map((photo, i) => (
        <div
          key={`${photo.src}-${i}`}
          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <SafeImage
            src={photo.src}
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: photo.position }}
            sizes="(max-width: 1024px) 90vw, 420px"
            priority={i === 0}
          />
        </div>
      ))}

      {multi ? (
        <>
          <span className="pointer-events-none absolute top-2.5 left-2.5 z-10 rounded-full bg-zinc-950/55 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white sm:top-3 sm:left-3 sm:text-[11px]">
            {index + 1}/{photos.length}
          </span>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-950/45 text-white opacity-90 transition-[transform,background-color,opacity] duration-200 hover:bg-zinc-950/65 hover:opacity-100 active:scale-[0.96] sm:left-3 sm:h-9 sm:w-9"
          >
            <span aria-hidden="true" className="text-sm leading-none sm:text-base">
              ‹
            </span>
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-950/45 text-white opacity-90 transition-[transform,background-color,opacity] duration-200 hover:bg-zinc-950/65 hover:opacity-100 active:scale-[0.96] sm:right-3 sm:h-9 sm:w-9"
          >
            <span aria-hidden="true" className="text-sm leading-none sm:text-base">
              ›
            </span>
          </button>

          <div className="absolute inset-x-0 bottom-2.5 z-10 flex items-center justify-center gap-1.5 sm:bottom-3">
            {photos.map((_, i) => {
              const isActive = i === index;
              return (
                <button
                  key={`dot-${i}`}
                  type="button"
                  aria-label={`Go to photo ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(event) => {
                    event.stopPropagation();
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-[width,background-color,opacity] duration-300 ease-out ${
                    isActive
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/55 hover:bg-white/80"
                  }`}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
