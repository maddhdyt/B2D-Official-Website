import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #00D4FF 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-[#00D4FF]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-[#00B4D8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 backdrop-blur-sm"
          >
            <CodeXml className="w-4 h-4 text-[#00D4FF]" />
            <span className="font-unbounded text-xs font-medium text-[#00D4FF] tracking-widest uppercase">Web Design & Development</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight"
          >
            Website yang Bukan <br className="hidden md:block" />
            Sekadar Tampilan — <br className="hidden md:block" />
            Tapi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00B4D8]">Mesin Pertumbuhan</span> <br className="hidden md:block" />
            Bisnis Anda
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#A0B4CC] leading-relaxed max-w-xl"
          >
            Kami merancang dan membangun website modern, cepat, dan berorientasi konversi — dari Company Profile hingga Sistem Enterprise berbasis web.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a href="#contact" className="px-8 py-3.5 rounded-full bg-[#00D4FF] text-[#050A18] font-semibold hover:bg-[#00D4FF]/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300">
              Konsultasi Gratis
            </a>
            <a href="/portfolio" className="px-8 py-3.5 rounded-full border border-[#00D4FF]/50 text-white font-medium hover:bg-[#00D4FF]/10 transition-all duration-300">
              Lihat Portfolio
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-6 pt-8 border-t border-white/10 w-full max-w-xl"
          >
            <div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-[#4A6080]">Proyek Selesai</div>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-[#4A6080]">Klien Puas</div>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-white mb-1">5</div>
              <div className="text-sm text-[#4A6080]">Jenis Produk</div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Decoration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Main Floating Browser Window */}
            <div className="absolute inset-4 bg-[#0D1F3C]/80 backdrop-blur-xl rounded-2xl border border-[rgba(0,212,255,0.12)] shadow-[0_0_50px_rgba(0,212,255,0.1)] overflow-hidden flex flex-col">
              <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="mx-auto bg-white/5 h-4 w-32 rounded-full" />
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="w-1/3 h-6 bg-[#00D4FF]/20 rounded-md" />
                <div className="w-3/4 h-12 bg-white/5 rounded-md mt-4" />
                <div className="w-2/3 h-4 bg-white/5 rounded-md" />
                <div className="w-1/2 h-4 bg-white/5 rounded-md" />
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-24 bg-[#00D4FF]/10 rounded-xl border border-[#00D4FF]/20" />
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 w-32 h-32 bg-[#00B4D8] rounded-2xl blur-[60px] opacity-40"
            />
            
            <motion.div 
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-1/3 p-4 bg-[#0D1F3C]/90 backdrop-blur-lg border border-[rgba(0,212,255,0.2)] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                <CodeXml className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Clean Code</div>
                <div className="text-xs text-[#00D4FF]">Optimized</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
