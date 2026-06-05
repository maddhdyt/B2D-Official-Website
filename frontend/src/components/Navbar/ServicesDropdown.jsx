import { motion } from "framer-motion";
import { Megaphone, PenTool, Code2 } from "lucide-react";

const servicesList = [
  {
    title: "Digital Advertising",
    description: "Strategi iklan berbasis data untuk meningkatkan konversi dan pertumbuhan bisnis.",
    icon: Megaphone,
  },
  {
    title: "Content & Creative",
    description: "Konten visual dan strategi kreatif yang memperkuat identitas brand.",
    icon: PenTool,
  },
  {
    title: "Web Design & Development",
    description: "Pengembangan website modern, cepat, dan berorientasi pada konversi.",
    icon: Code2,
  },
];

export default function ServicesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-0 mt-4 w-[420px] rounded-2xl border border-white/10 bg-[#07080A]/85 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(0,168,255,0.1)] p-3 overflow-hidden"
    >
      <div className="flex flex-col gap-1 relative z-10">
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          return (
            <a
              key={index}
              href={`#service-${index}`}
              className="group relative flex items-start gap-4 rounded-xl p-3 hover:bg-white/5 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00A8FF]/10 flex items-center justify-center border border-[#00A8FF]/20 group-hover:bg-[#00A8FF]/20 group-hover:border-[#00A8FF]/40 transition-colors duration-200 shadow-[0_0_15px_rgba(0,168,255,0)] group-hover:shadow-[0_0_15px_rgba(0,168,255,0.3)]">
                <Icon className="w-5 h-5 text-[#3ABEFF]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
                  {service.title}
                </span>
                <span className="text-xs text-white/50 group-hover:text-white/70 mt-0.5 leading-relaxed transition-colors duration-200">
                  {service.description}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
