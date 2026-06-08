import React from "react";
import { motion } from "framer-motion";
import EditorialGrid from "../../editorial/EditorialGrid";
import favicon from "../../../assets/favicon.png";

export default function SoftCTAInvitation() {
  return (
    <EditorialGrid noTopLine>
      <div className="relative min-h-[90vh] w-full overflow-hidden bg-[#050A18] text-white flex flex-col py-20 px-4 md:px-16 border-t border-white/10">
        
        {/* Radial Grid Background (Lingkaran Konsentris) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
          <div className="w-[800px] h-[800px] rounded-full border border-dashed border-white/20 absolute" />
          <div className="w-[500px] h-[500px] rounded-full border border-dashed border-white/20 absolute" />
          <div className="w-[200px] h-[200px] rounded-full border border-dashed border-white/20 absolute" />
          
          {/* Scattered Dots */}
          <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-[#00D4FF] rounded-full shadow-[0_0_15px_#00D4FF]" />
          <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-[#00D4FF] rounded-full shadow-[0_0_15px_#00D4FF]" />
          <div className="absolute bottom-[30%] left-[40%] w-2 h-2 bg-[#00D4FF] rounded-full shadow-[0_0_15px_#00D4FF]" />
          <div className="absolute bottom-[40%] right-[35%] w-2 h-2 bg-[#00D4FF] rounded-full shadow-[0_0_15px_#00D4FF]" />
        </div>

        {/* Top Badges */}
        <div className="relative z-10 flex gap-2 mb-8">
          <span className="px-4 py-1 border border-white/30 rounded-full text-[10px] font-mono tracking-widest uppercase">Konsultasi</span>
          <span className="px-4 py-1 border border-white/30 rounded-full text-[10px] font-mono tracking-widest uppercase">Gratis</span>
        </div>

        {/* Main Header */}
        <div className="relative z-10 max-w-4xl">
          <h2 className="font-['Unbounded'] text-4xl md:text-6xl lg:text-7xl leading-[1.2] md:leading-[1.1] font-bold text-white tracking-tight">
            Ada proyek <br />
            yang sedang <br />
            <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] text-[#050A18] px-6 py-2 md:px-8 md:py-3 rounded-full mt-2 md:mt-4 shadow-[0_0_40px_rgba(0,212,255,0.3)]">
              Anda pikirkan?
            </span>
          </h2>
        </div>

        {/* Center Quote Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.5)] z-10 p-5 md:p-6">
          <img src={favicon} alt="B2D Logo" className="w-full h-full object-contain" />
        </div>

        {/* Right side floating texts */}
        <div className="hidden lg:flex flex-col gap-12 absolute right-[5%] top-[25%] max-w-sm z-10">
          <div className="flex gap-4 items-start">
            <span className="border border-white/30 rounded-full px-3 py-1 text-[10px] font-mono h-fit uppercase mt-1">Tujuan</span>
            <p className="text-white/70 font-light text-sm leading-relaxed">
              Banyak bisnis yang memiliki layanan bagus namun gagal karena representasi digital yang kurang meyakinkan dan sulit dipahami.
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="border border-white/30 rounded-full px-3 py-1 text-[10px] font-mono h-fit uppercase mt-1">Solusi</span>
            <p className="text-white/70 font-light text-sm leading-relaxed">
              Kami membangun pondasi digital yang tidak hanya estetik, namun berfokus pada hasil — memikat klien potensial dari pandangan pertama.
            </p>
          </div>
        </div>

        {/* Bottom Tilted Cards */}
        <div className="relative mt-auto pt-48 md:pt-60 w-full flex flex-wrap justify-center gap-4 md:gap-8 overflow-visible z-10 pb-8">
          
          {/* Card 1 */}
          <div className="w-40 md:w-56 h-48 md:h-64 bg-[#0A1128] border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col justify-between transform -rotate-12 hover:-translate-y-4 transition-transform shadow-2xl origin-bottom-right">
            <span className="border border-white/30 rounded-full px-3 py-1 text-[9px] md:text-[10px] font-mono w-fit uppercase text-white/70">Keraguan</span>
            <p className="font-['Unbounded'] text-xs md:text-sm text-white mt-auto">
              "Apakah website ini cocok untuk startup saya?"
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-40 md:w-56 h-48 md:h-64 bg-white rounded-2xl p-4 md:p-6 flex flex-col justify-between transform -rotate-3 hover:-translate-y-4 transition-transform shadow-2xl z-10">
            <span className="border border-black/30 rounded-full px-3 py-1 text-[9px] md:text-[10px] font-mono w-fit uppercase text-black">Investasi</span>
            <p className="font-serif italic text-base md:text-xl text-black mt-auto leading-snug">
              Setiap rupiah yang dikeluarkan adalah jaminan kualitas & kredibilitas.
            </p>
          </div>

          {/* Card 3 (Action Card) */}
          <a href="https://wa.me/628138950266" target="_blank" rel="noopener noreferrer" className="w-40 md:w-56 h-48 md:h-64 bg-gradient-to-br from-[#00D4FF] to-[#3B82F6] rounded-2xl p-4 md:p-6 flex flex-col justify-between transform rotate-6 hover:-translate-y-4 transition-transform shadow-[0_0_40px_rgba(0,212,255,0.3)] z-20 cursor-pointer group">
            <span className="border border-[#050A18]/30 rounded-full px-3 py-1 text-[9px] md:text-[10px] font-mono w-fit uppercase text-[#050A18]">Mulai</span>
            <div className="mt-auto">
              <p className="font-['Unbounded'] font-bold text-sm md:text-lg text-[#050A18] leading-tight mb-4 group-hover:scale-105 transition-transform">
                Mari wujudkan visi Anda!
              </p>
              <div className="inline-block bg-[#050A18] text-[#00D4FF] px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:bg-black transition-colors">
                Chat Kami &rarr;
              </div>
            </div>
          </a>
          
        </div>
      </div>
    </EditorialGrid>
  );
}
