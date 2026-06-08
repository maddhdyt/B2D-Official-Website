import React from "react";
import Footer from "../components/Footer";
import EditorialGrid from "../components/editorial/EditorialGrid";
import EditorialHeader from "../components/editorial/EditorialHeader";
import EditorialImage from "../components/editorial/EditorialImage";
import DisplayType from "../components/editorial/DisplayType";

// Soft Selling Sections
import WhyUs from "../components/webdev/softselling/WhyUs";
import PortfolioCards from "../components/webdev/softselling/PortfolioCards";
import ProcessMinimal from "../components/webdev/softselling/ProcessMinimal";
import TechStack from "../components/webdev/softselling/TechStack";
import SocialProofNumbers from "../components/webdev/softselling/SocialProofNumbers";
import SoftCTAInvitation from "../components/webdev/softselling/SoftCTAInvitation";

export default function WebDesignDevelopment() {
  return (
    <>
      <main className="w-full bg-[#050A18] overflow-x-hidden text-white pt-24">
        {/* Hero Section */}
        <EditorialGrid>
          <div className="flex flex-col items-center justify-center relative w-full text-center py-20 md:py-32">
            {/* Plus Decorative Corners */}
            <div className="absolute -top-12 -left-6 text-white/20 text-xl font-light leading-none">+</div>
            <div className="absolute -top-12 -right-6 text-white/20 text-xl font-light leading-none">+</div>
            
            {/* Background Outline Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-black text-transparent opacity-20 select-none pointer-events-none z-0" style={{ WebkitTextStroke: '2px #00D4FF', fontFamily: "'Unbounded', sans-serif" }}>
              (WEB)
            </div>

            {/* Main Stacked Typography */}
            <div className="relative z-10 flex flex-col items-center leading-[0.8] tracking-tighter">
              <span className="text-5xl md:text-8xl lg:text-9xl font-black text-[#00D4FF] uppercase" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                Web
              </span>
              <span className="text-7xl md:text-[9rem] lg:text-[13rem] font-black text-[#00D4FF] uppercase -mt-2 md:-mt-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                Design
              </span>
              <span className="italic text-5xl md:text-[6.5rem] lg:text-[9rem] font-bold text-white uppercase -mt-2 md:-mt-8" style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}>
                & Development
              </span>
            </div>
            
            {/* Floating Descriptive Text */}
            <div className="absolute hidden lg:block right-0 top-1/4 w-64 text-left">
              <p className="text-[#94A3B8] text-sm font-light leading-relaxed">
                We build futuristic user interfaces and high-performance digital products. Merging aesthetics with scalable engineering.
              </p>
            </div>

            {/* Scroll indicator lingkaran */}
            <div className="absolute -bottom-16 right-0 md:right-8 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <span className="text-[10px] tracking-widest text-[#94A3B8] uppercase">Scroll &darr;</span>
            </div>
          </div>
        </EditorialGrid>

        {/* Section B (Moved up: Selected Works / Projects Successful) */}
        <PortfolioCards />

        {/* Section Why Us (Replaces WorkPhilosophy) */}
        <WhyUs />

        {/* Section C */}
        <ProcessMinimal />

        {/* Section D */}
        <TechStack />

        {/* Section E */}
        <SocialProofNumbers />

        {/* Section F */}
        <SoftCTAInvitation />

      </main>
      <Footer />
    </>
  );
}
