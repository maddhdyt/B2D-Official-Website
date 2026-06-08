import React from "react";
import { motion } from "framer-motion";

export default function DisplayType({ children, className = "", delay = 0 }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      className={`text-[#94A3B8] font-light leading-[1.8] text-base md:text-lg max-w-2xl ${className}`}
    >
      {children}
    </motion.p>
  );
}
