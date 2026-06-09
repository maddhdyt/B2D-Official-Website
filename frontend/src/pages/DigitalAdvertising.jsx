import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, TrendingUp, Users, Filter, MousePointerClick, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Meta & Google Ads',
    description: 'Precision targeting across the world\'s largest ecosystems. We dominate search intent and interrupt social feeds with highly converted creative.',
    icon: <Target className="text-[#DC143C]" size={28} />,
    colSpan: 'md:col-span-8',
    bg: 'bg-gradient-to-br from-[#0A0A0A] to-[#120000]',
    border: 'border-white/5 hover:border-[#DC143C]/50'
  },
  {
    title: 'TikTok Ads',
    description: 'Native, engaging, and algorithmic. We engineer content that stops the scroll and drives impulse conversions.',
    icon: <TrendingUp className="text-[#DC143C]" size={28} />,
    colSpan: 'md:col-span-4',
    bg: 'bg-[#0A0A0A]',
    border: 'border-white/5 hover:border-[#DC143C]/50'
  },
  {
    title: 'Lead Generation',
    description: 'High-intent acquisition systems designed to fill your sales pipeline with qualified prospects, not just empty clicks.',
    icon: <Users className="text-[#DC143C]" size={28} />,
    colSpan: 'md:col-span-4',
    bg: 'bg-[#0A0A0A]',
    border: 'border-white/5 hover:border-[#DC143C]/50'
  },
  {
    title: 'Performance Strategy',
    description: 'Architecting the overarching ecosystem. We align budgets, channels, and messaging to maximize your return on ad spend (ROAS).',
    icon: <MousePointerClick className="text-[#DC143C]" size={28} />,
    colSpan: 'md:col-span-4',
    bg: 'bg-gradient-to-br from-[#0A0A0A] to-[#1A0000]',
    border: 'border-[#DC143C]/20 hover:border-[#DC143C]'
  },
  {
    title: 'Conversion Optimization',
    description: 'Traffic is meaningless without action. We analyze user journeys and optimize landing pages to ensure every dollar spent works harder.',
    icon: <Filter className="text-[#DC143C]" size={28} />,
    colSpan: 'md:col-span-4',
    bg: 'bg-[#0A0A0A]',
    border: 'border-white/5 hover:border-[#DC143C]/50'
  }
];

