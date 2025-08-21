// src/components/Tile.jsx
import React from "react";

export default function Tile({ children, highlight = false }) {
  return (
    <div
      className={`flex flex-col justify-between h-full rounded-3xl p-6 backdrop-blur-md shadow-lg transition 
        ${highlight 
          ? "border-amber-400 shadow-[0_10px_40px_rgba(251,191,36,0.25)]" 
          : "border border-zinc-200 dark:border-zinc-800"}
        bg-white/70 dark:bg-zinc-900/70
        hover:scale-[1.02] hover:shadow-xl duration-300
      `}
    >
      {children}
    </div>
  );
}
