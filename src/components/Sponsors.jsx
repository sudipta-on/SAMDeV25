// src/components/SponsorsSection.jsx
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function SponsorsSection() {
  const { theme } = useTheme();

  const sponsors = {
    Diamond: [
      { name: "NanoLab", logo: "/src/assets/Sponsors/IEEE.png" },
      { name: "IIT KGP", logo: "/src/assets/Sponsors/IITKGP.png", link: "https://photonx.com" },
      "MatSciHub",
    ],
    Platinum: [
      { name: "Graphenex", link: "https://graphenex.com" },
      "SolarNext",
      "MetaMaterials",
    ],
    Gold: [
      "QubitWorks",
      { name: "DeviceCo", logo: "/logos/deviceco.png", link: "https://deviceco.com" },
    ],
  };

  // Reusable seamless scroller
  const SponsorScroller = ({ items }) => (
    <div className="relative w-full h-28 ">
      {/* Fading masks left & right */}
      {/* <div className={`absolute left-0 top-0 h-full w-20 z-10 ${theme==="light"?"bg-gradient-to-r from-white/100 to-transparent":"bg-gradient-to-r from-black to-transparent"} pointer-events-none`} />
      <div className={`absolute right-0 top-0 h-full w-20 z-10 ${theme==="light"?"bg-gradient-to-r from-transparent to-white/100":"bg-gradient-to-r from-transparent to-black"} pointer-events-none`} /> */}

      <motion.div
        className="flex absolute space-x-8 px-16 py-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...items, ...items].map((s, i) => {
          const isObj = typeof s === "object";
          const hasLogo = isObj && s.logo;

          const tile = (
            <div
              key={i}
              className={`flex items-center justify-center px-6 rounded-2xl w-max
                ${theme === "light"
                  ? "border-zinc-200/50 text-zinc-700"
                  : "bg-zinc-800/60 border-zinc-700/50 text-zinc-200"}
                backdrop-blur border font-semibold shadow-md transition-transform
                hover:scale-105 ${hasLogo ? "max-w-[400px] py-3 h-20" : "max-w-[300px] h-20"}`}
            >
              {hasLogo ? (
                <img
                  src={s.logo}
                  alt={s.name || "Sponsor Logo"}
                  className="max-h-14 max-w-[400px] object-contain"
                />
              ) : (
                <span>{isObj ? s.name : s}</span>
              )}
            </div>
          );

          return isObj && s.link ? (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              {tile}
            </a>
          ) : (
            tile
          );
        })}
      </motion.div>
    </div>
  );

  return (
    <section id="sponsors" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
        <h2 className={`text-center text-3xl sm:text-4xl font-bold tracking-tight ${theme==="light"?"text-zinc-900":"text-zinc-100"}`}>
              Sponsors & <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Partners
                </span>{" "}
            </h2>

        {/* Diamond Sponsors */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center text-amber-500">
            Diamond Sponsors
          </h3>
          <div className="mt-4 overflow-x-hidden">
            <SponsorScroller items={sponsors.Diamond} />
          </div>
        </div>

        {/* Platinum Sponsors */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-sky-500">
            Platinum Sponsors
          </h3>
          <div className="mt-6 overflow-x-hidden">
            <SponsorScroller items={sponsors.Platinum} />
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-yellow-500">
            Gold Sponsors
          </h3>
          <div className="mt-4 overflow-x-hidden">
            <SponsorScroller items={sponsors.Gold} />
          </div>
        </div>

        <div className={`mt-10 text-sm text-center ${theme==="light"?"text-zinc-600":"text-zinc-400"} `}>
          Interested in sponsoring?{" "}
          <a href="#contact" className="underline hover:text-red-600 hover:text-base">
            Contact the organizers
          </a>.
        </div>
      </div>
    </section>
  );
}
