import Link from "next/link";
import { notFound } from "next/navigation";
import EnterFade from "../../../components/EnterFade";
import ProjectCaseStudy from "../../../components/ProjectCaseStudy";
import { Reveal } from "../../../components/Reveal";
import SafeImage from "../../../components/SafeImage";
import SplitText from "../../../components/SplitText";
import {
  detailProjects,
  getDetailProjectBySlug,
  getNextDetailProject,
  profile,
} from "../../../data/portfolioData";
import {
  isTodo,
  safeImageSrc,
  visibleList,
  visibleText,
  visibleUrl,
} from "../../../lib/content";

export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getDetailProjectBySlug(slug);
  if (!project) {
    return { title: `Project not found | ${profile.name}` };
  }

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getDetailProjectBySlug(slug);

  if (!project) notFound();

  const techStack = visibleList(project.techStack || []);
  const keyFeatures = visibleList(project.keyFeatures || []);
  const mockups = visibleList(project.mockups || []).map(safeImageSrc);
  const demoUrl = visibleUrl(project.demoUrl);
  const repoUrl = visibleUrl(project.repoUrl);
  const role = visibleText(project.role);
  const summary = visibleText(project.summary);
  const problem = visibleText(project.problem);
  const solutionPoints = Array.isArray(project.solution)
    ? visibleList(project.solution)
    : visibleText(project.solution)
      ? [visibleText(project.solution)]
      : [];
  const designSystemImage = visibleText(project.designSystemImage)
    ? safeImageSrc(project.designSystemImage)
    : null;
  const flowImage = visibleText(project.flowImage)
    ? safeImageSrc(project.flowImage)
    : null;
  const architectureImage = visibleText(project.architectureImage)
    ? safeImageSrc(project.architectureImage)
    : null;
  const nextProject = getNextDetailProject(project.slug);

  const heroMockup = mockups[0] || null;
  const architectureAllowed = new Set(["famspay", "simdik"]);
  const showArchitecture =
    architectureAllowed.has(project.slug) &&
    architectureImage &&
    architectureImage !== flowImage &&
    architectureImage !== designSystemImage;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_55%)]"
      />

      <article className="page-width relative pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18">
        <header className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-5">
            <EnterFade delay={0.02}>
              <Link
                href="/projects"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                <span aria-hidden="true">←</span>
                Back to Projects
              </Link>
            </EnterFade>

            <div className="space-y-3">
              <SplitText
                as="p"
                className="type-eyebrow text-zinc-500"
                staggerDelay={0.04}
                y={8}
              >
                {visibleText(project.date) || "Project"}
              </SplitText>

              <SplitText
                as="h1"
                className="type-display text-[1.85rem] text-zinc-900 sm:text-4xl md:text-5xl"
                delay={0.08}
                staggerDelay={0.045}
              >
                {project.title}
              </SplitText>

              {summary ? (
                <SplitText
                  as="p"
                  className="text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8"
                  delay={0.2}
                  staggerDelay={0.016}
                  y={10}
                >
                  {summary}
                </SplitText>
              ) : null}

              {role ? (
                <EnterFade delay={0.34}>
                  <p className="flex flex-wrap items-center gap-2.5 pt-1 text-sm">
                    <span className="font-medium text-zinc-500">Role:</span>
                    <span className="rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white">
                      {role}
                    </span>
                  </p>
                </EnterFade>
              ) : null}

              {visibleList(project.categories || []).length > 0 ? (
                <EnterFade delay={0.4} className="flex flex-wrap gap-2 pt-1">
                  {visibleList(project.categories || []).map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium tracking-wide text-zinc-600 capitalize"
                    >
                      {category}
                    </span>
                  ))}
                </EnterFade>
              ) : null}
            </div>

            {techStack.length > 0 ? (
              <EnterFade delay={0.46} className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </EnterFade>
            ) : null}

            <EnterFade
              delay={0.54}
              className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 sm:w-auto"
                >
                  Live Demo
                </a>
              ) : (
                <span
                  className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-zinc-900/40 px-5 py-3 text-sm font-medium text-white sm:w-auto"
                  title="Live demo coming soon"
                  aria-disabled="true"
                >
                  Live Demo
                </span>
              )}
              {repoUrl ? (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-transform hover:-translate-y-0.5 hover:border-zinc-400 active:translate-y-0 sm:w-auto"
                >
                  Source Code
                </a>
              ) : null}
            </EnterFade>
          </div>

          {heroMockup ? (
            <EnterFade delay={0.18} className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 sm:aspect-[16/11] sm:rounded-3xl lg:aspect-[4/3] lg:min-h-[22rem]">
                <SafeImage
                  src={heroMockup}
                  alt={`${project.title} UI`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </EnterFade>
          ) : null}
        </header>

        <ProjectCaseStudy
          title={project.title}
          problem={problem}
          solutionPoints={solutionPoints}
          designSystemImage={designSystemImage}
          architectureImage={architectureImage}
          showArchitecture={showArchitecture}
          flowImage={flowImage}
          keyFeatures={keyFeatures}
        />

        <Reveal className="mt-16 border-t border-zinc-200 pt-12 lg:mt-20 lg:pt-14">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            {nextProject && !isTodo(nextProject.title) ? (
              <div>
                <p className="type-eyebrow mb-5 text-zinc-500">Next project</p>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group/next relative block aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 sm:aspect-[16/9]"
                >
                  <SafeImage
                    src={
                      safeImageSrc(nextProject.mockups?.[0]) ||
                      "/images/placeholder.svg"
                    }
                    alt={`${nextProject.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover/next:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center bg-zinc-900/0 opacity-0 transition-[opacity,background-color] duration-300 group-hover/next:bg-zinc-900/45 group-hover/next:opacity-100">
                    <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap px-6">
                      {[0, 1].map((copy) => (
                        <span
                          key={copy}
                          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
                        >
                          {nextProject.title}
                          <span
                            className="mx-10 text-white/40"
                            aria-hidden="true"
                          >
                            ·
                          </span>
                          {nextProject.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <p className="type-eyebrow mb-2 text-zinc-500">Continue</p>
                <h2 className="type-display text-2xl text-zinc-900">
                  Explore more work
                </h2>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/projects"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0 active:scale-[0.98]"
              >
                All projects
              </Link>
            </div>
          </div>
        </Reveal>
      </article>
    </div>
  );
}
