import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, XCircle, Target, HelpCircle, Clock, AlertTriangle } from 'lucide-react';

const painPointsData = [
  {
    icon: <TrendingDown className="w-8 h-8 text-[#FF6B35]" />,
    title: "Biaya Iklan Terus Naik, Hasil Tidak Sebanding",
    desc: "Budget habis tapi leads yang masuk tidak qualified."
  },
  {
    icon: <XCircle className="w-8 h-8 text-[#FF6B35]" />,
    title: "CTR Rendah, Iklan Sering Ditolak",
    desc: "Visual dan copywriting tidak menarik target audiens."
  },
  {
    icon: <Target className="w-8 h-8 text-[#FF6B35]" />,
    title: "Targeting Tidak Tepat",
    desc: "Iklan tampil ke orang yang tidak butuh produk Anda."
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-[#FF6B35]" />,
    title: "Tidak Tahu Mana Iklan yang Bekerja",
    desc: "Laporan membingungkan, tidak ada rekomendasi tindak lanjut."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#FF6B35]" />,
    title: "Tidak Ada Waktu untuk Kelola Iklan",
    desc: "Menjalankan bisnis sudah cukup menyita waktu."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#FF6B35]" />,
    title: "ROAS di Bawah 2x",
    desc: "Setiap Rp 1 yang dikeluarkan hanya menghasilkan kurang dari Rp 2."
  }
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-[#0A1628] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-unbounded text-4xl md:text-5xl font-bold text-white mb-6">
            Apakah Iklan Anda Mengalami Ini?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {painPointsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0D1F3C]/50 backdrop-blur-sm border border-[#FF6B35]/20 p-8 rounded-2xl hover:border-[#FF6B35]/40 hover:bg-[#0D1F3C] transition-all duration-300 group"
            >
              <div className="bg-[#FF6B35]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-unbounded text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
              <p className="text-[#A0B4CC] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.5)] to-transparent -z-10" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-[#00D4FF] opacity-10 blur-[40px] rounded-full -z-10" />
          
          <span className="inline-block bg-[#0A1628] px-8 py-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-white">
            Kami hadir untuk mengubah semua itu.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default PainPoints;
