import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const pricingData = [
  {
    name: "STARTER",
    price: "Rp 1.500.000",
    period: "/bulan",
    popular: false,
    features: [
      { text: "1 Platform (Meta/Google/TikTok)", included: true },
      { text: "Setup campaign + targeting", included: true },
      { text: "4x optimasi per bulan", included: true },
      { text: "Laporan bulanan", included: true },
      { text: "Support via WhatsApp", included: true },
      { text: "Tanpa pembuatan creative", included: false }
    ],
    ctaText: "Mulai Sekarang",
    ctaLink: "https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20tertarik%20dengan%20paket%20Starter%20Digital%20Ads"
  },
  {
    name: "GROWTH",
    price: "Rp 3.000.000",
    period: "/bulan",
    popular: true,
    features: [
      { text: "2 Platform pilihan", included: true },
      { text: "Copywriting & brief visual iklan", included: true },
      { text: "A/B testing aktif", included: true },
      { text: "Weekly optimization report", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Landing page audit", included: true }
    ],
    ctaText: "Pilih Paket Ini",
    ctaLink: "https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20tertarik%20dengan%20paket%20Growth%20Digital%20Ads"
  },
  {
    name: "SCALE",
    price: "Rp 5.000.000",
    period: "/bulan",
    popular: false,
    features: [
      { text: "3 Platform (Meta+Google+TikTok)", included: true },
      { text: "Full creative production brief", included: true },
      { text: "Funnel strategy lengkap", included: true },
      { text: "Dashboard live reporting", included: true },
      { text: "Priority support (respon < 2 jam)", included: true },
      { text: "Konsultasi strategi 2x/bulan", included: true }
    ],
    ctaText: "Konsultasi Dulu",
    ctaLink: "https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20ingin%20konsultasi%20untuk%20paket%20Scale%20Digital%20Ads"
  }
];

const PricingAds = () => {
  return (
    <section className="py-24 bg-[#050A18] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-unbounded text-4xl md:text-5xl font-bold text-white mb-6">
            Pilih Paket yang Sesuai Budget Anda
          </h2>
          <p className="text-[#A0B4CC] text-lg">
            Harga transparan. Tidak ada biaya tersembunyi. Tidak ada kontrak jangka panjang yang memaksa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {pricingData.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full ${
                tier.popular 
                  ? 'bg-[#0D1F3C] border-2 border-[#00D4FF] shadow-[0_0_40px_rgba(0,212,255,0.15)] lg:scale-105 z-10' 
                  : 'bg-[#0A1628] border border-[rgba(0,212,255,0.12)]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#050A18] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-unbounded text-sm font-bold text-[#A0B4CC] tracking-widest uppercase mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-playfair text-3xl md:text-4xl font-bold text-white">{tier.price}</span>
                  <span className="font-unbounded text-[#4A6080]">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-[#4A6080] shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-white" : "text-[#4A6080]"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href={tier.ctaLink}
                target="_blank"
                rel="noreferrer"
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#050A18] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-[1.02]'
                    : 'bg-[#0D1F3C] text-white border border-[rgba(0,212,255,0.2)] hover:border-[#00D4FF] hover:bg-[#00D4FF]/10'
                }`}
              >
                {tier.ctaText}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingAds;
