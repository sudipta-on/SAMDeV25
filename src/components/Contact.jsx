// src/components/ContactSection.jsx
import { useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import { useTheme } from "/src/components/ThemeContext";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const mailtoLink = `mailto:edutoksmedia@gmail.com?subject=Contact from ${encodeURIComponent(
    name
  )}&body=From: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
    // simulate send
    setSuccessMsg("✅ Thanks! For reaching us. Someone will reach you soon.");
    e.target.reset();

    // hide after 4 seconds
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className={`text-center text-3xl sm:text-4xl font-bold tracking-tight ${theme==="light"?"text-zinc-900":"text-zinc-100"}`}>
              <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Contact
                </span>{" "}
            </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <motion.form
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onSubmit={handleSubmit}
            className={`rounded-3xl border p-6 backdrop-blur-md shadow-md
              ${isLight ? "bg-zinc-200/60 border-zinc-200" : "bg-zinc-900/70 border-zinc-700"}
            `}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={`text-sm ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                  Name
                </label>
                <input
                  name="name"
                  required
                  className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500
                    ${isLight ? "bg-white/90 border-zinc-200" : "bg-zinc-900/80 border-zinc-700"}
                  `}
                />
              </div>
              <div>
                <label className={`text-sm ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500
                    ${isLight ? "bg-white/90 border-zinc-200" : "bg-zinc-900/80 border-zinc-700"}
                  `}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className={`text-sm ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500
                  ${isLight ? "bg-white/90 border-zinc-200" : "bg-zinc-900/80 border-zinc-700"}
                `}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2 font-semibold shadow-md
                ${isLight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-amber-500 text-zinc-900 hover:bg-amber-600"}
              `}
            >
              Send <ArrowRight className="h-4 w-4" />
            </motion.button>

            {/* Success Message */}
            {successMsg && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-green-600 text-sm font-medium"
              >
                {successMsg}
              </motion.div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`rounded-3xl border p-10 px-15 backdrop-blur-md shadow-md
              ${isLight ? "bg-zinc-200/60 border-zinc-200" : "bg-zinc-900/60 border-zinc-700"}
            `}
          >
            <div className={`text-base font-semibold ${isLight ? "text-red-500" : "text-blue-500"}`}>
              Organized by:
            </div>
            <div className={`text-sm ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
              Department of Physics, IIT Kharagpur
            </div>

            <div className="mt-3 text-sm">
              <div className={`font-semibold ${isLight ? "text-red-500" : "text-blue-500"}`}>
                With support from:
              </div>
              <div className={`${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                Colleagues and Former students of Prof. Samit K. Ray
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />{" "}
                <a
                  href="mailto:isamd@iitkgp.ac.in"
                  className={`hover:underline ${isLight ? "text-blue-600" : "text-amber-400"}`}
                >
                  isamd@iitkgp.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" /> IIT Kharagpur, West Bengal, India
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
