"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { isTodo } from "../lib/content";

function isPdfPath(src) {
  return typeof src === "string" && /\.pdf($|\?)/i.test(src);
}

function proofSrc(item) {
  return item.proofImage || item.proofPdf || "";
}

function hasRealProof(item) {
  const src = proofSrc(item);
  return Boolean(src && !isTodo(src) && !src.includes("placeholder"));
}

function PdfPreview({ title, compact = false }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-100 to-zinc-50 px-4 text-center">
      <span
        className={`rounded-lg border border-zinc-300 bg-white font-mono font-bold tracking-wide text-zinc-800 shadow-sm ${
          compact ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs"
        }`}
      >
        PDF
      </span>
      <span
        className={`max-w-[14rem] font-medium text-zinc-600 ${
          compact ? "line-clamp-2 text-[11px]" : "line-clamp-3 text-sm"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function detailPdfSrc(item) {
  if (item.proofPdf && isPdfPath(item.proofPdf)) return item.proofPdf;
  if (isPdfPath(item.proofImage)) return item.proofImage;
  return "";
}

function ProofVisual({ item, sizes, hoverZoom = false, detail = false }) {
  if (!hasRealProof(item)) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-100 px-4 text-center">
        <span className="text-xs font-semibold tracking-[0.14em] text-zinc-400 uppercase">
          Certificate
        </span>
        <span className="max-w-[12rem] text-sm font-medium text-zinc-600">
          Proof image coming soon
        </span>
      </div>
    );
  }

  // Modal: prefer readable PDF when available.
  const pdfSrc = detail ? detailPdfSrc(item) : "";
  if (pdfSrc) {
    return (
      <iframe
        src={`${pdfSrc}#toolbar=0&navpanes=0`}
        title={item.title}
        className="absolute inset-0 h-full w-full border-0 bg-white"
      />
    );
  }

  const cover = item.proofImage || item.proofPdf || "";

  // Strip/thumbnail: image cover, or PDF placeholder if cover is PDF-only.
  if (isPdfPath(cover)) {
    return <PdfPreview title={item.title} compact />;
  }

  const position = item.proofPosition || "50% 42%";

  return (
    <Image
      src={cover}
      alt={`${item.title} certificate`}
      fill
      style={{ objectPosition: position }}
      className={`object-contain p-2 ${
        hoverZoom
          ? "transition-transform duration-500 ease-out group-hover/product:scale-[1.03]"
          : ""
      }`}
      sizes={sizes}
    />
  );
}

function repeatRow(items, times = 3) {
  return Array.from({ length: times }, (_, copy) =>
    items.map((item, index) => ({
      item,
      key: `${item.title}-${item.year}-${copy}-${index}`,
    })),
  ).flat();
}

function CertificateFrame({ item, onOpen, sizes }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group/product relative block h-64 w-[min(78vw,20rem)] shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left sm:h-80 sm:w-[24rem] md:h-96 md:w-[28rem]"
    >
      <div className="absolute inset-0 bg-zinc-50">
        <ProofVisual item={item} sizes={sizes} hoverZoom />
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 bg-zinc-900/0 px-4 text-center opacity-0 transition-[opacity,background-color] duration-300 group-hover/product:bg-zinc-900/40 group-hover/product:opacity-100">
        <span className="text-[11px] font-semibold tracking-[0.22em] text-white/70 uppercase">
          Certificate
        </span>
        <span className="line-clamp-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {item.title}
        </span>
        {!isTodo(item.year) ? (
          <span className="mt-1 text-xs font-medium tracking-wide text-white/75">
            {item.year}
          </span>
        ) : null}
      </div>
    </button>
  );
}

