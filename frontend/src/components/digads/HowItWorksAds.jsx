import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    step: "01",
    title: "Audit & Discovery",
    time: "Minggu 1",
    desc: "Menganalisis histori iklan, riset audiens target, dan membedah strategi kompetitor.",
    deliverable: "Audit Report & Buyer Persona"
  },
  {
    step: "02",
    title: "Strategy & Creative",
    time: "Minggu 1-2",
    desc: "Menyusun angle copywriting, visual brief, dan merancang map targeting audiens.",
    deliverable: "Ad Copy & Creative Brief"
  },
  {
    step: "03",
    title: "Setup & Launch",
    time: "Minggu 2",
    desc: "Konfigurasi campaign, pemasangan pixel tracking, UTM, dan peluncuran iklan.",
    deliverable: "Live Campaign & Tracking Setup"
  },
  {
    step: "04",
    title: "Optimasi Rutin",
    time: "Setiap Minggu",
    desc: "A/B testing, penyesuaian bid, mematikan iklan boncos, dan scaling winner ads.",
    deliverable: "Weekly Optimization Log"
  },
  {
    step: "05",
    title: "Laporan Bulanan",
    time: "Akhir Bulan",
    desc: "Penyajian data performa yang transparan beserta rekomendasi strategi bulan depan.",
    deliverable: "Dashboard Report & Action Plan"
  }
];

const HowItWorksAds = () => {
  return (
    <section className="py-24 bg-[#0A1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cara Kami Mengelola Iklan Anda
          </h2>
          <p className="text-[#A0B4CC] text-lg">
            Proses sistematis berbasis data untuk memastikan setiap Rupiah yang Anda keluarkan memberikan ROI maksimal.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />
          
          {/* Mobile connecting line */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-[39px] w-[2px] bg-gradient-to-b from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex lg:flex-col gap-6 lg:gap-0"
              >
                {/* Step Number with Glow */}
                <div className="relative shrink-0 lg:mx-auto lg:mb-8">
                  <div className="w-20 h-20 bg-[#050A18] border-2 border-[#00D4FF] rounded-2xl flex flex-col items-center justify-center relative z-10 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                    <span className="text-2xl font-bold text-[#00D4FF] leading-none">{item.step}</span>
                  </div>
                  {/* Decorative glow behind number */}
                  <div className="absolute inset-0 bg-[#00D4FF] blur-xl opacity-20 rounded-2xl" />
                </div>

                {/* Content */}
                <div className="pt-2 lg:pt-0 lg:text-center">
                  <div className="text-[#FF6B35] text-sm font-bold tracking-wider uppercase mb-2">
                    {item.time}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#A0B4CC] text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  
                  <div className="bg-[#0D1F3C] border border-[rgba(0,212,255,0.1)] rounded-lg p-3 inline-block lg:block text-left">
                    <span className="block text-xs text-[#4A6080] uppercase tracking-wider mb-1">Deliverable:</span>
                    <span className="text-sm font-medium text-white">{item.deliverable}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksAds;
