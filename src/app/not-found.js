import Link from "next/link";
import { profile } from "../data/portfolioData";

export default function NotFound() {
  return (
    <div className="page-width flex flex-col gap-5 py-24">
      <p className="text-sm font-medium tracking-[0.16em] text-zinc-500 uppercase">
        404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        Page not found
      </h1>
      <p className="max-w-xl text-base leading-7 text-zinc-600">
        This page does not exist, or the project does not have a detail page yet.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
        >
          Back to Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900"
        >
          View projects
        </Link>
      </div>
      <p className="text-sm text-zinc-400">{profile.name}</p>
    </div>
  );
}
