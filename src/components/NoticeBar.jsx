import { Megaphone } from "lucide-react";
import { useTheme } from "/src/components/ThemeContext";

export default function NoticeBar({ items }) {
  const { theme } = useTheme(); // ✅ call the hook

  return (
    <div
      className={`w-full backdrop-blur overflow-x-hidden
        ${
          theme === "light"
            ? "bg-blue-100/50 text-blue-900"
            : "bg-amber-200/10 text-amber-300"
        }`}
    >
      <div className="max-w-auto mx-auto px-4 sm:px-6 py-2 flex items-center gap-3">
        <Megaphone className="h-5 w-5 shrink-0 text-amber-600" />
        <div className="relative overflow-hidden whitespace-nowrap w-full">
          <div className="inline-block animate-marquee">
            {items.map((t, i) => (
              <span
                key={i}
                className="mx-8 inline-flex items-center gap-2 text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500/70" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
