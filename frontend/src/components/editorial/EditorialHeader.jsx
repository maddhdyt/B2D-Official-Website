import React from "react";
import { motion } from "framer-motion";
import SectionIndex from "./SectionIndex";

export default function EditorialHeader({ index, indexTitle, titleLine1, titleLine2, align = "left", className = "" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: { y: "120%", rotate: 2 },
    visible: {
      y: "0%",
      rotate: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className={`relative flex flex-col gap-8 w-full ${align === "right" ? "items-end text-right" : "items-start text-left"} ${className}`}>
      {index && <SectionIndex index={index} title={indexTitle} />}
      
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white"
      >
        <div className="overflow-hidden pb-2">
          <motion.div variants={textVariants}>{titleLine1}</motion.div>
        </div>
        {titleLine2 && (
          <div className="overflow-hidden pb-2 text-[#94A3B8]">
            <motion.div variants={textVariants}>{titleLine2}</motion.div>
          </div>
        )}
      </motion.h2>
    </div>
  );
}
