import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const testimonialsData = [
  {
    client: "Nadia R.",
    role: "Owner @studiomoda.id",
    business: "Toko Fashion Online",
    location: "Bandung",
    quote: "Sebelum B2D, feed IG kami berantakan dan tidak ada tema. Sekarang setiap scroll terasa seperti brand premium. Sales dari IG naik 3x.",
    before: { label: "800 followers", sub: "ER 0.8%" },
    after: { label: "5.200 followers", sub: "ER 5.4% (dalam 4 bln)" }
  },
  {
    client: "Arif Wicaksono",
    role: "Business Consultant",
    business: "Konsultan Bisnis",
    location: "Jakarta",
    quote: "Copywriting dari B2D terasa seperti kata-kata saya sendiri — tapi jauh lebih tajam dan persuasif. Lead dari LinkedIn naik signifikan.",
    before: { label: "0 leads", sub: "dari konten organik" },
    after: { label: "12 inbound leads", sub: "per bulan" }
  },
  {
    client: "Putri A.",
    role: "Co-founder Kopi Tenang",
    business: "Kafe & Roastery",
    location: "Yogyakarta",
    quote: "Brand guideline yang dibuat B2D membuat semua materi kami — dari menu sampai packaging — terasa satu kesatuan yang kohesif.",
    before: { label: "Tidak konsisten", sub: "identitas visual" },
    after: { label: "Dikenal di 3 kota", sub: "dalam 6 bulan" }
  }
];

const TestimonialsContent = () => {
  return (
    <section className="py-24 bg-[#050A18] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Brand yang Kami Bantu Tumbuh
          </h2>
          <p className="text-[#A0B4CC] text-lg max-w-2xl mx-auto">
            Dampak nyata dari kreativitas yang strategis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonialsData.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0D1F3C] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 flex flex-col h-full relative group hover:border-[#8B5CF6]/40 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#8B5CF6] opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300" />
              
              <div className="mb-6">
                <p className="text-white text-lg leading-relaxed italic relative z-10">
                  "{testi.quote}"
                </p>
              </div>

              <div className="mt-auto mb-8">
                <h4 className="font-unbounded font-bold text-white">{testi.client}</h4>
                <p className="font-unbounded text-sm text-[#8B5CF6]">{testi.role}</p>
                <p className="font-unbounded text-xs text-[#4A6080]">{testi.business}, {testi.location}</p>
              </div>

              <div className="bg-[#050A18] rounded-xl p-4 border border-[rgba(255,255,255,0.02)] flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-[#4A6080] uppercase tracking-wider mb-1">Before</p>
                  <p className="text-sm font-semibold text-[#A0B4CC]">{testi.before.label}</p>
                  <p className="text-xs text-[#4A6080]">{testi.before.sub}</p>
                </div>
                
                <div className="px-2">
                  <ArrowRight className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                
                <div className="flex-1 text-right">
                  <p className="text-xs text-[#EC4899] uppercase tracking-wider mb-1 font-bold">After</p>
                  <p className="text-sm font-bold text-white">{testi.after.label}</p>
                  <p className="text-xs text-[#8B5CF6]">{testi.after.sub}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsContent;
