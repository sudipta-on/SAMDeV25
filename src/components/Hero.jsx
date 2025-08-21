import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import BackgroundOrbs from "./BackgroundOrbs";
import { useTheme } from "/src/components/ThemeContext";



const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  const { theme } = useTheme(); 
  return (
      <section id="home" className="relative overflow-hidden">
      <BackgroundOrbs />
      <div className= "mx-auto max-w-screen px-5 sm:px-30 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs
                ${theme==="light"?"border-blue-400/40 bg-blue-100/50 text-blue-700":"bg-amber-400/10 text-amber-300"}`}>
                SAMDeV '25 · @IIT KGP
              </div>
              <h1 className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${theme==="light"?"text-zinc-900":"text-zinc-50"}`}>
                International Symposium on {" "}
                <span className={`${theme==="light"?"bg-gradient-to-r from-blue-500 to-purple-500":"bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500"} bg-clip-text text-transparent`}>
                  Advanced Materials
                </span>{" "}
                & <span className={`${theme==="light"?"bg-gradient-to-r from-blue-500 to-purple-500":"bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500"} bg-clip-text text-transparent`}>
                  DeVices
                </span>{" "}
              </h1>
              {/* <p className="mt-5 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl">
                International Symposium on Advanced Materials & Devices (ISAMD). Explore breakthroughs in synthesis,
                characterization, devices, and sustainable applications with a global community of researchers and innovators.
              </p> */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollToId("registration")}
                  className={`group inline-flex items-center justify-center rounded-2xl ${theme==="light"?"bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/20":"bg-gradient-to-r from-amber-500 to-rose-500 shadow-rose-500/20"} px-5 py-3 font-semibold text-white shadow-lg `}
                >
                  Register Now{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </button>
                <button
                  onClick={() => scrollToId("speakers")}
                  className={`inline-flex items-center justify-center font-semibold px-5 py-3 rounded-2xl border 
                    ${theme==="light"?" border-zinc-200 hover:bg-blue-400 text-zinc-800 hover:text-zinc-100":"border-zinc-800 hover:bg-amber-400 text-zinc-200 hover:text-zinc-800"} `}
                >
                  View Speakers
                </button>
              </div>

              {/* quick facts */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 backdrop-blur-sm ">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Dates</div>
                    <div className="font-semibold">Dec 19–20, 2025</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm p-4">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Venue</div>
                    <div className="font-semibold">IIT Kharagpur, India</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm p-4">
                  <Users className="h-5 w-5" />
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Hybrid</div>
                    <div className="font-semibold">On-site + Virtual</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Right */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            
          </motion.div> */}
        </div>
      </div>
    </section>
  );
  {/* </ParticlesBackground> */}
}
