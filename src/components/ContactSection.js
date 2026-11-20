"use client";

import { Reveal } from "./Reveal";
import { contacts } from "../data/portfolioData";
import { isTodo, visibleUrl } from "../lib/content";

function MailIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.75A1.75 1.75 0 0 1 5.75 5h12.5A1.75 1.75 0 0 1 20 6.75v10.5A1.75 1.75 0 0 1 18.25 19H5.75A1.75 1.75 0 0 1 4 17.25V6.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m5 7 7 5.5L19 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-zinc-900 px-5 text-sm font-semibold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98]";

const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold tracking-wide text-zinc-900 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-zinc-500 active:translate-y-0 active:scale-[0.98]";

export default function ContactSection() {
  const email = !isTodo(contacts.email) ? contacts.email : null;
  const linkedin = visibleUrl(contacts.linkedin) ? contacts.linkedin : null;
  const instagram = visibleUrl(contacts.instagram) ? contacts.instagram : null;

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="page-width relative grid items-center gap-10 pt-12 pb-14 sm:pt-14 sm:pb-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-12 md:pt-16 md:pb-20 lg:gap-16">
        <Reveal className="max-w-xl">
          <h2
            id="contact-heading"
            className="type-display text-[1.85rem] text-zinc-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
          >
            Let&apos;s Build Impactful Digital Products Together
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
            Available for Web Developer and Full-Stack internship roles, bringing
            hands-on experience in backend APIs, system architecture, and UI/UX
            design.
          </p>
        </Reveal>

        <Reveal
          delay={0.06}
          className="flex flex-row flex-wrap items-center gap-3 md:justify-end"
        >
          {email ? (
            <a href={`mailto:${email}`} className={primaryBtn}>
              <MailIcon />
              Send Email
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryBtn}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          ) : null}
          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryBtn}
            >
              <InstagramIcon />
              Instagram
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
