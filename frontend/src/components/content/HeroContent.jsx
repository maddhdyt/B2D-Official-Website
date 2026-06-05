import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, ArrowRight, Play, Image as ImageIcon, Type } from 'lucide-react';

const MeshBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Subtle cyan and purple radial gradients for a mesh-like feel */}
    <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-[#00D4FF] opacity-[0.08] rounded-full blur-[150px] mix-blend-screen" />
    <div className="absolute top-[30%] -right-[20%] w-[900px] h-[900px] bg-[#8B5CF6] opacity-[0.08] rounded-full blur-[150px] mix-blend-screen" />
    <div className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] bg-[#EC4899] opacity-[0.05] rounded-full blur-[150px] mix-blend-screen" />
    
    {/* Overlay grid pattern for texture */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
  </div>
);

const FloatingCreativeElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
      {/* IG Mockup Floating */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [-5, -2, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] bg-[#0D1F3C]/80 backdrop-blur-xl border border-[rgba(139,92,246,0.3)] rounded-2xl w-48 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="p-3 border-b border-[rgba(255,255,255,0.05)] flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6]" />
          <div className="w-20 h-2 bg-[rgba(255,255,255,0.2)] rounded-full" />
        </div>
        <div className="aspect-square bg-[#050A18] m-3 rounded-lg flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-[#A0B4CC]/50" />
        </div>
        <div className="p-3 pt-0 flex gap-2">
          <div className="w-4 h-4 rounded-full border border-[rgba(255,255,255,0.2)]" />
          <div className="w-4 h-4 rounded-full border border-[rgba(255,255,255,0.2)]" />
        </div>
      </motion.div>

      {/* Typography Card */}
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [10, 8, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[5%] bg-[#0A1628]/90 backdrop-blur-md border border-[rgba(0,212,255,0.3)] rounded-xl p-5 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-3">
          <Type className="w-5 h-5 text-[#00D4FF]" />
          <span className="text-xs text-[#A0B4CC] font-mono">Typography</span>
        </div>
        <div className="text-4xl font-serif text-white leading-none">Aa</div>
        <div className="mt-2 text-xs text-[#4A6080]">Playfair Display</div>
      </motion.div>

      {/* Color Palette Card */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-15, -12, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 left-[5%] bg-[#0D1F3C]/80 backdrop-blur-xl border border-[rgba(236,72,153,0.3)] rounded-2xl p-4 shadow-2xl flex flex-col gap-2"
      >
        <div className="w-12 h-12 rounded-full bg-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.4)]" />
        <div className="w-12 h-12 rounded-full bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.4)] -mt-4 border-2 border-[#0D1F3C]" />
        <div className="w-12 h-12 rounded-full bg-[#EC4899] shadow-[0_0_15px_rgba(236,72,153,0.4)] -mt-4 border-2 border-[#0D1F3C]" />
      </motion.div>
    </div>
  );
};

const HeroContent = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-[#050A18]">
      <MeshBackground />
      <FloatingCreativeElements />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1F3C]/50 border border-transparent [background:linear-gradient(#0D1F3C,#0D1F3C)_padding-box,linear-gradient(to_right,#00D4FF,#8B5CF6)_border-box] mb-8">
            <PenTool className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] uppercase">
              Content & Creative
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight flex flex-col gap-2">
            <span>Konten yang</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] pb-2">
              Tidak Bisa
            </span>
            <span className="text-5xl md:text-7xl opacity-90">Diabaikan.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#A0B4CC] mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Dari strategi konten hingga identitas visual — kami bantu brand Anda bicara dengan cara yang tepat kepada orang yang tepat.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#050A18] font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              Konsultasi Kreatif Gratis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[rgba(139,92,246,0.3)] text-white font-medium rounded-full hover:bg-[rgba(139,92,246,0.1)] hover:border-[#8B5CF6] transition-all duration-300 gap-2"
            >
              <Play className="w-4 h-4" />
              Lihat Karya Kami
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-10 border-t border-[rgba(255,255,255,0.05)]">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">200+</p>
              <p className="text-xs text-[#A0B4CC] uppercase tracking-wider font-semibold">Konten Diproduksi</p>
            </div>
            <div className="text-center border-x border-[rgba(255,255,255,0.05)]">
              <p className="text-4xl font-bold text-white mb-2">15+</p>
              <p className="text-xs text-[#A0B4CC] uppercase tracking-wider font-semibold">Brand Ditangani</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">3x</p>
              <p className="text-xs text-[#A0B4CC] uppercase tracking-wider font-semibold">Rata-rata Engagement</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroContent;
