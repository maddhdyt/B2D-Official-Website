import { motion } from "framer-motion";
import { Globe, Zap, Heart, Target, Settings, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Company Profile",
    tech: "WordPress",
    price: "Rp 2.000.000",
    description: "Website instan yang profesional dan mudah dikelola sendiri.",
    icon: Globe,
    popular: false,
    delay: 0.1,
  },
  {
    title: "Company Profile",
    tech: "Custom Code",
    price: "Rp 3.000.000",
    description: "Performa maksimal dengan desain unik yang dirancang khusus.",
    icon: Zap,
    popular: true,
    delay: 0.2,
  },
  {
    title: "CRM / ERP System",
    tech: "Laravel / React",
    price: "Rp 7.000.000",
    description: "Sistem manajemen bisnis terintegrasi berskala enterprise.",
    icon: Settings,
    popular: true,
    badge: "ENTERPRISE",
    delay: 0.3,
    colSpan: "lg:col-span-2 xl:col-span-1",
  },
  {
    title: "Landing Page",
    tech: "Custom",
    price: "Rp 1.500.000",
    description: "Satu halaman super cepat yang fokus pada konversi iklan Anda.",
    icon: Target,
    popular: false,
    delay: 0.4,
  },
  {
    title: "Wedding Invitation",
    tech: "Digital",
    price: "Rp 500.000",
    description: "Undangan digital elegan dengan RSVP dan cerita perjalanan Anda.",
    icon: Heart,
    popular: false,
    delay: 0.5,
  },
];

export default function ProductCatalog() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#050A18]">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-unbounded text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Produk & Layanan Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#A0B4CC] max-w-2xl"
          >
            Dari website sederhana hingga sistem bisnis enterprise — semua dirancang khusus untuk kebutuhan Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: product.delay }}
                className={`group relative flex flex-col p-8 rounded-2xl bg-[#0D1F3C]/80 backdrop-blur-xl border border-[rgba(0,212,255,0.12)] hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,212,255,0.1)] ${product.colSpan || ''}`}
              >
                {product.popular && (
                  <div className="font-unbounded absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] text-[#050A18] text-xs font-bold tracking-wider shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                    {product.badge || "POPULAR"}
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#00D4FF]/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#00D4FF]" />
                </div>
                
                <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-medium w-fit mb-3">
                  {product.tech}
                </div>
                
                <h3 className="font-unbounded text-xl md:text-2xl font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-[#A0B4CC] mb-8 flex-grow">{product.description}</p>
                
                <div className="flex items-end justify-between mt-auto pt-6 border-t border-white/10">
                  <div>
                    <div className="text-xs text-[#4A6080] mb-1">Mulai dari</div>
                    <div className="font-unbounded text-xl font-bold text-white">{product.price}</div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-[#050A18] transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
