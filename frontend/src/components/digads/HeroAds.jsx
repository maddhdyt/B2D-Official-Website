import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, ArrowRight, ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';

const DataStreamBackground = () => {
  // Generate random data stream lines
  const lines = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute top-[-10%] w-[1px] h-[120%] bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent"
          style={{ left: line.left, opacity: line.opacity }}
          animate={{
            y: ["-10%", "100%"]
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      {/* Background glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#00D4FF] opacity-10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#FF6B35] opacity-[0.08] rounded-full blur-[100px]" />
    </div>
  );
};

const MockupDashboard = () => {
  const [stats, setStats] = useState({
    roas: 4.20,
    ctr: 3.80,
    cpc: 180
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        roas: +(prev.roas + (Math.random() * 0.04 - 0.02)).toFixed(2),
        ctr: +(prev.ctr + (Math.random() * 0.04 - 0.02)).toFixed(2),
        cpc: Math.max(150, Math.floor(prev.cpc + (Math.random() * 6 - 3)))
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-lg mx-auto"
      style={{ perspective: '1000px' }}
    >
      <div className="bg-[#0D1F3C]/80 backdrop-blur-xl border border-[rgba(0,212,255,0.12)] rounded-2xl p-6 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(0,212,255,0.1)]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF6B35] animate-pulse" />
            <span className="text-sm text-[#A0B4CC] font-medium tracking-wider">LIVE DASHBOARD</span>
          </div>
          <span className="text-xs bg-[#00D4FF]/10 text-[#00D4FF] px-2 py-1 rounded">Last 7 Days</span>
        </div>

        <div className="space-y-5">
          {/* ROAS */}
          <div className="bg-[#0A1628]/50 p-4 rounded-xl border border-[rgba(0,212,255,0.05)]">
            <p className="text-sm text-[#A0B4CC] mb-1">Return on Ad Spend (ROAS)</p>
            <div className="flex items-end justify-between">
              <h3 className="text-4xl font-bold text-white tracking-tight">{stats.roas.toFixed(2)}<span className="text-xl text-[#A0B4CC]">x</span></h3>
              <div className="flex items-center gap-1 text-[#00D4FF] text-sm font-medium bg-[#00D4FF]/10 px-2 py-1 rounded">
                <TrendingUp className="w-4 h-4" /> 38%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* CTR */}
            <div className="bg-[#0A1628]/50 p-4 rounded-xl border border-[rgba(0,212,255,0.05)]">
              <p className="text-xs text-[#A0B4CC] mb-1">Click-Through Rate</p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-bold text-white">{stats.ctr.toFixed(2)}%</h4>
                <div className="flex items-center text-[#00D4FF] text-xs font-medium">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> 12%
                </div>
              </div>
            </div>

            {/* CPC */}
            <div className="bg-[#0A1628]/50 p-4 rounded-xl border border-[rgba(0,212,255,0.05)]">
              <p className="text-xs text-[#A0B4CC] mb-1">Cost per Click (CPC)</p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-bold text-white"><span className="text-sm font-normal text-[#A0B4CC]">Rp</span>{stats.cpc}</h4>
                <div className="flex items-center text-[#00D4FF] text-xs font-medium">
                  <TrendingDown className="w-3 h-3 mr-0.5" /> 22%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements around dashboard */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 bg-[#0A1628] border border-[rgba(0,212,255,0.2)] p-3 rounded-lg shadow-xl"
      >
        <div className="text-xs text-[#A0B4CC]">Conversions</div>
        <div className="text-lg font-bold text-[#00D4FF]">+245</div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-6 bg-[#0A1628] border border-[rgba(0,212,255,0.2)] p-3 rounded-lg shadow-xl"
      >
        <div className="text-xs text-[#A0B4CC]">Ad Spend</div>
        <div className="text-lg font-bold text-white">Optimal</div>
      </motion.div>
    </motion.div>
  );
};

const HeroAds = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#050A18]">
      <DataStreamBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.2)] mb-8">
              <Megaphone className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm font-medium tracking-wide text-[#00D4FF] uppercase">Digital Advertising</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Iklan yang Bukan Hanya Ramai — <br className="hidden md:block" />
              Tapi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF6B35]">Menghasilkan.</span>
            </h1>

            <p className="text-lg text-[#A0B4CC] mb-10 leading-relaxed max-w-xl">
              Kami mengelola iklan digital Anda berbasis data — Meta Ads, Google Ads, TikTok Ads — dengan transparansi penuh dan laporan yang bisa Anda pahami.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#050A18] font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 group"
              >
                Audit Iklan Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[rgba(0,212,255,0.2)] text-white font-medium rounded-full hover:bg-[rgba(0,212,255,0.05)] hover:border-[rgba(0,212,255,0.4)] transition-all duration-300"
              >
                Lihat Case Study
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[rgba(0,212,255,0.1)]">
              <div>
                <p className="text-3xl font-bold text-white mb-1">Rp 2M+</p>
                <p className="text-xs text-[#A0B4CC] uppercase tracking-wider">Ad Spend Dikelola</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">4.2x</p>
                <p className="text-xs text-[#A0B4CC] uppercase tracking-wider">Rata-rata ROAS</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">30+</p>
                <p className="text-xs text-[#A0B4CC] uppercase tracking-wider">Campaign Aktif</p>
              </div>
            </div>
          </motion.div>

          {/* Right side Dashboard Mockup */}
          <div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end">
            <MockupDashboard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroAds;
