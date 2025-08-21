// src/components/ConferenceSchedule.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import { useTheme } from "/src/components/ThemeContext";

export default function ConferenceSchedule() {
  const { theme } = useTheme();

  // Conference start date/time
  const conferenceDate = new Date("2025-12-15T09:00:00");
  const [timeLeft, setTimeLeft] = useState({});
  const [showCountdown, setShowCountdown] = useState(true);

  // Inline JSON schedule data
  const scheduleData = {
    "Day 1": [
      {
        time: "09:00 - 10:00",
        title: "Inauguration & Welcome Address",
        speaker: "Prof. A. B. Sharma",
      },
      {
        time: "10:15 - 11:00",
        title: "Keynote: Advances in Quantum Materials",
        speaker: "Dr. Jane Doe",
      },
      {
        time: "11:15 - 12:30",
        title: "Technical Session I",
        speaker: "Chair: Prof. X. Y. Singh",
      },
    ],
    "Day 2": [
      {
        time: "09:30 - 10:30",
        title: "Plenary Lecture: Smart Materials for Energy",
        speaker: "Dr. John Smith",
      },
      {
        time: "10:45 - 12:00",
        title: "Technical Session II",
        speaker: "Chair: Dr. M. Patel",
      },
      {
        time: "14:00 - 16:00",
        title: "Poster Presentations",
        speaker: "Student Researchers",
      },
    ],
  };

  const [activeDay, setActiveDay] = useState(Object.keys(scheduleData)[0]);

  // Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = conferenceDate - now;

      if (diff <= 0) {
        setShowCountdown(false);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="schedule" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Countdown */}
        <AnimatePresence>
          {showCountdown && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={`mb-8 p-4 rounded-2xl text-center font-semibold shadow-lg border 
                ${theme === "light"
                  ? "bg-amber-100 text-amber-900 border-amber-300"
                  : "bg-amber-900/40 text-amber-200 border-amber-800"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Conference starts in:</span>
              </div>
              <div className="mt-2 flex justify-center gap-4 text-lg sm:text-xl font-bold">
                <span>{timeLeft.days}d</span>:
                <span>{timeLeft.hours}h</span>:
                <span>{timeLeft.minutes}m</span>:
                <span>{timeLeft.seconds}s</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title */}
        <h2 className={`text-center text-3xl sm:text-4xl font-bold tracking-tight mb-10  ${theme==="light"?"text-zinc-900":"text-zinc-100"} `}>
          Conference <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Schedule
                </span>{" "}
        </h2>
        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 rounded-xl font-medium transition ${
                activeDay === day
                  ? theme === "light"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-400 text-zinc-900"
                  : theme === "light"
                    ? "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {scheduleData[activeDay].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-5 rounded-xl border shadow-sm
                  ${theme === "light"
                    ? "bg-white/80 border-zinc-200"
                    : "bg-zinc-800/70 border-zinc-700"
                  }`}
              >
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <CalendarDays className="h-4 w-4" />
                  {item.time}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.speaker}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
