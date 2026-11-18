export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl space-y-2 sm:mb-10">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-[0.16em] text-zinc-500 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-6 text-zinc-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
