"use client";

import Link from "next/link";
import SafeImage from "./SafeImage";
import { isTodo, visibleText, visibleUrl } from "../lib/content";

function cardClassName(interactive) {
  return `group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white ${
    interactive
      ? "transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-zinc-300 active:translate-y-0 active:scale-[0.99]"
      : ""
  }`;
}

function ProjectCardBody({
  project,
  size = "default",
  showRole = false,
  detailHref = null,
}) {
  const cover = project.mockups?.[0] || "/images/placeholder.svg";
  const techPreview = (project.techStack || []).slice(0, 4);
  const extraTech = Math.max((project.techStack || []).length - techPreview.length, 0);
  const featured = size === "featured";
  const role = showRole ? visibleText(project.role) : null;

  return (
    <>
      <div
        className={`relative overflow-hidden bg-zinc-100 ${
          featured
            ? "aspect-[16/10] sm:aspect-[16/9]"
            : "aspect-[16/10]"
        }`}
      >
        <SafeImage
          src={cover}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {role && !isTodo(role) ? (
          <span className="absolute top-4 left-4 z-10 max-w-[calc(100%-2rem)] truncate rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white">
            {role}
          </span>
        ) : null}
        {project.coverBadge ? (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/45">
            <span className="rounded-full border border-white/30 bg-white/95 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-zinc-900 uppercase shadow-sm">
              {project.coverBadge}
            </span>
          </div>
        ) : null}
      </div>

      <div
        className={`flex flex-1 flex-col gap-4 ${
          featured ? "p-5 sm:p-7" : "p-5 sm:p-6"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3
              className={`font-semibold tracking-tight text-zinc-900 ${
                featured ? "text-xl sm:text-2xl" : "text-lg"
              }`}
            >
              {project.title}
            </h3>
            <span className="shrink-0 text-xs font-medium tracking-wide text-zinc-400 uppercase">
              {String(project.order).padStart(2, "0")}
            </span>
          </div>
          <p
            className={`leading-6 text-zinc-600 ${
              featured
                ? "text-sm sm:text-base sm:leading-7 line-clamp-3"
                : "text-sm line-clamp-3"
            }`}
          >
            {project.summary}
          </p>
        </div>

        <div className={`mt-auto flex flex-wrap gap-2 ${detailHref ? "mb-1" : ""}`}>
          {techPreview.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700"
            >
              {tech}
            </span>
          ))}
          {extraTech > 0 ? (
            <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500">
              +{extraTech}
            </span>
          ) : null}
        </div>

        {detailHref ? (
          detailHref.startsWith("/") ? (
            <Link
              href={detailHref}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98] sm:w-auto sm:self-start"
            >
              Project Detail
            </Link>
          ) : (
            <a
              href={detailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98] sm:w-auto sm:self-start"
            >
              Project Detail
            </a>
          )
        ) : null}
      </div>
    </>
  );
}

export default function ProjectCard({
  project,
  size = "default",
  showRole = false,
  showDetailButton = false,
}) {
  const demoUrl = visibleUrl(project.demoUrl);
  const repoUrl = visibleUrl(project.repoUrl);
  const detailHref = project.hasDetailPage
    ? `/projects/${project.slug}`
    : null;
  const externalUrl = demoUrl || repoUrl;

  if (showDetailButton) {
    const href = detailHref || externalUrl;
    return (
      <div className={cardClassName(Boolean(href))}>
        <ProjectCardBody
          project={project}
          size={size}
          showRole={showRole}
          detailHref={href}
        />
      </div>
    );
  }

  const body = (
    <ProjectCardBody project={project} size={size} showRole={showRole} />
  );

  if (detailHref) {
    return (
      <Link href={detailHref} className={cardClassName(true)}>
        {body}
      </Link>
    );
  }

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName(true)}
      >
        {body}
      </a>
    );
  }

  return <div className={cardClassName(false)}>{body}</div>;
}
