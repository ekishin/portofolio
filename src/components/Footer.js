"use client";

import Link from "next/link";
import { contacts, profile } from "../data/portfolioData";
import { isTodo, visibleUrl } from "../lib/content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

function FooterLink({ href, children, external = false }) {
  const className =
    "group/link relative inline-flex text-sm font-medium text-zinc-900 transition-colors duration-200 hover:text-zinc-600 sm:text-base";

  const underline = (
    <span
      aria-hidden="true"
      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-zinc-400 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100"
    />
  );

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
        {underline}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {underline}
    </Link>
  );
}

export default function Footer() {
  const email = !isTodo(contacts.email) ? contacts.email : null;
  const linkedin = visibleUrl(contacts.linkedin) ? contacts.linkedin : null;
  const instagram = visibleUrl(contacts.instagram) ? contacts.instagram : null;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="mt-auto border-t border-zinc-200/80 bg-[var(--footer)]"
    >
      <div className="page-width grid gap-10 py-12 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.7fr))] md:gap-8 md:py-16">
        <div className="max-w-sm space-y-3">
          <p className="text-lg font-semibold tracking-tight text-zinc-900">
            {profile.name}
          </p>
          <p className="text-sm leading-6 text-zinc-600">
            Fullstack developer building reliable APIs, dashboards, and modern
            apps.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Navigate
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Connect
          </p>
          <ul className="space-y-3">
            {email ? (
              <li>
                <FooterLink href={`mailto:${email}`}>Email</FooterLink>
              </li>
            ) : null}
            {linkedin ? (
              <li>
                <FooterLink href={linkedin} external>
                  LinkedIn
                </FooterLink>
              </li>
            ) : null}
            {instagram ? (
              <li>
                <FooterLink href={instagram} external>
                  Instagram
                </FooterLink>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200/80 bg-[var(--footer)]">
        <div className="page-width flex items-center justify-between gap-4 py-5">
          <p className="text-xs text-zinc-500">
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
      </div>
    </footer>
  );
}
