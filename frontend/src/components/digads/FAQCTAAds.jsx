import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    q: "Apakah B2D bisa mengelola iklan untuk bisnis yang baru mulai?",
    a: "Ya. Kami bantu dari nol: riset audiens, penentuan budget awal, dan strategy launch yang meminimalisir trial & error."
  },
  {
    q: "Berapa minimum budget iklan yang direkomendasikan?",
    a: "Minimum Rp 500.000/hari untuk hasil yang terukur. Kami optimalkan agar setiap rupiah bekerja maksimal dan menghasilkan ROI positif."
  },
  {
    q: "Apakah saya bisa lihat performa iklan secara real-time?",
    a: "Ya, paket Growth dan Scale mendapatkan akses dashboard live via Looker Studio. Anda bisa memantau metrik kapan saja dengan transparan."
  },
  {
    q: "Bagaimana jika hasil iklan tidak sesuai target?",
    a: "Kami lakukan review menyeluruh dan pivot strategy tanpa biaya tambahan. Transparansi adalah komitmen kami — jika ada yang tidak bekerja, kami sampaikan dan perbaiki."
  },
  {
    q: "Apakah kontraknya jangka panjang?",
    a: "Tidak. Berlangganan bulanan, bisa berhenti kapan saja dengan notifikasi 7 hari sebelum siklus bulan berikutnya."
  }
];

const FAQCTAAds = () => {
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
            Semua yang perlu Anda ketahui sebelum mulai bekerjasama dengan kami.
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
              className="bg-[#0D1F3C]/60 border border-[rgba(0,212,255,0.1)] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#0D1F3C] transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#00D4FF] shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
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
                    <div className="px-6 pb-5 text-[#A0B4CC] leading-relaxed border-t border-[rgba(0,212,255,0.05)] pt-4">
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
      <section className="relative z-10 border-t border-[rgba(0,212,255,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C] to-[#050A18] -z-10" />
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#00D4FF] opacity-[0.03] blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B35] opacity-[0.03] blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B35]/10 mb-8 border border-[#FF6B35]/20">
              <ShieldCheck className="w-8 h-8 text-[#FF6B35]" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hentikan Iklan yang <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C61]">Membuang Uang Anda</span>
            </h2>
            
            <p className="text-xl text-[#A0B4CC] mb-12 max-w-2xl mx-auto leading-relaxed">
              Audit iklan gratis — kami analisis campaign yang sedang berjalan dan berikan rekomendasi konkret, tanpa biaya.
            </p>

            <a 
              href="https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20ingin%20klaim%20Audit%20Iklan%20Gratis."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#050A18] text-lg font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 transition-all duration-300 group"
            >
              Klaim Audit Gratis Sekarang
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQCTAAds;
