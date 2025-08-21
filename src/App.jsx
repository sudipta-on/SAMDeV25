import React, { useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import NoticeBar from "./components/NoticeBar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import CommitteeSection from "./components/Committee";
import SpeakersSection from "./components/Speakers";
import RegistrationSection from "./components/Registration";
import SponsorsSection from "./components/Sponsors";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTops";
import { ThemeProvider } from "./components/ThemeContext";
import ParticlesBackground from "./components/ParticleBG";
import ConferenceSchedule from "./components/Schedule";

// helper: smooth scroll
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("home");

  // init theme from storage / system
  useEffect(() => {
    const saved = localStorage.getItem("isamd-theme");
    if (saved) setTheme(saved);
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
    else setTheme("light");
  }, []);

  useEffect(() => {
    localStorage.setItem("isamd-theme", theme);
  }, [theme]);

  // active section via IntersectionObserver
  useEffect(() => {
    const ids = ["home", "about",  "speakers", "committee", "sponsors", "schedule", "registration", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.01 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const notices = [
    "Abstracts open Jul 15 · Full paper deadline Sep 10",
    "Early-bird registration closes Oct 05",
    "Limited travel grants for students",
    "Hybrid: On-site in Bengaluru + Virtual access",
  ];

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <GlobalStyles />
      <ParticlesBackground theme={theme}/>
      <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-[#0a0a0a] dark:to-black text-zinc-900 dark:text-zinc-50">
            <ThemeProvider>
        <NoticeBar items={notices} />
        <Navbar active={active} onLinkClick={scrollToId} theme={theme} setTheme={setTheme} />
        <main className="relative">
          <Hero />
          <AboutSection />
          <SpeakersSection />
          <CommitteeSection />
          <SponsorsSection />
          <ConferenceSchedule />
          <RegistrationSection />
          <ContactSection />

        </main>
        <Footer />
        <ScrollTop />
              </ThemeProvider>
      </div>
    </div>
  );
}
