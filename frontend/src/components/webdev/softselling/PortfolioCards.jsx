import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioCards() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      num: "01",
      category: "COMPANY PROFILE — CUSTOM CODE",
      title: "Katalog Digital",
      desc: "Rebranding digital lengkap untuk perusahaan distribusi yang ingin menjangkau pasar B2B lebih luas.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      year: "2024"
    },
    {
      num: "02",
      category: "WEDDING INVITATION — CUSTOM",
      title: "Merayakan Cinta",
      desc: "Undangan digital personal dengan 847 tamu yang mengkonfirmasi kehadiran secara online.",
      tags: ["React", "Custom Animation", "RSVP Integration"],
      year: "2024"
    },
    {
      num: "03",
      category: "LANDING PAGE — CAMPAIGN",
      title: "Konversi Pertama",
      desc: "Landing page kampanye yang menghasilkan 312 leads dalam 30 hari pertama.",
      tags: ["Next.js", "A/B Optimized", "Mobile-first"],
      year: "2025"
    },
    {
      num: "04",
      category: "CRM SYSTEM — CUSTOM",
      title: "Pipeline yang Rapi",
      desc: "Sistem CRM custom untuk tim sales 15 orang — menggantikan 6 spreadsheet berbeda.",
      tags: ["Laravel", "React", "Pusher"],
      year: "2025"
    },
    {
      num: "05",
      category: "ERP SYSTEM — ENTERPRISE",
      title: "Satu Sistem, Terkendali",
      desc: "Platform manajemen bisnis terintegrasi untuk operasional 3 cabang berskala nasional.",
      tags: ["Laravel", "React", "Queue"],
      year: "2025"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      // Set initial positions for cards (except the first one)
      gsap.set(cards[0], { transformOrigin: "top center" });
      gsap.set(cards.slice(1), { y: "150vh", transformOrigin: "top center" });

      // Create a pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current, 
          start: "top 15%", // Biarkan header kescroll ke atas terlebih dahulu
          end: () => `+=${window.innerHeight * cards.length}`, // Gunakan window height agar durasi scroll pas dengan transisi
          scrub: 1, 
          pin: containerRef.current, // PIN KESELURUHAN SECTION, agar background biru gelap menutupi layar sepenuhnya dan tidak bocor ke section bawah
        }
      });

      const stackGap = 30; // Jarak offset diturunkan agar lebih efisien dan tidak mendorong card terlalu jauh

      cards.forEach((card, i) => {
        if (i === 0) return;

        // Card baru masuk dan berhenti di posisi berjenjang ke bawah
        tl.to(card, {
          y: i * stackGap, 
          ease: "power2.out",
        }, i);

        // Card di belakangnya mengecil, menggelap, posisinya tetap di tempat semula
        for (let j = 0; j < i; j++) {
          tl.to(cards[j], {
            scale: 1 - ((i - j) * 0.04), // Mengecil perlahan
            filter: `brightness(${1 - ((i - j) * 0.2)})`, 
            ease: "power2.out",
          }, i);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#050A18] overflow-hidden flex flex-col items-center border-t border-white/10 pt-12 md:pt-20 pb-[30vh]">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 border-x border-white/10 max-w-[1440px] mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] pointer-events-none" />

      {/* Header "PROJECTS SUCCESSFUL" */}
      <div className="relative z-10 pointer-events-none w-full max-w-[1440px] px-4 md:px-16 lg:px-24 mb-12">
        <div className="flex flex-col">
          <span className="font-['Unbounded'] font-black text-[12vw] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] text-[#3B82F6] tracking-tighter leading-[0.85] uppercase mix-blend-screen">
            Projects
          </span>
          <span className="font-['Unbounded'] font-bold text-[10vw] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-white tracking-tighter leading-[0.85] md:ml-16 uppercase opacity-50">
            Successful
          </span>
        </div>
      </div>

      {/* Dynamic Height Cards Wrapper using CSS Grid */}
      <div 
        ref={wrapperRef}
        className="grid w-full max-w-5xl mx-auto z-20 px-4 md:px-0 relative"
        style={{ paddingBottom: `${(projects.length - 1) * 30}px` }} // Ruang tambahan agar card terakhir tidak terpotong stackGap
      >
        {projects.map((project, idx) => (
          <div 
            key={idx}
            ref={el => cardsRef.current[idx] = el}
            className="w-full rounded-2xl overflow-hidden flex flex-col justify-end p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] will-change-transform bg-[#0A1128] relative"
            style={{ 
              gridArea: "1 / 1", // Tumpuk semua card di satu sel grid yang sama
              zIndex: idx 
            }}
          >
            {/* Background Graphic Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B143A] to-[#050A18] z-0">
               <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `radial-gradient(circle at 50% 0%, #3B82F6 0%, transparent 70%)` }}></div>
               
               {/* Massive Numbers */}
               <span className="absolute -top-4 -right-4 md:top-8 md:right-8 text-white/[0.03] font-['Unbounded'] font-black text-[10rem] md:text-[16rem] tracking-tighter pointer-events-none leading-none">
                 {project.num}
               </span>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/80 to-transparent z-10" />

            {/* Content (Dynamic height friendly) */}
            <div className="relative z-20 flex flex-col gap-3 md:gap-5 min-h-[300px] md:min-h-[350px] justify-end">
              <span className="text-[#00D4FF] text-[10px] md:text-sm font-medium tracking-widest font-['Unbounded'] uppercase">
                {project.category}
              </span>
              <h3 className="font-['Unbounded'] text-3xl md:text-6xl text-white font-bold uppercase tracking-tight">{project.title}</h3>
              <p className="text-[#94A3B8] text-sm md:text-xl font-light leading-relaxed max-w-2xl mb-2">
                {project.desc}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 md:mt-6 border-t border-white/10 pt-4 md:pt-6 gap-4 md:gap-6">
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[#94A3B8] text-[9px] md:text-xs font-['Unbounded'] tracking-widest uppercase border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-white font-['Unbounded'] text-[10px] md:text-sm font-bold uppercase tracking-widest hover:text-[#00D4FF] cursor-pointer transition-colors group flex items-center gap-2 mt-2 md:mt-0">
                  View Full Case <span className="inline-block transform transition-transform group-hover:translate-x-2">&rarr;</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
