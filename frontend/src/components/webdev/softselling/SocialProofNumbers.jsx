import React from "react";
import { motion } from "framer-motion";
import EditorialGrid from "../../editorial/EditorialGrid";

export default function SocialProofNumbers() {
  const stats = [
    { num: "50+", label1: "Proyek", label2: "Diselesaikan" },
    { num: "3", label1: "Tahun Pengalaman", label2: "di Industri Digital" },
    { num: "100%", label1: "Proyek Terkirim", label2: "Tepat Waktu" },
    { num: "5", label1: "Jenis Solusi", label2: "Digital" }
  ];

  return (
    <EditorialGrid noTopLine>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col items-center justify-center p-12 text-center border-white/10 ${
              idx % 2 !== 0 ? "border-l" : ""
            } ${idx < 2 ? "border-b lg:border-b-0" : ""} lg:border-l`}
            style={idx === 0 ? { borderLeft: "none" } : {}}
          >
            <h3 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-6">
              {stat.num}
            </h3>
            <div className="flex flex-col text-[#94A3B8] text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
              <span>{stat.label1}</span>
              <span>{stat.label2}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </EditorialGrid>
  );
}
