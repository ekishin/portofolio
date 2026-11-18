export default function BrandMark({ className = "" }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-10 sm:w-10 ${className}`}
      aria-hidden="true"
    >
      <span className="text-[0.8rem] leading-none font-semibold tracking-tight sm:text-[0.9rem]">
        ES
      </span>
    </span>
  );
}
