// src/components/RegistrationSection.jsx
import { useTheme } from "/src/components/ThemeContext";
// import BackgroundOrbs from "/src/components/BackgroundOrbs";
import { motion } from "framer-motion";

export default function RegistrationSection() {
  const { theme } = useTheme();

  const tiers = [
    {
      name: "International Faculty / Scientist / Corporate",
      price: "USD 250",
      features: ["Access to all sessions", "Workshops", "Proceedings"],
      cta: "Register (International Faculty)",
    },
    {
      name: "International Student",
      price: "USD 100",
      features: ["Access to all sessions", "Poster slot", "Proceedings"],
      cta: "Register (International Student)",
    },
    {
      name: "Indian Faculty / Scientist",
      price: "₹8,000",
      features: ["Talk/Poster option", "Workshops", "Proceedings"],
      cta: "Register (Indian Faculty)",
    },
    {
      name: "Indian Student",
      price: "₹3,000",
      features: ["Access to all sessions", "Poster slot", "Proceedings"],
      cta: "Register (Indian Student)",
    },
    {
      name: "Industry",
      price: "₹15,000",
      features: ["Expo booth", "Talk option", "VIP networking"],
      cta: "Register (Industry)",
    },
  ];

  return (
    <section id="registration" className="relative py-16 sm:py-20 ">
      {/* <BackgroundOrbs /> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6" >
        <h2
          className={`text-center text-3xl sm:text-4xl font-bold tracking-tight ${
            theme === "light" ? "text-red-600" : "text-blue-600"
          }`}
        >
          Registration
        </h2>

        {/* Tiles */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {tiers.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`flex flex-col justify-between rounded-2xl h-full p-6 border backdrop-blur-sm overflow-x-hidden
                ${
                  theme === "light"
                    ? "bg-zinc-400/10 border-zinc-200"
                    : "bg-zinc-900/60 border-zinc-700"
                }`}
            >
              {/* Top section */}
              <div className="flex-grow">
                <div className="flex items-center justify-between overflow-x-hidden">
                  <h3 className={`text-lg font-bold ${theme==="light"?"text-blue-900":"text-zinc-100"} `}>
                    {t.name}
                  </h3>
                  <div className={`text-xl font-extrabold ${theme==="light"?"text-amber-500":"text-amber-400"}`}>
                    {t.price}
                  </div>
                </div>

                {/* Features */}
                <ul className={`mt-4 space-y-2 text-sm ${theme==="light"?"text-zinc-600":"text-zinc-400"}`}>
                  {t.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 1px 5px rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={() =>
                window.open("https://www.google.com", "_blank")
              }
              className={`mt-6 w-full rounded-xl py-2 px-2 font-semibold transition border
                ${
                  theme === "light"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 border-zinc-200 text-white shadow-md hover:from-blue-600 hover:to-purple-600"
                    : "bg-gradient-to-r from-amber-500 to-rose-500 border-zinc-700 text-white hover:from-amber-600 hover:to-rose-600"
                }
              `}
            >
              {t.cta}
            </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
