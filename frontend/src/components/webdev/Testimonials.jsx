import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner PT. Maju Bersama, Jakarta",
    content: "B2D membangun website company profile kami dalam 5 hari. Hasilnya jauh melampaui ekspektasi — profesional, cepat, dan pelanggan kami langsung bertanya dari mana kami buat.",
    initials: "BS",
  },
  {
    name: "Sari Dewi",
    role: "Digital Marketing Manager, Surabaya",
    content: "Landing page yang dibuat B2D meningkatkan konversi iklan kami 3x lipat dalam bulan pertama. Worth every rupiah.",
    initials: "SD",
  },
  {
    name: "Rizky Pratama",
    role: "CEO Startup Fintech, Bandung",
    content: "CRM custom dari B2D menggantikan 4 spreadsheet yang biasa kami pakai. Tim sales kami sekarang 2x lebih produktif.",
    initials: "RP",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#050A18]">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-unbounded text-3xl md:text-5xl font-bold text-white"
          >
            Apa Kata Klien Kami
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-[#0D1F3C]/60 backdrop-blur-xl border border-[rgba(0,212,255,0.08)] flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#00D4FF]/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00D4FF] text-[#00D4FF]" />
                ))}
              </div>
              
              <p className="font-playfair text-lg md:text-xl text-[#A0B4CC] leading-relaxed mb-8 flex-grow italic">
                "{testi.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0D1F3C] flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                  {testi.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-unbounded text-white font-semibold text-sm">{testi.name}</span>
                  <span className="text-[#4A6080] text-xs">{testi.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
