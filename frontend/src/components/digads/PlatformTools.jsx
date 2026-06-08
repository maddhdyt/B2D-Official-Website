import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
  "Meta Ads Manager", "Google Ads", "TikTok Ads Manager", 
  "Google Analytics 4", "Meta Pixel", "Google Tag Manager",
  "Meta Ads Manager", "Google Ads", "TikTok Ads Manager", 
  "Google Analytics 4", "Meta Pixel", "Google Tag Manager"
];

const tools = [
  "Canva Pro", "Figma", "CapCut", 
  "SEMrush", "Hotjar", "Looker Studio",
  "Canva Pro", "Figma", "CapCut", 
  "SEMrush", "Hotjar", "Looker Studio"
];

const PlatformTools = () => {
  return (
    <section className="py-20 bg-[#050A18] overflow-hidden border-y border-[rgba(0,212,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-white mb-4">
          Platform & Tools yang Kami Kuasai
        </h2>
        <p className="text-[#A0B4CC]">
          Didukung oleh ekosistem teknologi terbaik untuk hasil maksimal.
        </p>
      </div>

      <div className="relative flex flex-col gap-6">
        {/* Gradient Masks for smooth fade at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050A18] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050A18] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row 1 - Moves Left */}
        <div className="flex w-[200%]">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30
            }}
          >
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="font-unbounded whitespace-nowrap px-8 py-4 bg-[#0A1628] border border-[rgba(0,212,255,0.2)] rounded-full text-[#A0B4CC] font-medium text-lg shadow-[0_0_15px_rgba(0,212,255,0.05)]"
              >
                {platform}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 - Moves Right */}
        <div className="flex w-[200%] justify-end">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35
            }}
          >
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="font-unbounded whitespace-nowrap px-8 py-4 bg-[#0A1628] border border-[rgba(0,212,255,0.2)] rounded-full text-[#A0B4CC] font-medium text-lg shadow-[0_0_15px_rgba(0,212,255,0.05)]"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformTools;
