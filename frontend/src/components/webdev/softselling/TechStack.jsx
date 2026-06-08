import React from "react";
import EditorialGrid from "../../editorial/EditorialGrid";
import { 
  React as ReactIcon, 
  Typescript, 
  Supabase, 
  Firebase, 
  Postgresql, 
  GithubCopilot, 
  Nextdotjs, 
  Github, 
  Laravel, 
  Mysql, 
  Wordpress 
} from '@thesvg/react';

export default function TechStack() {
  const row1 = [
    { name: "NEXT.JS", icon: Nextdotjs },
    { name: "REACT", icon: ReactIcon },
    { name: "TYPESCRIPT", icon: Typescript },
    { name: "LARAVEL", icon: Laravel },
    { name: "WORDPRESS", icon: Wordpress },
    { name: "COPILOT", icon: GithubCopilot }
  ];

  const row2 = [
    { name: "POSTGRES", icon: Postgresql },
    { name: "MYSQL", icon: Mysql },
    { name: "SUPABASE", icon: Supabase },
    { name: "FIREBASE", icon: Firebase },
    { name: "GITHUB", icon: Github }
  ];

  return (
    <EditorialGrid noTopLine>
      <div className="flex flex-col items-center justify-center py-20 md:py-24 overflow-hidden relative w-full bg-[#050A18]">
        
        <h3 className="text-[#94A3B8] text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium mb-12 text-center">
          Tools & Stack
        </h3>

        {/* Custom CSS untuk Seamless Marquee */}
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .custom-marquee-left {
            animation: scroll-left 90s linear infinite;
          }
          .custom-marquee-right {
            animation: scroll-right 100s linear infinite;
          }
        `}</style>

        {/* MASKING & CENTERING */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 flex flex-col items-center overflow-hidden">
          
          {/* Row 1: Kiri ke Kanan */}
          <div className="w-full flex flex-nowrap mb-6 relative">
            <div className="flex w-max custom-marquee-left items-center">
              {/* Kita ulang array untuk infinite scroll */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {row1.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <React.Fragment key={`r1-${i}-${idx}`}>
                        <div className="flex items-center gap-4 md:gap-8">
                          {Icon && <Icon className="w-12 h-12 md:w-20 md:h-20 text-white" />}
                          <span className="font-['Unbounded'] font-black text-5xl md:text-7xl lg:text-[7rem] text-white tracking-tighter uppercase whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                        <span className="mx-8 md:mx-16 text-[#00D4FF] text-3xl md:text-5xl">
                          &bull;
                        </span>
                      </React.Fragment>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Kanan ke Kiri */}
          <div className="w-full flex flex-nowrap relative">
            <div className="flex w-max custom-marquee-right items-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {row2.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <React.Fragment key={`r2-${i}-${idx}`}>
                        <div className="flex items-center gap-4 md:gap-8 group">
                          {Icon && <Icon className="w-12 h-12 md:w-20 md:h-20 text-white/40 group-hover:text-[#3B82F6] transition-colors" />}
                          <span className="font-['Unbounded'] font-black text-5xl md:text-7xl lg:text-[7rem] text-white/40 tracking-tighter uppercase whitespace-nowrap transition-colors group-hover:text-[#3B82F6] cursor-default">
                            {item.name}
                          </span>
                        </div>
                        <span className="mx-8 md:mx-16 text-[#3B82F6]/50 text-3xl md:text-5xl">
                          &bull;
                        </span>
                      </React.Fragment>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </EditorialGrid>
  );
}
