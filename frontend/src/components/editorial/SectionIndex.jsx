import React from "react";
import { motion } from "framer-motion";

export default function SectionIndex({ index, title, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-1 text-[#94A3B8] uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium ${className}`}
    >
      <span>{index}</span>
      <span>{title}</span>
    </motion.div>
  );
}
