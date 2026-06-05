import { motion } from "framer-motion";
import { PenTool, Rocket, ShieldCheck, Banknote, LifeBuoy, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Desain Eksklusif",
    description: "Tidak ada template generik. Setiap pixel dirancang khusus untuk brand Anda.",
    icon: PenTool,
    delay: 0.1,
  },
  {
    title: "Performa Tinggi",
    description: "Core Web Vitals optimal. Loading < 3 detik. SEO-ready dari hari pertama.",
    icon: Rocket,
    delay: 0.2,
  },
  {
    title: "Keamanan Terjamin",
    description: "Tidak bergantung plugin pihak ketiga yang rentan. Kode bersih & aman.",
    icon: ShieldCheck,
    delay: 0.3,
  },
  {
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi. Harga tetap, sesuai kontrak.",
    icon: Banknote,
    delay: 0.4,
  },
  {
    title: "Support Pasca-Launch",
    description: "Garansi revisi & support 3 bulan setelah website live.",
    icon: LifeBuoy,
    delay: 0.5,
  },
  {
    title: "Scalable & Future-Ready",
    description: "Dibangun untuk tumbuh bersama bisnis Anda.",
    icon: TrendingUp,
    delay: 0.6,
  },
];

export default function WhyB2D() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#0A1628]">
      {/* Decorative Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
      
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Kenapa Pilih B2D?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="flex flex-col items-start gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0D1F3C] border border-[rgba(0,212,255,0.12)] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.05)]">
                  <Icon className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[#A0B4CC] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
