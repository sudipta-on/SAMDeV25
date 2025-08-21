import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "/src/components/ThemeContext";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  const {theme} = useTheme()
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg border 
        ${theme==="light"?"bg-gradient-to-r from-blue-500 to-purple-500 border-zinc-200 text-white shadow-md"
          :"bg-gradient-to-r from-amber-500 to-rose-500 border-zinc-700 text-white"} backdrop-blur-mdx`}
      aria-label="Scroll to top"
    >
      <ArrowUpRight className="h-5 w-5" />
    </button>
  );
}
