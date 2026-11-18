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

      <div className="page-width relative pt-14 pb-20 lg:pt-20 lg:pb-28">
        <section className="mb-16 lg:mb-20">
          <Reveal className="mb-10 md:mb-12" animateOnMount>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              About Me
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="order-1 lg:col-span-5" animateOnMount>
              <div className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-zinc-100 lg:max-w-none">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </Reveal>

            <div className="order-2 flex flex-col gap-10 lg:col-span-7 lg:gap-12">
              {visibleText(about.whoAmI) ? (
                <Reveal animateOnMount>
                  <p className="text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
                    {about.whoAmI}
                  </p>
                </Reveal>
              ) : null}

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                {visibleText(about.approach) ? (
                  <Reveal animateOnMount>
                    <h2 className="mb-3 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                      Approach
                    </h2>
                    <p className="text-base leading-7 text-zinc-600">
                      {about.approach}
                    </p>
                  </Reveal>
                ) : null}

                {visibleText(about.lookingFor) ? (
                  <Reveal animateOnMount>
                    <h2 className="mb-3 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
                      Looking for
                    </h2>
                    <p className="text-base leading-7 text-zinc-600">
                      {about.lookingFor}
                    </p>
                  </Reveal>
                ) : null}
              </div>

              {personalDetails.length > 0 ? (
                <Reveal animateOnMount>
                  <dl className="grid grid-cols-1 gap-x-10 gap-y-5 border-t border-zinc-200 pt-8 sm:grid-cols-2">
                    {personalDetails.map((item) => (
                      <div key={item.label}>
                        <dt className="text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                          {item.label}
                        </dt>
                        <dd className="mt-1.5 text-base font-medium text-zinc-900">
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
          <section className="mb-16 border-t border-zinc-200 pt-16 lg:mb-20 lg:pt-20">
            <Reveal>
              <SectionHeading eyebrow="Career path" title="Experience" />
            </Reveal>
            <Reveal>
              <ExperienceTimeline items={visibleExperience} />
            </Reveal>
          </section>
        ) : null}

        <section id="achievements" className="border-t border-zinc-200 pt-16 lg:pt-20">
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
