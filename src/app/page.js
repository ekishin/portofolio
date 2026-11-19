import Image from "next/image";
import EnterFade from "../components/EnterFade";
import FeaturedProjects from "../components/FeaturedProjects";
import HowIWork from "../components/HowIWork";
import Marquee from "../components/Marquee";
import SplitText from "../components/SplitText";
import Typewriter from "../components/Typewriter";
import {
  contacts,
  featuredProjects,
  howIWork,
  profile,
} from "../data/portfolioData";
import { isTodo, visibleUrl } from "../lib/content";

const heroTitles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
];

const heroBadges = [
  {
    label: profile.availability.status,
    className: "top-0 left-0 sm:-top-2 sm:-left-8 md:-left-12",
    delayClass: "",
  },
  {
    label: "10+ Web, Mobile, AI Projects",
    className: "top-[8%] right-0 sm:top-[4%] sm:-right-10 md:-right-14",
    delayClass: "floating-delay-1",
  },
  {
    label: "JavaScript main language",
    className: "bottom-[10%] left-0 sm:bottom-[10%] sm:-left-10 md:-left-14",
    delayClass: "floating-delay-2",
  },
  {
    label: profile.headline,
    className: "bottom-0 right-0 sm:-bottom-2 sm:-right-8 md:-right-12",
    delayClass: "floating-delay-3",
  },
];

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Home() {
  const socials = [
    { type: "email", href: visibleUrl(contacts.email) ? `mailto:${contacts.email}` : null, label: "Email" },
    { type: "instagram", href: visibleUrl(contacts.instagram), label: "Instagram" },
    { type: "linkedin", href: visibleUrl(contacts.linkedin), label: "LinkedIn" },
  ].filter((item) => item.href && !isTodo(item.href));

  return (
    <div className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.10),_transparent_55%),radial-gradient(ellipse_at_80%_20%,_rgba(24,24,27,0.06),_transparent_40%)]"
      />

      {/* Hero */}
      <section
        id="home"
        className="page-width relative grid cursor-default grid-cols-1 items-center gap-12 overflow-visible pt-20 pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14 md:pt-28 md:pb-8 lg:gap-16 xl:gap-20"
      >
        <div className="order-2 flex flex-col gap-2 md:order-1">
          <h1 className="type-display text-[2rem] text-zinc-900 sm:text-4xl md:text-5xl lg:text-7xl lg:leading-[1.05]">
            <SplitText as="span" className="inline" staggerDelay={0.05}>
              Hi, I&apos;m
            </SplitText>{" "}
            <EnterFade
              as="span"
              delay={0.22}
              className="inline bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent"
            >
              {profile.name}
            </EnterFade>
          </h1>

          <EnterFade delay={0.28}>
            <Typewriter
              words={heroTitles}
              className="min-h-[1.75rem] text-lg font-semibold tracking-tight text-zinc-900 sm:min-h-[2rem] sm:text-xl md:min-h-[2.5rem] md:text-2xl lg:text-3xl"
            />
          </EnterFade>

          <SplitText
            as="p"
            className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-zinc-600 sm:mt-4 md:text-lg"
            staggerDelay={0.028}
            delay={0.32}
            y={10}
          >
            {profile.bio}
          </SplitText>

          <EnterFade
            delay={0.48}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <a
              href="#featured-projects"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white transition-[transform,background-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98] sm:w-auto md:text-base"
            >
              Explore Project
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border-2 border-zinc-200 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-zinc-900 hover:bg-zinc-50 active:translate-y-0 active:scale-[0.98] sm:w-auto md:text-base"
            >
              Download CV
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                />
              </svg>
            </a>
          </EnterFade>

          {socials.length > 0 ? (
            <EnterFade
              delay={0.58}
              className="mt-10 border-t border-zinc-200 pt-6 sm:mt-12 sm:pt-8"
            >
              <span className="type-eyebrow mb-4 block text-xs text-zinc-500">
                Connect
              </span>
              <div className="flex flex-row gap-3 sm:gap-4">
                {socials.map((social) => (
                  <a
                    key={social.type}
                    href={social.href}
                    aria-label={social.label}
                    {...(social.type !== "email"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-zinc-200 p-3 text-zinc-900 transition-[transform,border-color,background-color,color] duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:scale-[0.97]"
                  >
                    <SocialIcon type={social.type} />
                  </a>
                ))}
              </div>
            </EnterFade>
          ) : null}
        </div>

        <EnterFade
          delay={0.18}
          className="relative order-1 flex w-full items-center justify-center px-1 sm:px-4 md:order-2 md:h-full md:justify-end lg:pr-2"
        >
          <div className="relative aspect-square w-full max-w-[18.5rem] sm:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[34rem]">
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-emerald-100/80 to-white opacity-50 blur-2xl" />
            <div className="group relative z-10 h-full w-full rounded-full border border-zinc-200 bg-white p-2 shadow-xl">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={544}
                height={368}
                priority
                className="h-full w-full cursor-pointer rounded-full object-cover object-[center_34%] grayscale transition-[filter,transform] duration-500 hover:grayscale-0 group-hover:grayscale-0"
                sizes="(max-width: 640px) 74vw, (max-width: 768px) 70vw, 368px"
              />
            </div>

            {heroBadges.map((badge) => (
              <div
                key={badge.label}
                className={`absolute z-20 ${badge.className}`}
              >
                <div
                  className={`floating max-w-[9.5rem] rounded-xl border border-zinc-200/90 bg-white/95 px-2.5 py-1.5 text-center text-[10px] leading-snug font-semibold text-zinc-900 shadow-[0_8px_20px_rgba(24,24,27,0.10)] backdrop-blur-sm sm:max-w-[13rem] sm:px-3.5 sm:py-2.5 sm:text-xs md:max-w-[14.5rem] md:px-4 md:py-2.5 md:text-sm ${badge.delayClass}`}
                >
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </EnterFade>
      </section>

      <Marquee text="Fullstack Developer" />

      <HowIWork steps={howIWork} />

      <FeaturedProjects projects={featuredProjects} />
    </div>
  );
}
