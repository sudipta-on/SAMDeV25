// src/components/SpeakerTile.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "/src/components/ThemeContext";


export default function SpeakerTile({ photo, name, role, title, large = false }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // starts hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animates into place
      exit={{ opacity: 0, y: -50 }} // when scrolling out
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 10px rgba(59,130,246,0.3)" }}
      className={`
        ${large ? "w-72" : "w-64"} 
        ${large ? "h-[28rem]" : "h-[24rem]"} 
        ${theme==="light"? "bg-white border-gray-200":"bg-zinc-900 border-zinc-700"}  rounded-xl shadow-md 
        overflow-hidden flex flex-col items-center 
        transition-transform border 
      `}
    >
      {/* Square image */}
      <div className="w-full aspect-square overflow-hidden p-5">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        {role && (
          <h3 className="text-red-600 font-semibold text-xl mb-2">
            {role}
          </h3>
        )}
        <h4 className={`font-bold text-lg ${theme==="light"?"text-gray-900":"text-gray-100"} `}>
          {name}
        </h4>
        {title && (
          <p className={`mt-1 text-sm ${theme==="light"?"text-gray-900":"text-gray-100"}`}>
            {title}
          </p>
        )}
      </div>
    </motion.div>
  );
}
