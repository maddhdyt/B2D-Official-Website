import React from 'react';
import { motion } from 'framer-motion';

const MockupFeed = () => {
  return (
    <div className="bg-white rounded-[2rem] p-4 max-w-sm mx-auto shadow-2xl relative overflow-hidden ring-1 ring-black/5">
      {/* IG Header Mockup */}
      <div className="flex items-center justify-between mb-6 pt-2 px-2">
        <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-3">
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
          <div className="w-5 h-5 bg-gray-200 rounded-md" />
        </div>
      </div>
      
      {/* Profile Mockup */}
      <div className="flex items-center gap-4 mb-6 px-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] p-0.5">
          <div className="w-full h-full bg-white rounded-full border-2 border-white" />
        </div>
        <div className="flex-1 flex justify-between">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-8 h-4 bg-gray-200 rounded" />
              <div className="w-12 h-2 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Posts */}
      <div className="grid grid-cols-3 gap-1">
        {[
          'bg-gradient-to-br from-[#050A18] to-[#0D1F3C]', // Dark solid
          'bg-gradient-to-tr from-[#00D4FF]/20 to-[#8B5CF6]/20 bg-[#050A18]', // Gradient subtle
          'bg-[#050A18] flex items-center justify-center', // With text
          'bg-[#0D1F3C]', // Card color
          'bg-gradient-to-bl from-[#EC4899]/30 to-[#8B5CF6]/30 bg-[#050A18]', // Pinkish
          'bg-[#050A18]',
          'bg-gradient-to-t from-[#0D1F3C] to-[#00D4FF]/20', // Cyanish
          'bg-[#050A18]',
          'bg-[#0D1F3C] flex items-center justify-center'
        ].map((bgClass, i) => (
          <div key={i} className={`aspect-square ${bgClass} relative group cursor-pointer`}>
            {/* Overlay simulation */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            
            {/* Decorative elements to make it look like content */}
            {i === 2 && <div className="text-[#00D4FF] font-bold text-lg">Aa</div>}
            {i === 8 && <div className="w-6 h-6 border-2 border-[#EC4899] rounded-full" />}
            {i === 5 && <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-sm" />}
            {i === 0 && <div className="absolute inset-2 border border-white/10" />}
          </div>
        ))}
      </div>
    </div>
  );
};

const SocialMediaPreview = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#050A18] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text & Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Konten yang Membuat Scroll Berhenti
            </h2>
            <p className="text-[#A0B4CC] text-lg mb-12">
              Kami mendesain grid yang bukan cuma cantik secara estetik, tapi dioptimasi untuk engagement dan conversion.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Rata-rata Reach", value: "12.4K", color: "text-[#00D4FF]" },
                { label: "Engagement Rate", value: "6.8%", color: "text-[#8B5CF6]" },
                { label: "Follower Growth", value: "+23%", color: "text-[#EC4899]" }
              ].map((metric, i) => (
                <div key={i} className="bg-[#0A1628] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6">
                  <div className={`font-playfair text-4xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-[#A0B4CC]">{metric.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#4A6080] italic">
              * Angka berdasarkan rata-rata performa klien yang kami tangani dalam 3 bulan pertama.
            </p>
          </motion.div>

          {/* Right Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/20 via-[#8B5CF6]/20 to-[#EC4899]/20 blur-3xl rounded-full scale-90" />
            
            <MockupFeed />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SocialMediaPreview;
