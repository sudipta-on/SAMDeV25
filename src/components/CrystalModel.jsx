// src/components/CrystalModel.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CrystalModel({ src, alt }) {
  return (
    <div className="flex justify-center items-center w-full">
      <motion.img
        src={'/src/assets/crystal.png'}
        alt={alt}
        className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 rounded-xl shadow-lg dark:shadow-cyan-500/40"
        animate={{
          y: [0, -15, 0], // bounce motion
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1, // zoom on hover
          rotate: 2,  // slight tilt
        }}
      />
    </div>
  );
}
