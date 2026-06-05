import React from 'react';
import { motion } from 'framer-motion';

const identityElements = [
  {
    title: "LOGO DESIGN",
    desc: "Primary, secondary, dan icon mark",
    illustration: (
      <div className="flex items-center justify-center gap-6 h-32">
        <div className="w-16 h-16 rounded-full border-4 border-[#00D4FF] flex items-center justify-center relative">
          <div className="w-6 h-6 bg-[#00D4FF] rotate-45" />
        </div>
        <div className="w-12 h-12 bg-transparent border-4 border-[#A0B4CC] rotate-45" />
        <div className="w-8 h-8 rounded-full bg-[#EC4899]" />
      </div>
    )
  },
  {
    title: "COLOR PALETTE",
    desc: "Warna yang konsisten membangun pengenalan brand",
    illustration: (
      <div className="flex items-center justify-center gap-3 h-32">
        {['#050A18', '#0D1F3C', '#00D4FF', '#8B5CF6', '#EC4899'].map((color, i) => (
          <div 
            key={i} 
            className="w-10 h-10 rounded-full border-2 border-white/10 shadow-lg"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    )
  },
  {
    title: "TYPOGRAPHY",
    desc: "Heading + body font yang harmonis",
    illustration: (
      <div className="flex flex-col items-center justify-center h-32 text-white">
        <span className="text-5xl font-serif mb-2">Aa</span>
        <span className="text-2xl font-sans text-[#A0B4CC]">Aa</span>
      </div>
    )
  },
  {
    title: "BRAND VOICE",
    desc: "Tone of voice guideline untuk semua komunikasi",
    illustration: (
      <div className="flex items-center justify-center h-32">
        <div className="relative bg-[#0D1F3C] border border-[#8B5CF6]/30 p-4 rounded-2xl rounded-bl-none">
          <div className="w-24 h-2 bg-[#8B5CF6]/50 rounded mb-2" />
          <div className="w-16 h-2 bg-[#8B5CF6]/30 rounded" />
        </div>
      </div>
    )
  },
  {
    title: "VISUAL PATTERN",
    desc: "Elemen grafis pendukung identitas",
    illustration: (
      <div className="flex items-center justify-center h-32 overflow-hidden opacity-50">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(#00D4FF 2px, transparent 2px)',
          backgroundSize: '16px 16px'
        }} />
      </div>
    )
  },
  {
    title: "BRAND GUIDELINE",
    desc: "Panduan penggunaan elemen brand secara konsisten",
    illustration: (
      <div className="flex items-center justify-center h-32">
        <div className="w-20 h-24 bg-white/5 border border-white/10 rounded shadow-lg flex flex-col p-2">
          <div className="w-full h-8 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-sm mb-2" />
          <div className="w-1/2 h-1 bg-white/20 rounded mb-1" />
          <div className="w-3/4 h-1 bg-white/20 rounded" />
        </div>
      </div>
    )
  }
];

const BrandIdentityShowcase = () => {
  return (
    <section className="py-24 bg-[#0A1628] relative border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brand Identity yang Kami Bangun
          </h2>
          <p className="text-[#A0B4CC] text-lg max-w-2xl mx-auto">
            Identitas visual bukan hanya logo — ini bahasa visual bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {identityElements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#050A18] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden group hover:border-[#8B5CF6]/50 transition-colors duration-300"
            >
              <div className="bg-[#0D1F3C]/30 group-hover:bg-[#0D1F3C]/60 transition-colors duration-300">
                {item.illustration}
              </div>
              <div className="p-6 border-t border-[rgba(255,255,255,0.02)]">
                <h3 className="text-sm font-bold text-[#A0B4CC] tracking-widest uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandIdentityShowcase;
