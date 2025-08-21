export default function BackgroundOrbs() {
  return (
    <>
      {/* radial vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      {/* floating soft orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 dark:opacity-40 bg-amber-200/50 dark:bg-amber-800/15 float-slow" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 dark:opacity-40 bg-violet-200/50 dark:bg-violet-400/15 float-slow" />
      <div className="pointer-events-none absolute top-40 right-1/3 h-56 w-56 rounded-full blur-3xl opacity-20 dark:opacity-30 bg-sky-200/60 dark:bg-sky-400/10" />
    </>
  );
}