const DigitalAdvertising = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.fromTo('.hero-text-line', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      );
      
      tl.fromTo('.hero-markup',
        { scale: 0.8, opacity: 0, rotateZ: -5 },
        { scale: 1, opacity: 1, rotateZ: 0, duration: 1, ease: 'back.out(1.7)' },
        "-=0.6"
      );

      tl.fromTo('.hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );

      // Bento Grid Stagger
      gsap.fromTo('.service-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }}
      );

      // Divider Lines
      gsap.utils.toArray('.divider-line').forEach((line) => {
        gsap.fromTo(line, 
          { scaleX: 0 }, 
          { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: {
            trigger: line,
            start: 'top 90%',
          }}
        );
      });

      // Showcase Image Parallax
      gsap.utils.toArray('.showcase-image').forEach((container) => {
        const img = container.querySelector('img');
        gsap.fromTo(img,
          { scale: 1.15 },
          { scale: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: {
            trigger: container,
            start: 'top 85%'
          }}
        );
        gsap.to(img, {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#030303] overflow-x-hidden text-white font-sans selection:bg-[#DC143C] selection:text-white">
      {/* Navbar spacing compensation */}
      <div className="h-24 md:h-32"></div>

      {/* Top Banner */}
      <div className="w-full bg-[#DC143C] text-white py-2 md:py-3 overflow-hidden flex items-center relative z-30">
        <div className="whitespace-nowrap font-unbounded text-[10px] md:text-xs uppercase tracking-[0.2em] px-4 animate-scroll flex gap-8">
          <span>{">>>"} THE BLUEPRINT TO TURN ATTENTION INTO A PROFITABLE, SCALABLE BUSINESS. {"<<<"}</span>
          <span>{">>>"} THE BLUEPRINT TO TURN ATTENTION INTO A PROFITABLE, SCALABLE BUSINESS. {"<<<"}</span>
          <span>{">>>"} THE BLUEPRINT TO TURN ATTENTION INTO A PROFITABLE, SCALABLE BUSINESS. {"<<<"}</span>
          <span>{">>>"} THE BLUEPRINT TO TURN ATTENTION INTO A PROFITABLE, SCALABLE BUSINESS. {"<<<"}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-32 relative flex flex-col items-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#DC143C]/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto relative z-10 flex justify-between items-start mb-16 md:mb-24">
          
          {/* Left Text */}
          <div className="max-w-[200px] hidden md:block">
            <p className="font-sans text-xs text-white/80 leading-relaxed font-medium">
              Developed over months of testing <br/>
              by our performance experts.
            </p>
          </div>

          {/* Center Card */}
          <div className="relative z-20 w-full max-w-[320px] aspect-[4/5] bg-gradient-to-b from-[#8B0000] to-[#DC143C] p-6 flex flex-col justify-between transform md:-rotate-3 hover:rotate-0 transition-transform duration-500 mx-auto border border-white/10 shadow-[0_0_60px_rgba(220,20,60,0.15)]">
             <p className="font-sans text-[10px] md:text-xs text-white/90 text-center leading-relaxed mb-4">
               Join our performance roster for exclusive access to high-converting campaign architectures and real growth.
             </p>
             <div className="w-full flex-1 overflow-hidden mb-6 relative">
               <div className="absolute inset-0 bg-[#DC143C] mix-blend-multiply pointer-events-none z-10"></div>
               <img src="/assets/editorial/da_dashboard_macro.png" className="w-full h-full object-cover grayscale contrast-125" alt="Dashboard" />
             </div>
             <a href="#services" className="w-full bg-white text-black py-3 font-unbounded text-xs font-bold uppercase text-center hover:bg-white/90 transition-colors flex items-center justify-between px-4">
               <span>INITIATE CAMPAIGN</span>
               <ArrowUpRight size={16} />
             </a>
          </div>

          {/* Right Text */}
          <div className="max-w-[280px] hidden md:block text-right">
            <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
              Tired of investing your budget into clicks, traffic, or impressions—but still not seeing real revenue, momentum, or results?
            </p>
            <p className="font-sans text-xs text-white/80 leading-relaxed">
              This system shows you how to build a proven ecosystem with scalable structure, conversion strategies that work, and marketing tactics designed to get you noticed.
            </p>
          </div>
        </div>

        {/* Huge Typography Bottom */}
        <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-24 mx-auto relative z-10">
          <div className="flex flex-col w-full relative">
            
            {/* Red Scribble Accent (SVG) */}
            <div className="hero-markup absolute -top-8 md:-top-16 left-0 w-full md:w-1/2 flex justify-start opacity-90 pointer-events-none z-0">
              <svg viewBox="0 0 400 60" className="w-[120%] md:w-full h-auto stroke-[#DC143C] stroke-[4] fill-none stroke-linecap-round">
                <path d="M20,50 Q100,10 200,20 T380,30" className="opacity-80"/>
                <path d="M10,40 Q90,5 190,15 T390,25" />
                <path d="M30,30 L80,50 M320,10 L350,40" className="stroke-[2]"/>
              </svg>
            </div>
            
            {/* Line 1 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-2 mb-2 relative z-10">
              <div className="overflow-hidden">
                <h1 className="hero-text-line font-unbounded text-5xl md:text-[6rem] lg:text-[8.5rem] leading-[0.85] font-black uppercase tracking-tighter mix-blend-difference text-white">
                  TURN ATTENTION:
                </h1>
              </div>
              <div className="overflow-hidden mt-4 md:mt-0">
                <div className="hero-markup font-playfair italic text-[#DC143C] text-4xl md:text-5xl lg:text-7xl font-bold transform -rotate-6 md:-translate-y-4 pr-8">
                  SCALING SOON
                </div>
              </div>
            </div>
            
            {/* Line 2 */}
            <div className="flex flex-wrap md:flex-nowrap justify-start items-center gap-4 md:gap-8 border-b border-white/10 pb-2 mb-2 relative z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                <span className="font-unbounded text-xl md:text-4xl text-white">©</span>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-text-line font-unbounded text-4xl md:text-[6rem] lg:text-[8.5rem] leading-[0.85] font-black uppercase tracking-tighter text-white">
                  FROM <span className="font-playfair italic font-light normal-case tracking-normal text-white/90">(CLICKS)</span> TO
                </h1>
              </div>
              <div className="overflow-hidden hidden lg:block ml-auto">
                 <div className="hero-markup font-playfair italic text-[#DC143C] text-3xl md:text-5xl lg:text-7xl font-bold transform -rotate-3 opacity-90">
                   $$$
                 </div>
              </div>
            </div>

            {/* Line 3 */}
            <div className="flex justify-end border-b border-white/10 pb-2 relative z-10">
               <div className="overflow-hidden">
                 <h1 className="hero-text-line font-unbounded text-5xl md:text-[6rem] lg:text-[8.5rem] leading-[0.85] font-black uppercase tracking-tighter text-white">
                  REAL REVENUE
                </h1>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid (Modular Bento) */}
      <section id="services" className="py-24 relative">
        <div className="absolute left-0 top-1/2 w-full h-[1px] bg-[#DC143C]/5 pointer-events-none"></div>
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-6xl italic text-white/90">The Architecture</h2>
              <h3 className="font-unbounded text-xl md:text-2xl uppercase mt-2 text-[#DC143C] font-bold">Of Conversion</h3>
            </div>
            <div className="hero-markup font-playfair italic text-[#DC143C]/60 text-2xl md:text-3xl">
              (Scalable Systems)
            </div>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card group relative p-8 md:p-10 rounded-xl border ${service.border} ${service.bg} ${service.colSpan} overflow-hidden transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Subtle internal gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/0 to-[#DC143C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-[#DC143C]/30 transition-colors duration-500">
                      {service.icon}
                    </div>
                    <span className="font-unbounded text-xs text-white/20 group-hover:text-[#DC143C]/50 transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-unbounded text-2xl md:text-3xl font-bold uppercase mb-4 text-white group-hover:text-white transition-colors">
                      {service.title}
                    </h4>
                    <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Showcase Visuals & Philosophy */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="divider-line w-full h-[1px] bg-white/10 origin-left mb-24"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center mb-32">
            <div className="md:col-span-5 relative z-10 order-2 md:order-1">
              <h2 className="font-playfair text-4xl md:text-6xl italic leading-tight mb-8">
                Data is the foundation. <br/>
                <span className="font-unbounded not-italic uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 text-5xl md:text-7xl block mt-2">
                  Strategy
                </span>
                <span className="font-unbounded not-italic uppercase font-black text-[#DC143C] text-5xl md:text-7xl block -mt-2">
                  Is The Catalyst.
                </span>
              </h2>
              <p className="font-sans text-lg text-white/60 font-light leading-relaxed mb-8">
                We do not believe in vanity metrics. Our ecosystem is built on a ruthless focus on customer acquisition cost (CAC) and lifetime value (LTV). By harmonizing compelling creative with deep audience intelligence, we dictate market demand rather than just capturing it.
              </p>
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#DC143C]"></span>
                <span className="font-unbounded text-xs uppercase tracking-widest text-[#DC143C]">Premium Growth</span>
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <div className="showcase-image w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-[#DC143C]/10 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                  src="/assets/editorial/da_holographic_data.png" 
                  alt="Holographic Data Ecosystem" 
                  className="w-full h-[120%] object-cover origin-top"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
            <div className="md:col-span-8">
               <div className="showcase-image w-full aspect-video rounded-2xl overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none"></div>
                <img 
                  src="/assets/editorial/da_funnel_3d.png" 
                  alt="Conversion Funnel 3D" 
                  className="w-full h-[120%] object-cover origin-top"
                />
              </div>
            </div>
            <div className="md:col-span-4">
               <div className="showcase-image w-full h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/5 relative">
                <img 
                  src="/assets/editorial/da_dashboard_macro.png" 
                  alt="Analytics Dashboard Macro" 
                  className="w-full h-[120%] object-cover origin-top"
                />
              </div>
            </div>
          </div>

          <div className="divider-line w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC143C]/30 to-transparent origin-center mb-32"></div>

          {/* Call to Action Minimal */}
          <div className="text-center flex flex-col items-center">
            <p className="font-playfair italic text-2xl md:text-3xl text-[#DC143C] mb-6">Ready to scale?</p>
            <h2 className="font-unbounded text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12">
              Command Your <br/> Market.
            </h2>
            <a href="/contact" className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-[#DC143C] transition-colors duration-500">
              <div className="absolute inset-0 bg-[#DC143C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
              <span className="relative z-10 font-unbounded text-sm uppercase tracking-widest text-white mix-blend-difference flex items-center gap-3">
                Initiate Campaign <ArrowUpRight size={16} />
              </span>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalAdvertising;
