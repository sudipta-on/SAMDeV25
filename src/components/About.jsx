import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ProfRayPhoto from "/src/assets/images/samit_ray.jpg"; 
import { useTheme } from "/src/components/ThemeContext";


const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function AboutSection() {
  const { theme } = useTheme();
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
        {/* Top Grid */}
        <div className={`grid lg:grid-cols-3 gap-8 items-start backdrop-blur-md rounded-3xl p-10 `} style={{
    background:
      theme === "light"
        ? "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bfdbfe 100%)"
        : "linear-gradient(135deg, rgba(20,20,30,0.8), rgba(59,130,246,0.2), rgba(139,92,246,0.2))",
  }}>
          
          {/* Main About */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${theme==="light"?"text-zinc-900":"text-zinc-100"}`}>
              About the <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Symposium
                </span>{" "}
            </h2>
            <p className={`${theme==="light"?"text-zinc-900":"text-zinc-300"}  max-w-3xl`}>
              ISAMD brings together leading experts, early-career researchers, and industry to discuss advances across
              materials synthesis, nano/micro fabrication, quantum & energy materials, optoelectronics, and device
              integration. The program spans plenary talks, invited sessions, posters, tutorials, and industry
              showcases.
            </p>

            {/* Glassy Info Cards with Hover Effects */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Conference Themes", desc: "• Advanced Materials & Device Modelling and Simulation\n• Quantum Materials and Devices\n• Optoelectronic and Photonic Technologies\n• Electronic Sensors and Emerging Functional Devices" },
                { title: "Conference Highlights", desc: "• Plenary and invited talks by eminent national and international experts\n• Technical sessions on emerging topics in materials science and device engineering\n• Interactive panel discussions and networking opportunities\n• Industrial exhibitions and sponsorship showcases" },
              ].map((c, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(83, 114, 165, 0.4)" }}
                  className={`rounded-3xl p-5 border ${theme==="light"? "border-white/20 bg-white/40":"bg-zinc-900/40 border-zinc-700/30"} backdrop-blur-md shadow-lg transition-transform`}
                >
                  <div className={`font-semibold ${theme==="light"?"text-zinc-900":"text-zinc-100"}`}>{c.title}</div>
                  <div className={`mt-2 text-sm whitespace-pre-line ${theme==="light"?"text-zinc-700":"text-zinc-300"}`}>{c.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
              className={`rounded-3xl border ${theme==="light"? "border-zinc-900/40 bg-white/40":"bg-zinc-900/40 border-zinc-700/80"} p-6 backdrop-blur-md shadow-lg transition-transform`}
            >
              <div className={`text-center font-bold text-lg ${theme==="dark"?"text-white":"text-red-600 underline decoration-from-font"}`}>Important Dates</div>
              <ul className={`mt-3 space-y-3 text-sm ${theme==="light"?"text-zinc-700":"text-zinc-300"}`}>
                {[
                  ["Paper Submission Deadline", "20 September 2025"],
                  ["Registration Opens", "1 October 2025"],
                  ["Registration Closes", "20 October 2025"],
                  ["Symposium", "Dec 12–14, 2025"],
                ].map(([label, val], i) => (
                  <li
                    key={i}
                    className={`flex items-center justify-between rounded-xl border ${theme==="dark"?"border-white/30":"border-zinc-700/30"} px-3 py-2`}
                  >
                    <span>{label}</span>
                    <span className="font-semibold">{val}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToId("registration")}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 py-2 font-semibold hover:scale-105 transition-transform"
              >
                Register <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* About Prof. Samit Kumar Ray */}
        <motion.div
          className={`mt-10 flex flex-col lg:flex-row items-center gap-8 rounded-2xl border ${theme==="light"?"border-zinc-100":"border-zinc-800"} backdrop-blur-sm p-4`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={ProfRayPhoto}
            alt="Prof. Samit Kumar Ray"
            className="w-64 h-64 object-cover rounded-2xl border border-white/20 dark:border-zinc-700/30 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.4)" }}
          />
          <div className="flex-1 space-y-4">
            <h3 className={`text-2xl font-bold ${theme==="light"?"text-zinc-900":"text-zinc-100"} `}>
              About <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Prof. Samit Kumar Ray
                </span>{" "}</h3>
            <p className={`${theme==="light"?"text-zinc-900":"text-zinc-100"}`}>
              Prof. Samit Kumar Ray, INAE Chair Professor at the Department of Physics, IIT Kharagpur, has served the
              scientific community in multiple leadership roles, including Director of S.N. Bose National Centre for Basic
              Sciences, Head of the Department of Physics at IIT Kharagpur, and founder Head of the School of Nanoscience
              and Technology.
            </p>
            <p className={`${theme==="light"?"text-zinc-900":"text-zinc-100"}`}>
              With a career spanning over three decades, Prof. Ray has made remarkable contributions to applied physics,
              materials science, and device technology. His research encompasses photonic, optoelectronic, photovoltaic,
              sensor, and memory devices based on nanostructures and hybrid materials, covering a wide range from
              Group-IV semiconductors to perovskites and 2D materials.
            </p>
            <p className={`${theme==="light"?"text-zinc-900":"text-zinc-100"}`}>
              He has published over 300 peer-reviewed research papers, supervised 35 Ph.D. students, authored books and
              patents, and actively contributed to national scientific committees.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
