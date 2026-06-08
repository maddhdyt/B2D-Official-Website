import React from "react";
import { motion } from "framer-motion";
import EditorialGrid from "../../editorial/EditorialGrid";

export default function WorkPhilosophy() {
  const cards = [
    {
      num: "01",
      title: "CRAFT",
      text: "Setiap keputusan desain punya alasan. Bukan estetika semata — tapi fungsi yang membentuk pengalaman."
    },
    {
      num: "02",
      title: "PERFORMANCE",
      text: "Website yang lambat kehilangan <span class='text-[#00D4FF]'>53%</span> pengunjung sebelum dimuat. Kami tidak membiarkan itu terjadi."
    },
    {
      num: "03",
      title: "LONGEVITY",
      text: "Kami tidak membangun untuk hari ini. Kami membangun untuk bisnis Anda 5 tahun ke depan."
    }
  ];

  return (
    <EditorialGrid noTopLine>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pt-12">
        
        {/* Left: Headline */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white"
          >
            Bukan sekadar<br />
            website —<br />
            sebuah sistem<br />
            yang bekerja.
          </motion.h2>
        </div>

        {/* Right: 3 Statement Cards */}
        <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="border border-white/10 p-8 rounded-sm bg-white/[0.02]"
            >
              <h3 className="text-white text-xs md:text-sm tracking-[0.15em] mb-4">
                <span className="text-[#94A3B8]">{card.num}</span> &mdash; {card.title}
              </h3>
              <p 
                className="text-[#94A3B8] font-light leading-relaxed text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: card.text }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </EditorialGrid>
  );
}
