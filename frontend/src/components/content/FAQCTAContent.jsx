import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: "Apakah B2D bisa handle konten untuk bisnis yang baru berdiri?",
    a: "Justru ini waktu terbaik membangun identitas yang benar dari awal. Kami mulai dengan audit kebutuhan brand untuk memastikan Anda tampil profesional sejak hari pertama."
  },
  {
    q: "Apakah saya harus menyediakan foto/video sendiri?",
    a: "Untuk paket dasar ya — kami bantu dengan brief foto/video. Untuk paket Growth ke atas, kami sediakan brief produksi yang bisa Anda eksekusi sendiri, atau tim kami yang turun dengan biaya tambahan."
  },
  {
    q: "Berapa lama untuk melihat hasil dari social media management?",
    a: "Tren engagement biasanya terlihat dalam 30-60 hari. Algoritma membutuhkan waktu untuk mempelajari pola audiens Anda. Konsistensi adalah kuncinya."
  },
  {
    q: "Apakah revisi desain termasuk dalam paket?",
    a: "Ya. Setiap konten mendapat 2x revisi minor. Untuk visual branding/identitas brand, kami menyediakan revisi hingga Anda merasa desain tersebut benar-benar mewakili brand Anda."
  },
  {
    q: "Bisakah saya hanya ambil layanan copywriting atau desain saja, tanpa paket bulanan?",
    a: "Bisa. Kami melayani proyek one-time untuk copywriting (landing page, company profile), infografis, dan desain grafis lainnya. Hubungi kami untuk quote spesifik."
  }
];

const DecorativeElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Large Gradient Orbs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6] opacity-10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EC4899] opacity-10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
    
    {/* Abstract SVGs */}
    <svg className="absolute top-20 left-20 w-32 h-32 text-[#00D4FF] opacity-20" viewBox="0 0 100 100" fill="none">
      <path d="M10,50 Q30,10 50,50 T90,50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
    
    <svg className="absolute bottom-20 right-20 w-40 h-40 text-[#EC4899] opacity-20" viewBox="0 0 100 100" fill="none">
      <path d="M20,80 L80,20 M20,20 L80,80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="20" r="3" fill="currentColor" />
      <circle cx="50" cy="80" r="3" fill="currentColor" />
      <circle cx="20" cy="50" r="3" fill="currentColor" />
      <circle cx="80" cy="50" r="3" fill="currentColor" />
    </svg>
  </div>
);

const FAQCTAContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0A1628] pt-24 pb-0 relative overflow-hidden">
      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-[#A0B4CC]">
            Informasi tambahan sebelum kita mulai berkreasi bersama.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0D1F3C]/60 border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#0D1F3C] transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#8B5CF6] shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-[#A0B4CC] leading-relaxed border-t border-[rgba(255,255,255,0.02)] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="relative border-t border-[rgba(255,255,255,0.05)] bg-[#050A18]">
        <DecorativeElements />

        <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EC4899]/10 mb-8 border border-[#EC4899]/20 relative">
              <Sparkles className="w-8 h-8 text-[#EC4899] animate-pulse" />
              <div className="absolute inset-0 bg-[#EC4899] blur-xl opacity-20 rounded-full" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sudah Waktunya Brand Anda <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899]">
                Diingat.
              </span>
            </h2>
            
            <p className="text-xl text-[#A0B4CC] mb-12 max-w-2xl mx-auto leading-relaxed">
              Konsultasi gratis 30 menit — kami analisis kehadiran digital Anda dan berikan rekomendasi konten konkret yang bisa langsung dieksekusi.
            </p>

            <a 
              href="https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20ingin%20Jadwalkan%20Konsultasi%20Kreatif."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-lg font-bold rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 group"
            >
              Jadwalkan Konsultasi
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQCTAContent;
