import React from 'react';
import { motion } from 'framer-motion';

const caseStudiesData = [
  {
    client: "E-Commerce Fashion Lokal",
    location: "Jakarta",
    platform: "Meta Ads",
    budget: "Rp 3.000.000/bulan",
    metrics: [
      { label: "ROAS", value: "5.1x", sub: "(dari 1.8x sebelumnya)", positive: true },
      { label: "Revenue", value: "+280%", sub: "dalam 60 hari", positive: true },
      { label: "CPC", value: "Rp 310", sub: "(turun dari Rp 850)", positive: true }
    ],
    strategy: "Retargeting funnel + lookalike audience dari database pelanggan"
  },
  {
    client: "Klinik Kecantikan",
    location: "Surabaya",
    platform: "Meta Ads + Google Ads",
    budget: "Rp 4.500.000/bulan",
    metrics: [
      { label: "Lead/bulan", value: "87", sub: "(dari 12 leads)", positive: true },
      { label: "Cost per Lead", value: "Rp 52rb", sub: "highly efficient", positive: true },
      { label: "Booking Online", value: "+340%", sub: "meningkat drastis", positive: true }
    ],
    strategy: "Local awareness + search intent campaign"
  },
  {
    client: "Kursus Online B. Inggris",
    location: "Bandung",
    platform: "TikTok Ads + Meta Ads",
    budget: "Rp 2.000.000/bulan",
    metrics: [
      { label: "ROAS", value: "6.3x", sub: "excellent return", positive: true },
      { label: "Pendaftar Baru", value: "+215%", sub: "bulan pertama", positive: true },
      { label: "Video Ad CTR", value: "8.2%", sub: "(rata-rata industri 1.5%)", positive: true }
    ],
    strategy: "UGC-style video creative + interest stacking"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-[#0A1628] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hasil Nyata untuk Klien Nyata
          </h2>
          <p className="text-[#A0B4CC] text-lg">
            Angka-angka ini bukan klaim — ini laporan aktual dari campaign yang kami kelola.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0D1F3C] border border-[rgba(0,212,255,0.15)] rounded-2xl p-8 hover:border-[#00D4FF]/50 transition-colors duration-300"
            >
              <div className="mb-6 pb-6 border-b border-[rgba(0,212,255,0.1)]">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold px-2.5 py-1 rounded">
                    {study.platform}
                  </span>
                  <span className="bg-[#050A18] text-[#A0B4CC] text-xs font-medium px-2.5 py-1 rounded border border-[rgba(255,255,255,0.05)]">
                    Budget: {study.budget}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight mb-1">{study.client}</h3>
                <p className="text-sm text-[#4A6080]">{study.location}</p>
              </div>

              <div className="space-y-6 mb-8">
                {study.metrics.map((metric, i) => (
                  <div key={i}>
                    <p className="text-sm text-[#A0B4CC] mb-1">{metric.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${metric.positive ? 'text-[#10B981]' : 'text-white'}`}>
                        {metric.value}
                      </span>
                      <span className="text-xs text-[#4A6080]">{metric.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#050A18] rounded-xl p-4 border border-[rgba(0,212,255,0.05)]">
                <p className="text-xs text-[#FF6B35] font-bold uppercase tracking-wider mb-2">Strategi</p>
                <p className="text-sm text-white">{study.strategy}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
