import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EditorialGrid from "../../editorial/EditorialGrid";

export default function ProcessMinimal() {
  const [activeIdx, setActiveIdx] = useState(0); // Membuka item pertama secara default

  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      duration: "1–3 hari",
      desc: "Kami tidak sekadar menulis kode. Fase ini didedikasikan untuk membedah model bisnis Anda, menganalisa kompetitor, dan merumuskan arsitektur teknis yang selaras dengan tujuan komersial perusahaan."
    },
    {
      num: "02",
      title: "Arsitektur & Desain",
      duration: "3–7 hari",
      desc: "Menerjemahkan strategi bisnis menjadi visual. Kami merumuskan wireframe, purwarupa interaktif (prototype), dan sistem antarmuka (UI) yang dirancang khusus untuk memaksimalkan rasio konversi (CRO)."
    },
    {
      num: "03",
      title: "Development & QA",
      duration: "1–4 minggu",
      desc: "Eksekusi teknis dengan standar industri B2B. Memanfaatkan tumpukan teknologi modern untuk memastikan keamanan tingkat tinggi, performa kilat, dan kode yang mudah dikembangkan di masa depan."
    },
    {
      num: "04",
      title: "Deployment & Support",
      duration: "ongoing",
      desc: "Peluncuran sistem tanpa hambatan (zero-downtime). Kami tidak hanya melakukan serah terima, namun juga mengawal stabilitas ekosistem digital Anda melalui pemeliharaan teknis berkelanjutan."
    }
  ];

  return (
    <EditorialGrid noTopLine>
      <div className="flex flex-col md:flex-row py-20 md:py-24 gap-16 md:gap-8">
        
        {/* Kolom Kiri: Sticky Title */}
        <div className="md:w-1/2 relative">
          <div className="sticky top-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
              Metodologi<br />Eksekusi
            </h2>
          </div>
        </div>

        {/* Kolom Kanan: Accordion List */}
        <div className="md:w-1/2 flex flex-col border-t border-white/20 mt-4 md:mt-0">
          {steps.map((step, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div 
                key={idx}
                className="border-b border-white/20 py-8 cursor-pointer group"
                onClick={() => setActiveIdx(isActive ? -1 : idx)}
              >
                {/* Header Accordion */}
                <div className="flex items-start justify-between pr-4 md:pr-8">
                  <div className="flex items-start gap-3">
                    <h3 className={`text-2xl md:text-3xl lg:text-4xl tracking-tight transition-colors duration-300 font-medium ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                      {step.title}
                    </h3>
                    <span className="text-white/40 text-xs md:text-sm font-mono mt-1 md:mt-2">
                      {step.num}
                    </span>
                  </div>
                  <div className="text-white/40 mt-1 md:mt-2 pl-4">
                    <span className="text-2xl font-light transition-transform duration-300 block transform">
                      {isActive ? '×' : '+'}
                    </span>
                  </div>
                </div>

                {/* Content Accordion */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pr-8 md:pr-12">
                        <p className="text-[#94A3B8] text-sm md:text-base font-light leading-relaxed">
                          {step.desc}
                        </p>
                        <span className="inline-block mt-4 text-[#3B82F6] text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
                          [ estimasi: {step.duration} ]
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </EditorialGrid>
  );
}
