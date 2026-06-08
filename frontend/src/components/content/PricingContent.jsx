import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const pricingData = [
  {
    name: "STARTER",
    price: "Rp 2.000.000",
    period: "/bulan",
    popular: false,
    platform: "1 Platform (Instagram/TikTok)",
    features: [
      { text: "12 post/bulan (feed + story)", included: true },
      { text: "Copywriting caption", included: true },
      { text: "Hashtag research", included: true },
      { text: "Jadwal posting optimal", included: true },
      { text: "Tanpa desain custom", included: false },
      { text: "Tanpa video production", included: false }
    ],
    ctaText: "Mulai Sekarang",
    ctaLink: "https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20tertarik%20dengan%20paket%20Starter%20Content"
  },
  {
    name: "GROWTH",
    price: "Rp 3.500.000",
    period: "/bulan",
    popular: true,
    platform: "2 Platform (IG + TikTok/LinkedIn)",
    features: [
      { text: "20 post/bulan + 8 story", included: true },
      { text: "Desain visual custom per post", included: true },
      { text: "2 short video brief/bulan", included: true },
      { text: "Monthly strategy review", included: true },
      { text: "Engagement monitoring", included: true }
    ],
    ctaText: "Pilih Paket Ini",
    ctaLink: "https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20tertarik%20dengan%20paket%20Growth%20Content"
  },
  {
    name: "BRAND FULL",
    price: "Rp 6.000.000",
    period: "/bulan",
    popular: false,
    platform: "3 Platform Bebas Pilih",
    features: [
      { text: "30 post/bulan + story harian", included: true },
      { text: "Full visual branding support", included: true },
      { text: "4 short video brief/bulan", included: true },
      { text: "Weekly content review", included: true },
      { text: "Dedicated creative team", included: true },
      { text: "Brand guideline update quarterly", included: true }
    ],
    ctaText: "Konsultasi Dulu",
    ctaLink: "https://wa.me/6281234567890?text=Halo%20B2D,%20saya%20ingin%20konsultasi%20untuk%20paket%20Brand%20Full"
  }
];

const PricingContent = () => {
  return (
    <section className="py-24 bg-[#0A1628] relative border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Paket Konten Bulanan
          </h2>
          <p className="text-[#A0B4CC] text-lg">
            Konsisten adalah kunci — bukan viral sekali, tapi relevan setiap hari.
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
                  ? 'bg-[#0D1F3C] border-2 border-[#8B5CF6] shadow-[0_0_40px_rgba(139,92,246,0.15)] lg:scale-105 z-10' 
                  : 'bg-[#050A18] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(139,92,246,0.3)] transition-colors'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-unbounded text-sm font-bold text-[#A0B4CC] tracking-widest uppercase mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-playfair text-3xl md:text-4xl font-bold text-white">{tier.price}</span>
                  <span className="font-unbounded text-[#4A6080]">{tier.period}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-medium rounded-lg">
                  {tier.platform}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
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
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-[1.02]'
                    : 'bg-[#0A1628] text-white border border-[rgba(255,255,255,0.1)] hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10'
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

export default PricingContent;
