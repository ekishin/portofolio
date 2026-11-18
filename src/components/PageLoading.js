export default function PageLoading() {
  return (
    <div
      className="page-width relative flex min-h-[60vh] flex-col gap-10 pt-14 pb-20 lg:pt-20 lg:pb-28"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900"
        />
        <span className="text-sm font-medium tracking-wide text-zinc-500">
          Loading
        </span>
      </div>

      <div className="space-y-4">
        <div className="h-10 w-full max-w-md animate-pulse rounded-xl bg-zinc-200/80" />
        <div className="h-4 w-full max-w-xl animate-pulse rounded-lg bg-zinc-200/60" />
        <div className="h-4 w-full max-w-lg animate-pulse rounded-lg bg-zinc-200/50" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white"
          >
            <div className="aspect-[16/10] animate-pulse bg-zinc-100" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-200/80" />
              <div className="h-3 w-full animate-pulse rounded bg-zinc-100" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-zinc-100" />
            </div>
          </div>
        ))}
      </div>

      <span className="sr-only">Loading page content</span>
    </div>
  );
}
