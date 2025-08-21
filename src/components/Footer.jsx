export default function Footer() {
  return (
    <footer className="border-t border-amber-200 backdrop-blur-md py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 overflow-x-hidden">
          <div className="h-5 w-5 rounded-md bg-gradient-to-tr from-amber-400 to-rose-500" />
          © {new Date().getFullYear()} ISAMD. All rights reserved.
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">Last Updated: 21.08.2025</div>
      </div>
    </footer>
  );
}
