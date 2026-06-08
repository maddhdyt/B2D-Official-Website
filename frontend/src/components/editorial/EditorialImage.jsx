import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EditorialImage({ src, alt, aspectRatio = "aspect-[4/5]", className = "" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect on the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full ${aspectRatio} ${className}`}>
      {/* Reveal mask animation */}
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[#050A18] z-10 origin-bottom"
        style={{ transformOrigin: "bottom" }}
      />
      
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out"
        style={{ y, scale }}
      />
    </div>
  );
}
