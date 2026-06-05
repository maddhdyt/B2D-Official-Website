import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const features = [
  { name: "Harga Mulai", wp: "Rp 2 Juta", custom: "Rp 3 Juta", landing: "Rp 1,5 Juta", crm: "Rp 7 Juta", isCheck: false },
  { name: "Waktu Pengerjaan", wp: "3-7 hari", custom: "2-4 minggu", landing: "3-7 hari", crm: "1-3 bulan", isCheck: false },
  { name: "Kelola Sendiri", wp: true, custom: "Perlu Dev", landing: true, crm: true, isCheck: false },
  { name: "Performa", wp: "●●●○○", custom: "●●●●●", landing: "●●●●●", crm: "●●●●●", isCheck: false },
  { name: "Custom Fitur", wp: "Terbatas", custom: true, landing: true, crm: true, isCheck: false },
  { name: "SEO Optimal", wp: true, custom: true, landing: true, crm: false, isCheck: false },
  { name: "Cocok Untuk", wp: "UMKM", custom: "Menengah+", landing: "Kampanye", crm: "Enterprise", isCheck: false },
];

const CheckIcon = () => <Check className="w-5 h-5 text-[#00D4FF] mx-auto" />;
const MinusIcon = () => <Minus className="w-5 h-5 text-[#4A6080] mx-auto" />;

export default function ComparisonTable() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#0A1628]">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Pilih Solusi yang Tepat untuk Bisnis Anda
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-x-auto pb-6"
        >
          <div className="min-w-[800px] border border-[rgba(0,212,255,0.12)] rounded-2xl overflow-hidden bg-[#0D1F3C]/50 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 bg-[#0D1F3C] text-white font-bold w-[20%] border-b border-[rgba(0,212,255,0.12)]">Fitur</th>
                  <th className="p-6 bg-[#0D1F3C] text-center text-white font-bold w-[20%] border-b border-[rgba(0,212,255,0.12)]">WP Profile</th>
                  <th className="p-6 bg-gradient-to-b from-[#00D4FF]/20 to-[#0D1F3C] text-center text-[#00D4FF] font-bold w-[20%] border-b border-[#00D4FF]/50 relative">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]" />
                    Custom Code
                    <div className="text-xs font-normal text-white/70 mt-1">RECOMMENDED</div>
                  </th>
                  <th className="p-6 bg-[#0D1F3C] text-center text-white font-bold w-[20%] border-b border-[rgba(0,212,255,0.12)]">Landing Page</th>
                  <th className="p-6 bg-[#0D1F3C] text-center text-white font-bold w-[20%] border-b border-[rgba(0,212,255,0.12)]">CRM/ERP</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-[rgba(0,212,255,0.05)] hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-white font-medium">{feature.name}</td>
                    <td className="p-6 text-center text-[#A0B4CC]">
                      {typeof feature.wp === 'boolean' ? (feature.wp ? <CheckIcon /> : <MinusIcon />) : feature.wp}
                    </td>
                    <td className="p-6 text-center text-white font-semibold bg-[#00D4FF]/5">
                      {typeof feature.custom === 'boolean' ? (feature.custom ? <CheckIcon /> : <MinusIcon />) : feature.custom}
                    </td>
                    <td className="p-6 text-center text-[#A0B4CC]">
                      {typeof feature.landing === 'boolean' ? (feature.landing ? <CheckIcon /> : <MinusIcon />) : feature.landing}
                    </td>
                    <td className="p-6 text-center text-[#A0B4CC]">
                      {typeof feature.crm === 'boolean' ? (feature.crm ? <CheckIcon /> : <MinusIcon />) : feature.crm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
