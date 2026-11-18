"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import { profile } from "../data/portfolioData";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

function NavLink({ href, label, active, onClick, mobile = false }) {
  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`flex min-h-11 items-center rounded-xl px-4 text-base transition-colors ${
          active
            ? "bg-zinc-100 font-semibold text-zinc-900"
            : "font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative py-1 text-sm font-medium transition-colors ${
        active ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
      }`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-zinc-900 transition-transform duration-200 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="page-width sticky top-0 z-50 pt-4">
      <div className="relative">
        <nav
          className="grid h-14 grid-cols-[1fr_auto] items-center gap-3 rounded-full border border-white/50 bg-white/45 px-4 shadow-[0_8px_30px_rgba(24,24,27,0.06)] backdrop-blur-md sm:h-16 sm:px-5 md:grid-cols-[1fr_auto_1fr]"
          aria-label="Main"
        >
          <Link
            href="/"
            className="justify-self-start transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            aria-label={`${profile.name} — Home`}
            onClick={() => setOpen(false)}
          >
            <BrandMark />
          </Link>

          <div className="hidden items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(link.href)}
              />
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98] md:inline-flex"
            >
              Read my CV
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-800 transition-transform duration-200 hover:-translate-y-0.5 hover:border-zinc-400 active:translate-y-0 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 block h-0.5 w-4 bg-current transition-transform duration-200 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 block h-0.5 w-4 bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-4 bg-current transition-transform duration-200 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {open ? (
          <>
            <button
              type="button"
              aria-label="Close menu backdrop"
              className="fixed inset-0 z-40 bg-zinc-950/25 md:hidden"
              onClick={() => setOpen(false)}
            />
            <div
              id="mobile-nav"
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 rounded-3xl border border-white/50 bg-white/70 p-3 shadow-[0_12px_40px_rgba(24,24,27,0.10)] backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    active={isActive(link.href)}
                    mobile
                    onClick={() => setOpen(false)}
                  />
                ))}
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                  onClick={() => setOpen(false)}
                >
                  Read my CV
                </a>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
