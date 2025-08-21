import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "/src/components/ThemeContext";

export default function Navbar({ active, onLinkClick }) {
  const [open, setOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(active);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "speakers", label: "Speakers" },
    { id: "committee", label: "Committee" },
    { id: "sponsors", label: "Sponsors" },
    { id: "schedule", label: "Schedule" },
    { id: "registration", label: "Registration" },
    { id: "contact", label: "Contact" },
  ];

  // ensure html dark/light class updates
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // scroll-spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for navbar
      let current = active;

      for (let i = 0; i < links.length; i++) {
        const section = document.getElementById(links[i].id);
        if (section && scrollPos >= section.offsetTop) {
          current = links[i].id;
        }
      }
      setCurrentActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <div className="sticky top-15 z-50 w-full">
      <div className="mx-auto max-w-screen px-4 sm:px-8 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl border backdrop-blur px-4 py-3 ${
                theme === "light" ? "border-zinc-200/70 " : " border-none"
                }`}>
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-xl 
                ${theme==="dark"? "bg-gradient-to-tr from-amber-400 to-rose-500":"bg-gradient-to-tr from-blue-400 to-purple-500"} shadow-lg`} />
            <div className={`font-semibold tracking-tight ${
                theme === "light" ? "text-blue-300" : "text-white"
                }`}>
              SAMDeV '25
            </div>
            <span className={`ml-2 hidden sm:inline text-xs ${
                theme === "light" ? "text-orange-300" : "text-zinc-300"
                }`}>
              International Symposium on <br /> Advanced Materials & Devices
            </span>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
  <button
    key={l.id}
    onClick={() => onLinkClick(l.id)}
    className={`relative px-3 py-2 font-medium transition-colors
      ${
        currentActive === l.id
          ? theme ==="light"? "text-blue-600 text-base":"text-amber-400 text-base" // colored text when active
          : theme ==="light"? "text-zinc-700 hover:text-zinc-900 text-sm":"text-sm text-zinc-300 hover:text-blue-300"
      }`}
  >
    {l.label}
    {currentActive === l.id && (
      <span className={`absolute left-0 right-0 -bottom-1 h-0.5 ${ theme==="light" ? "bg-blue-600": "bg-amber-400"} rounded-full text-base
      `}></span>
    )}
  </button>
))}
          </div>

          {/* Right: Theme + Mobile */}
          <div className="flex items-center gap-2">
            <button
    onClick={toggleTheme}
    className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300
      ${theme === "dark" 
        ? "bg-gradient-to-tr from-amber-400 to-rose-400 text-white hover:bg-zinc-700" 
        : "bg-gradient-to-tr from-blue-400 to-purple-600 text-indigo-100 hover:bg-indigo-700"} `}
    aria-label="Toggle theme"
  >
    {theme === "dark" ? (
      <Sun className="h-4 w-4" />
    ) : (
      <Moon className="h-4 w-4" />
    )}
    <span className="hidden sm:inline">
      {theme === "dark" ? "Light" : "Dark"}
    </span>
  </button>

            <button
              onClick={() => setOpen(true)}
              className={`md:hidden inline-flex items-center rounded-xl p-2 
                ${theme === "light" ? "bg-gradient-to-tr from-blue-400 to-purple-500 shadow-lg text-white" : ""}`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/10 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className={`absolute right-0 top-0 h-full w-72 sm:w-80 bg-zinc-900 p-4`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-xl text-zinc-900 dark:text-white">Menu</div>
              <button onClick={() => setOpen(false)}>
                <X className="h-5 w-5 text-zinc-100" />
              </button>
            </div>
            <div className="mt-4 grid gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    setOpen(false);
                    onLinkClick(l.id);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors ${
                    currentActive === l.id
                      ? "text-white text-lg"
                      : "text-sm text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
