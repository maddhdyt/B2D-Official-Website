import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, PenTool, CheckCircle, BarChart } from 'lucide-react';

const processSteps = [
  {
    num: "01",
    title: "Brief & Discovery",
    desc: "Kami duduk (virtual) bersama Anda untuk memahami bisnis, audiens target, kompetitor, dan tujuan konten secara mendalam.",
    deliverable: "Creative Brief Document",
    icon: <Target className="w-8 h-8 text-[#00D4FF]" />,
    illustration: (
      <div className="relative w-full aspect-video bg-[#0A1628] rounded-xl border border-[rgba(0,212,255,0.2)] p-6 overflow-hidden flex flex-col gap-4">
        <div className="w-1/3 h-4 bg-[#00D4FF]/20 rounded" />
        <div className="w-3/4 h-2 bg-[#A0B4CC]/20 rounded" />
        <div className="w-2/3 h-2 bg-[#A0B4CC]/20 rounded" />
        <div className="mt-auto grid grid-cols-2 gap-4">
          <div className="h-20 bg-[#0D1F3C] rounded border border-[rgba(0,212,255,0.1)]" />
          <div className="h-20 bg-[#0D1F3C] rounded border border-[rgba(0,212,255,0.1)]" />
        </div>
      </div>
    )
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "Kami susun strategi konten berdasarkan data — platform yang tepat, format yang tepat, timing yang tepat.",
    deliverable: "Content Calendar 1-3 Bulan",
    icon: <Calendar className="w-8 h-8 text-[#8B5CF6]" />,
    illustration: (
      <div className="relative w-full aspect-video bg-[#0A1628] rounded-xl border border-[rgba(139,92,246,0.2)] p-6 overflow-hidden">
        <div className="grid grid-cols-7 gap-2 h-full">
          {[...Array(28)].map((_, i) => (
            <div key={i} className={`rounded-sm ${i === 12 || i === 15 || i === 22 ? 'bg-[#8B5CF6]/40' : 'bg-[#0D1F3C]'}`} />
          ))}
        </div>
      </div>
    )
  },
  {
    num: "03",
    title: "Production",
    desc: "Eksekusi kreatif: copywriting, desain visual, editing. Setiap konten melalui proses review internal sebelum ke Anda.",
    deliverable: "Konten siap publish + revisi 2x",
    icon: <PenTool className="w-8 h-8 text-[#EC4899]" />,
    illustration: (
      <div className="relative w-full aspect-video bg-[#0A1628] rounded-xl border border-[rgba(236,72,153,0.2)] p-6 flex gap-4">
        <div className="w-16 h-full flex flex-col gap-2 border-r border-[rgba(255,255,255,0.05)] pr-4">
          <div className="w-8 h-8 bg-[#EC4899]/20 rounded" />
          <div className="w-8 h-8 bg-[#A0B4CC]/10 rounded" />
          <div className="w-8 h-8 bg-[#A0B4CC]/10 rounded" />
        </div>
        <div className="flex-1 bg-[#0D1F3C] rounded-lg border border-[rgba(236,72,153,0.1)] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-[#EC4899]/30 border-t-[#EC4899] animate-spin" />
        </div>
      </div>
    )
  },
  {
    num: "04",
    title: "Review & Approval",
    desc: "Anda review, kami revisi. Tidak ada konten yang publish tanpa persetujuan final Anda.",
    deliverable: "Konten final + caption + hashtag",
    icon: <CheckCircle className="w-8 h-8 text-[#00D4FF]" />,
    illustration: (
      <div className="relative w-full aspect-video bg-[#0A1628] rounded-xl border border-[rgba(0,212,255,0.2)] p-6 flex flex-col justify-center gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-[#0D1F3C] p-3 rounded flex items-center justify-between border border-[rgba(0,212,255,0.05)]">
            <div className="w-1/2 h-2 bg-[#A0B4CC]/20 rounded" />
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 0 ? 'bg-[#00D4FF]/20 text-[#00D4FF]' : 'bg-[#A0B4CC]/10'}`}>
              {i === 0 && <CheckCircle className="w-4 h-4" />}
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    num: "05",
    title: "Publish & Monitor",
    desc: "Kami publish di waktu optimal dan monitor performa. Hasil dianalisis untuk improvement konten berikutnya.",
    deliverable: "Monthly Performance Report",
    icon: <BarChart className="w-8 h-8 text-[#8B5CF6]" />,
    illustration: (
      <div className="relative w-full aspect-video bg-[#0A1628] rounded-xl border border-[rgba(139,92,246,0.2)] p-6 flex items-end justify-between gap-2">
        {[2, 4, 3, 6, 5, 8, 7, 10].map((h, i) => (
          <motion.div 
            key={i} 
            initial={{ height: 0 }}
            whileInView={{ height: `${h * 10}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`w-full rounded-t-sm ${i === 7 ? 'bg-[#8B5CF6]' : 'bg-[#8B5CF6]/30'}`} 
          />
        ))}
      </div>
    )
  }
];

const CreativeProcess = () => {
  return (
    <section className="py-24 bg-[#050A18] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proses Kreatif Kami
          </h2>
          <p className="text-[#A0B4CC] text-lg max-w-2xl mx-auto">
            Setiap proyek dimulai dengan pemahaman mendalam — bukan asumsi.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col gap-10 md:gap-16 items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-xl bg-[#0A1628] border border-[rgba(255,255,255,0.05)]">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-[#A0B4CC] text-lg leading-relaxed mb-8">
                    {step.desc}
                  </p>
                  
                  <div className="inline-block bg-[#0D1F3C] border border-[rgba(255,255,255,0.1)] px-4 py-2 rounded-lg">
                    <span className="text-xs text-[#4A6080] uppercase tracking-wider block mb-1">Deliverable:</span>
                    <span className="text-sm font-semibold text-white">{step.deliverable}</span>
                  </div>
                </motion.div>

                {/* Illustration */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 w-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/5 to-[#8B5CF6]/5 rounded-xl blur-2xl transform scale-110" />
                  {step.illustration}
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CreativeProcess;
