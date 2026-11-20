import Image from "next/image";
import EnterFade from "../components/EnterFade";
import FeaturedProjects from "../components/FeaturedProjects";
import HowIWork from "../components/HowIWork";
import Marquee from "../components/Marquee";
import SplitText from "../components/SplitText";
import Typewriter from "../components/Typewriter";
import {
  featuredProjects,
  howIWork,
  profile,
} from "../data/portfolioData";

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

export default function Home() {
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
            className="mt-7 flex w-full flex-col gap-3.5 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <a
              href="#featured-projects"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-zinc-900 px-9 py-4 text-base font-semibold text-white transition-[transform,background-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98] sm:w-auto md:min-h-14 md:px-10 md:text-lg"
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border-2 border-zinc-200 bg-white px-9 py-4 text-base font-semibold text-zinc-900 transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-zinc-900 hover:bg-zinc-50 active:translate-y-0 active:scale-[0.98] sm:w-auto md:min-h-14 md:px-10 md:text-lg"
            >
              View my CV
            </a>
          </EnterFade>
        </div>

        <EnterFade
          delay={0.18}
          className="relative order-1 flex w-full items-center justify-center px-2 sm:px-6 md:order-2 md:h-full md:justify-end md:pr-4 lg:pr-8 xl:pr-12"
        >
          <div className="relative aspect-square w-full max-w-[20.5rem] sm:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem]">
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-emerald-100/80 to-white opacity-50 blur-2xl" />
            <div className="group relative z-10 h-full w-full rounded-full border border-zinc-200 bg-white p-2 shadow-xl">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={576}
                height={576}
                priority
                className="h-full w-full cursor-pointer rounded-full object-cover object-[center_34%] grayscale transition-[filter,transform] duration-500 hover:grayscale-0 group-hover:grayscale-0"
                sizes="(max-width: 640px) 78vw, (max-width: 768px) 70vw, 420px"
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
