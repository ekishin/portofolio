import { skills } from "../data/portfolioData";
import { getSkillIcon } from "../data/skillIcons";

const skillLogos = Object.values(skills)
  .flat()
  .map((name) => ({ name, src: getSkillIcon(name) }))
  .filter((item) => item.src)
  .filter(
    (item, index, list) =>
      list.findIndex((other) => other.src === item.src) === index,
  );

function TextMarqueeRow({ text }) {
  const items = Array.from({ length: 8 }, (_, index) => (
    <span
      key={`${text}-${index}`}
      className="shrink-0 tracking-tighter"
    >
      {text}&nbsp;
    </span>
  ));

  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex w-max items-center whitespace-nowrap text-center font-sans text-[2.1rem] leading-none font-bold tracking-[-0.03em] text-zinc-300 md:text-[2.9rem]">
        <div className="flex">{items}</div>
        <div className="flex" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}

function LogoMarqueeRow({ logos }) {
  const renderStrip = (suffix) => (
    <div className="flex items-center gap-9 px-5 md:gap-11 md:px-6">
      {logos.map((logo) => (
        <div
          key={`${suffix}-${logo.name}`}
          className="marquee-logo"
          title={logo.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt="" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden py-2.5 md:py-3">
      <div className="marquee-track marquee-reverse flex w-max items-center">
        {renderStrip("a")}
        <div aria-hidden="true">{renderStrip("b")}</div>
      </div>
    </div>
  );
}

export default function Marquee({ text = "Fullstack Developer" }) {
  return (
    <div className="relative mt-4 pb-2 md:mt-5 md:pb-0">
      <section aria-hidden="true">
        <TextMarqueeRow text={text} />
        <LogoMarqueeRow logos={skillLogos} />
      </section>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[var(--background)] md:h-20"
      />
    </div>
  );
}
