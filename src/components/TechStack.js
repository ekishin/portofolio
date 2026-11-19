import { skills } from "../data/portfolioData";
import { getSkillIcon } from "../data/skillIcons";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const categories = [
  {
    key: "frontend",
    label: "Frontend",
    description: "Frameworks and libraries for building interactive user interfaces.",
  },
  {
    key: "backend",
    label: "Backend",
    description: "Server-side technologies and frameworks.",
  },
  {
    key: "database",
    label: "Databases & ORM",
    description: "Database management systems and data layers.",
  },
  {
    key: "tools",
    label: "Tools & Infrastructure",
    description: "Development tools, version control, and design.",
  },
];

function SkillCard({ name }) {
  const icon = getSkillIcon(name);

  return (
    <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-6 transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-zinc-400 hover:bg-zinc-100">
      <div className="pointer-events-none mb-4 flex h-12 w-12 items-center justify-center">
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={icon} alt="" className="h-full w-full object-contain" />
        ) : (
          <span className="text-lg font-semibold text-zinc-400">
            {name.slice(0, 1)}
          </span>
        )}
      </div>
      <span className="text-center text-sm font-semibold tracking-tight text-zinc-900">
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="flex flex-col gap-14 md:gap-16">
      {categories.map((category) => {
        const items = skills[category.key] || [];

        return (
          <div
            key={category.key}
            className="flex flex-col items-start gap-8 md:flex-row md:gap-16"
          >
            <Reveal className="md:w-1/3">
              <h3 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900">
                {category.label}
              </h3>
              <p className="text-sm font-medium leading-6 text-zinc-500">
                {category.description}
              </p>
            </Reveal>

            <RevealGroup
              className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:w-2/3 md:grid-cols-4"
              stagger={0.06}
            >
              {items.map((item) => (
                <RevealItem key={item}>
                  <SkillCard name={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        );
      })}
    </div>
  );
}
