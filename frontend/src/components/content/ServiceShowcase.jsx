import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Video, FileText, PenTool, BarChart2, Mail, Search, Palette } from 'lucide-react';

const services = [
  {
    id: "branding",
    title: "Visual Branding",
    desc: "Logo, color palette, typography, brand guideline lengkap.",
    price: "Rp 3.000.000",
    tag: "Design",
    size: "large", // spans 2 columns
    icon: <Palette className="w-6 h-6 text-[#EC4899]" />,
    visual: (
      <div className="mt-4 flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 bg-[#050A18] rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-[#00D4FF]" />
            <div className="w-6 h-6 rounded-full bg-[#8B5CF6]" />
            <div className="w-6 h-6 rounded-full bg-[#EC4899]" />
          </div>
          <div className="w-24 h-2 bg-[#A0B4CC]/20 rounded" />
        </div>
      </div>
    )
  },
  {
    id: "sosmed",
    title: "Social Media Management",
    desc: "Kelola konten IG/TikTok/LinkedIn: planning, copywriting, posting.",
    price: "Rp 2.000.000/bln",
    tag: "Strategy & Post",
    size: "medium",
    icon: <Smartphone className="w-6 h-6 text-[#00D4FF]" />,
    visual: (
      <div className="mt-4 grid grid-cols-3 gap-1 opacity-80">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-[#A0B4CC]/10 rounded-sm" />
        ))}
      </div>
    )
  },
  {
    id: "video",
    title: "Short Video Production",
    desc: "Script + storyboard + editing brief untuk Reels/TikTok.",
    price: "Rp 1.200.000/vid",
    tag: "Video",
    size: "medium",
    icon: <Video className="w-6 h-6 text-[#8B5CF6]" />,
    visual: (
      <div className="mt-4 flex items-center gap-3 opacity-80">
        <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center border border-[#8B5CF6]/50">
          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-[#8B5CF6] border-b-4 border-b-transparent ml-1" />
        </div>
        <div className="flex items-end gap-1 h-8">
          {[1, 3, 2, 4, 2, 3, 1].map((h, i) => (
            <div key={i} className="w-1.5 bg-[#8B5CF6]/50 rounded-full" style={{ height: `${h * 20}%` }} />
          ))}
        </div>
      </div>
    )
  },
  {
    id: "strategy",
    title: "Content Strategy",
    desc: "Audit konten, kalender editorial 3 bulan, tone of voice guideline.",
    price: "Rp 1.500.000",
    tag: "Strategy",
    size: "small",
    icon: <FileText className="w-5 h-5 text-[#A0B4CC]" />
  },
  {
    id: "copy",
    title: "Copywriting",
    desc: "Landing page copy, email, ads.",
    price: "Rp 800.000/proyek",
    tag: "Copy",
    size: "small",
    icon: <PenTool className="w-5 h-5 text-[#A0B4CC]" />
  },
  {
    id: "infographic",
    title: "Infographic Design",
    desc: "Data visualization, infografis.",
    price: "Rp 500.000/desain",
    tag: "Design",
    size: "small",
    icon: <BarChart2 className="w-5 h-5 text-[#00D4FF]" />,
    visual: (
      <div className="mt-3 flex items-end gap-2 h-10 opacity-70">
        <div className="w-3 bg-[#00D4FF]/40 rounded-t-sm h-[40%]" />
        <div className="w-3 bg-[#00D4FF]/60 rounded-t-sm h-[70%]" />
        <div className="w-3 bg-[#00D4FF] rounded-t-sm h-[100%]" />
      </div>
    )
  },
  {
    id: "email",
    title: "Email Newsletter",
    desc: "Desain template + copy.",
    price: "Rp 1.000.000/blast",
    tag: "Copy & Design",
    size: "small",
    icon: <Mail className="w-5 h-5 text-[#A0B4CC]" />
  },
  {
    id: "audit",
    title: "Brand Audit",
    desc: "Review identitas visual & konten.",
    price: "Rp 750.000/sesi",
    tag: "Strategy",
    size: "small",
    icon: <Search className="w-5 h-5 text-[#A0B4CC]" />
  }
];

const ServiceShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 bg-[#0A1628] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apa yang Kami Kerjakan
          </h2>
          <p className="text-[#A0B4CC] text-lg max-w-2xl">
            Layanan kreatif end-to-end untuk memastikan brand Anda memiliki identitas yang kuat dan pesan yang jelas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;
            const isOtherHovered = hoveredId !== null && hoveredId !== service.id;
            
            // Layout classes based on size
            let colSpan = "col-span-1";
            let rowSpan = "row-span-1";
            
            if (service.size === "large") {
              colSpan = "md:col-span-2 lg:col-span-2";
              rowSpan = "row-span-2";
            } else if (service.size === "medium") {
              colSpan = "md:col-span-1 lg:col-span-2";
              rowSpan = "row-span-1";
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative p-6 rounded-2xl flex flex-col justify-between overflow-hidden cursor-pointer
                  transition-all duration-500 ease-out
                  ${colSpan} ${rowSpan}
                  bg-[#0D1F3C] border border-[rgba(255,255,255,0.05)]
                  ${isHovered ? 'scale-[1.02] border-[#8B5CF6]/50 shadow-[0_0_40px_rgba(139,92,246,0.2)] z-10' : ''}
                  ${isOtherHovered ? 'opacity-40 blur-[2px] scale-[0.98]' : 'opacity-100 blur-0'}
                `}
              >
                {/* Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-2.5 py-1 bg-[#050A18] border border-[rgba(255,255,255,0.1)] rounded-md text-xs font-medium text-[#A0B4CC]">
                      {service.tag}
                    </span>
                    <div className="bg-[#050A18] p-2 rounded-lg">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className={`font-bold text-white mb-2 ${service.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  <p className="text-[#A0B4CC] text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex flex-col justify-end">
                  {service.visual && (
                    <div className="mb-4">
                      {service.visual}
                    </div>
                  )}
                  <div className="text-sm font-semibold text-[#8B5CF6]">
                    {service.price}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceShowcase;
