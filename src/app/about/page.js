import Image from "next/image";
import AchievementsGallery from "../../components/AchievementsGallery";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import { Reveal } from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import {
  about,
  achievements,
  experience,
  featuredAchievements,
  profile,
} from "../../data/portfolioData";
import { isTodo, visibleText } from "../../lib/content";

export const metadata = {
  title: `About | ${profile.name}`,
  description: about.whoAmI,
};

export default function AboutPage() {
  const visibleExperience = experience.filter(
    (item) =>
      !isTodo(item.role) &&
      !isTodo(item.org) &&
      !isTodo(item.period) &&
      !isTodo(item.description),
  );

  const personalDetails = (about.personalDetails || []).filter(
    (item) => !isTodo(item.value),
  );

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_55%)]"
      />

      <div className="page-width relative pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
        <section className="mb-14 sm:mb-16 lg:mb-20">
          <Reveal className="mb-8 sm:mb-10 md:mb-12">
            <h1 className="type-display text-[2rem] text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl">
              About Me
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="order-1 lg:col-span-5" delay={0.04}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-100 sm:max-w-md sm:rounded-3xl lg:max-w-none">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 420px"
                />
              </div>
            </Reveal>

            <div className="order-2 flex flex-col gap-8 sm:gap-10 lg:col-span-7 lg:gap-12">
              {visibleText(about.whoAmI) ? (
                <Reveal delay={0.06}>
                  <p className="text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
                    {about.whoAmI}
                  </p>
                </Reveal>
              ) : null}

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10">
                {visibleText(about.approach) ? (
                  <Reveal delay={0.08}>
                    <h2 className="type-eyebrow mb-3 text-xs text-zinc-500">
                      Approach
                    </h2>
                    <p className="text-base leading-7 text-zinc-600">
                      {about.approach}
                    </p>
                  </Reveal>
                ) : null}

                {visibleText(about.lookingFor) ? (
                  <Reveal delay={0.1}>
                    <h2 className="type-eyebrow mb-3 text-xs text-zinc-500">
                      Looking for
                    </h2>
                    <p className="text-base leading-7 text-zinc-600">
                      {about.lookingFor}
                    </p>
                  </Reveal>
                ) : null}
              </div>

              {personalDetails.length > 0 ? (
                <Reveal delay={0.12}>
                  <dl className="grid grid-cols-1 gap-x-10 gap-y-5 border-t border-zinc-200 pt-7 sm:grid-cols-2 sm:pt-8">
                    {personalDetails.map((item) => (
                      <div key={item.label}>
                        <dt className="type-eyebrow text-xs text-zinc-500">
                          {item.label}
                        </dt>
                        <dd className="mt-1.5 text-base font-medium break-words text-zinc-900">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ) : null}
            </div>
          </div>
        </section>

        {visibleExperience.length > 0 ? (
          <section className="mb-14 border-t border-zinc-200 pt-12 sm:mb-16 sm:pt-16 lg:mb-20 lg:pt-20">
            <Reveal>
              <SectionHeading eyebrow="Career path" title="Experience" />
            </Reveal>
            <Reveal delay={0.06}>
              <ExperienceTimeline items={visibleExperience} />
            </Reveal>
          </section>
        ) : null}

        <section
          id="achievements"
          className="border-t border-zinc-200 pt-12 sm:pt-16 lg:pt-20"
        >
          <Reveal>
            <SectionHeading eyebrow="Proof" title="Achievements" />
          </Reveal>
          <Reveal delay={0.08}>
            <AchievementsGallery
              featured={featuredAchievements}
              all={achievements}
            />
          </Reveal>
        </section>
      </div>
    </div>
  );
}