export default function AchievementsGallery({ featured = [], all = [] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setActive(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const visibleFeatured = featured.filter(
    (item) =>
      !isTodo(item.title) && !isTodo(item.issuer) && !isTodo(item.year),
  );

  const visibleAll = all.filter(
    (item) =>
      !isTodo(item.title) &&
      !isTodo(item.issuer) &&
      !isTodo(item.year) &&
      hasRealProof(item),
  );

  const stripSource =
    visibleAll.length > 0
      ? visibleAll
      : visibleFeatured.filter((item) => hasRealProof(item));

  const { topRow, bottomRow } = useMemo(() => {
    const mid = Math.ceil(stripSource.length / 2) || 1;
    const top = stripSource.slice(0, mid);
    const bottom = stripSource.slice(mid);
    return {
      topRow: repeatRow(top.length ? top : stripSource, 3),
      bottomRow: repeatRow(bottom.length ? bottom : stripSource, 3),
    };
  }, [stripSource]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xTop = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [48, -160],
  );
  const xBottom = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-48, 160],
  );

  if (visibleFeatured.length === 0 && visibleAll.length === 0) return null;

  const openItem = (item) => {
    setActive(item);
    setOpen(true);
  };

  const openAll = () => {
    setActive(null);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <div className="space-y-8">
      {stripSource.length > 0 ? (
        <div
          ref={sectionRef}
          className="relative -mx-[var(--page-px)] overflow-x-clip py-2"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          <motion.div
            className="mb-5 flex w-max gap-5 px-[var(--page-px)] md:mb-7 md:gap-7"
            style={{ x: xTop }}
          >
            {topRow.map(({ item, key }) => (
              <CertificateFrame
                key={key}
                item={item}
                onOpen={openItem}
                sizes="(max-width: 768px) 70vw, 400px"
              />
            ))}
          </motion.div>

          <motion.div
            className="flex w-max flex-row-reverse gap-5 px-[var(--page-px)] md:gap-7"
            style={{ x: xBottom }}
          >
            {bottomRow.map(({ item, key }) => (
              <CertificateFrame
                key={`b-${key}`}
                item={item}
                onOpen={openItem}
                sizes="(max-width: 768px) 70vw, 400px"
              />
            ))}
          </motion.div>
        </div>
      ) : null}

      {visibleAll.length > 0 ? (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={openAll}
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            View all certificates
          </button>
        </div>
      ) : null}

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/50 p-4 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label="Certificates gallery"
              onClick={close}
            >
              <div
                className="flex max-h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-200 bg-white px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium tracking-[0.16em] text-zinc-500 uppercase">
                      Certificates
                    </p>
                    <p className="truncate text-sm font-semibold text-zinc-900 sm:text-base">
                      {active ? active.title : "All certificates"}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg leading-none text-zinc-700 transition-transform hover:-translate-y-0.5 hover:border-zinc-500 active:translate-y-0"
                    aria-label="Close gallery"
                    onClick={close}
                  >
                    ×
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
                  {active ? (
                    <div className="space-y-3">
                      <div
                        className={`relative mx-auto w-full overflow-hidden rounded-xl bg-zinc-100 ${
                          detailPdfSrc(active)
                            ? "aspect-[3/4] max-h-[52vh]"
                            : "aspect-[4/3] max-h-[48vh]"
                        }`}
                      >
                        <ProofVisual item={active} sizes="60vw" detail />
                      </div>
                      <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                          {!isTodo(active.issuer) ? (
                            <p className="text-sm text-zinc-600">
                              {active.issuer}
                            </p>
                          ) : null}
                          {!isTodo(active.year) ? (
                            <p className="mt-1 text-xs font-medium tracking-wide text-zinc-400 uppercase">
                              {active.year}
                            </p>
                          ) : null}
                        </div>
                        <button
                          type="button"
                          className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900"
                          onClick={() => setActive(null)}
                        >
                          Back to all
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                      {visibleAll.map((item) => (
                        <button
                          key={`${item.title}-${item.year}-gallery`}
                          type="button"
                          className="group overflow-hidden rounded-xl border border-zinc-200 bg-white text-left transition-transform duration-200 hover:-translate-y-0.5 hover:border-zinc-300 active:translate-y-0"
                          onClick={() => setActive(item)}
                        >
                          <div className="relative aspect-[5/4] overflow-hidden bg-zinc-100">
                            <ProofVisual
                              item={item}
                              sizes="(max-width: 640px) 40vw, 160px"
                              hoverZoom
                            />
                          </div>
                          <div className="space-y-0.5 p-2">
                            <p className="line-clamp-2 text-[11px] font-semibold text-zinc-900 sm:text-xs">
                              {item.title}
                            </p>
                            {!isTodo(item.year) ? (
                              <p className="text-[10px] text-zinc-500">
                                {item.year}
                              </p>
                            ) : null}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
