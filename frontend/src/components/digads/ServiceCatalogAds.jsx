import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Search, Video, Combine, Globe, LineChart } from 'lucide-react';

const servicesData = [
  {
    icon: <Share2 className="w-8 h-8 text-[#00D4FF]" />,
    title: "Meta Ads (FB/IG)",
    desc: "Setup, targeting, copywriting, A/B testing iklan Facebook & Instagram. Jangkau audiens spesifik dengan akurasi tinggi.",
    price: "Mulai Rp 1.500.000/bulan",
    tags: ["Facebook", "Instagram"],
    featured: false
  },
  {
    icon: <Search className="w-8 h-8 text-[#00D4FF]" />,
    title: "Google Ads",
    desc: "Search, Display, Shopping campaign — keyword research & bid management. Tangkap niat beli pelanggan secara instan.",
    price: "Mulai Rp 2.000.000/bulan",
    tags: ["Search", "Display", "YouTube"],
    featured: false
  },
  {
    icon: <Video className="w-8 h-8 text-[#00D4FF]" />,
    title: "TikTok Ads",
    desc: "Video ads strategy, creative brief, targeting generasi Z & milenial. Tingkatkan viralitas brand Anda dengan cepat.",
    price: "Mulai Rp 1.500.000/bulan",
    tags: ["TikTok"],
    featured: false
  },
  {
    icon: <Combine className="w-8 h-8 text-[#00D4FF]" />,
    title: "Full Funnel Campaign",
    desc: "Kombinasi 2-3 platform dengan strategi funnel awareness→konversi. Pendekatan holistik untuk dominasi pasar digital.",
    price: "Mulai Rp 4.000.000/bulan",
    tags: ["Meta", "Google", "TikTok"],
    featured: true
  },
  {
    icon: <Globe className="w-8 h-8 text-[#00D4FF]" />,
    title: "Landing Page + Ads Bundle",
    desc: "Landing page custom + setup 1 platform ads — paket all-in-one. Optimalkan konversi dengan halaman tujuan yang relevan.",
    price: "Rp 5.000.000",
    tags: ["Web", "Ads"],
    featured: false
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#00D4FF]" />,
    title: "Ads Audit & Konsultasi",
    desc: "Review iklan yang sedang berjalan + rekomendasi optimasi. Temukan kebocoran budget dan tingkatkan efisiensi.",
    price: "Rp 500.000/sesi",
    tags: ["Consulting", "Audit"],
    featured: false
  }
];

const ServiceCatalogAds = () => {
  return (
    <section className="py-24 bg-[#050A18] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Layanan Digital Advertising B2D
          </h2>
          <p className="text-[#A0B4CC] text-lg">
            Solusi iklan digital end-to-end yang dirancang khusus untuk mencapai target bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl flex flex-col h-full transition-all duration-300 group
                ${service.featured 
                  ? 'bg-[#0D1F3C] border-2 border-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.15)]' 
                  : 'bg-[#0A1628] border border-[rgba(0,212,255,0.12)] hover:border-[#00D4FF] hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]'
                }
              `}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#050A18] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#050A18] p-3 rounded-xl border border-[rgba(0,212,255,0.2)] group-hover:border-[#00D4FF] transition-colors">
                  {service.icon}
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-semibold px-3 py-1.5 rounded-lg border border-[rgba(0,212,255,0.2)]">
                    {service.price}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[#A0B4CC] mb-8 flex-grow">{service.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-[#4A6080] bg-[#050A18] px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.05)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceCatalogAds;
