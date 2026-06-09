import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo(
        ".hero-text-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );
      
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.8 }
      );

      // Scroll Animations
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach(section => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            }
          }
        );
      });

      // Line Draw Animations
      gsap.utils.toArray('.divider-line').forEach(line => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
            }
          }
        );
      });

      // Number Counters
      gsap.utils.toArray('.stat-number').forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const suffix = stat.getAttribute('data-suffix') || '';
        
        gsap.fromTo(stat, 
          { innerHTML: 0 }, 
          {
            innerHTML: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
            },
            onUpdate: function() {
              stat.innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    "Web Design & Development",
    "Digital Advertising",
    "Content Creative",
    "CRM & Automation",
    "Landing Page Development",
    "Company Profile Website",
    "ERP/CRM Custom System",
    "Digital Growth Strategy"
  ];

  const processes = [
    { title: "Discovery", desc: "Understanding your business goals, target audience, and current digital footprint." },
    { title: "Strategy", desc: "Crafting a tailored roadmap merging creative vision with data-driven insights." },
    { title: "Design", desc: "Developing premium visual identities and user-centric interfaces." },
    { title: "Development", desc: "Building robust, scalable, and high-performance digital architectures." },
    { title: "Launch", desc: "Executing a flawless go-to-market plan with precision." },
    { title: "Growth Optimization", desc: "Continuous monitoring, testing, and scaling for sustained success." }
  ];

  const industries = [
    "Manufacturing", "Education", "Healthcare", "Retail", "Food & Beverage", "Real Estate", "Corporate Services", "Technology"
  ];

  return (
    <>
      <main ref={containerRef} className="w-full min-h-screen bg-[#030303] text-white pt-24 md:pt-32 overflow-hidden">
        
        {/* 1. Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 md:mb-48 relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-10 w-[40vw] h-[40vw] bg-[#00D4FF]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto">
          <p className="hero-fade font-unbounded text-xs md:text-sm uppercase tracking-[0.3em] text-[#00D4FF] mb-8">About B2D</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] font-bold mb-12 mix-blend-lighten">
            <div className="overflow-hidden"><span className="hero-text-line block font-unbounded tracking-tighter">Building Digital</span></div>
            <div className="overflow-hidden"><span className="hero-text-line block font-unbounded tracking-tighter">Growth Through</span></div>
            <div className="overflow-hidden"><span className="hero-text-line block"><span className="font-playfair italic font-light">Strategy,</span> Creativity</span></div>
            <div className="overflow-hidden"><span className="hero-text-line block font-unbounded tracking-tighter">&amp; Technology.</span></div>
          </h1>

          <div className="hero-fade max-w-2xl ml-auto border-l border-white/20 pl-8">
            <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed">
              We are a premium digital agency architecting scalable growth. By fusing high-end design with performance marketing, we transform businesses into industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 divider-line origin-left max-w-[1400px] mx-auto mb-32" />

      {/* 2. Company Overview (Asymmetrical) */}
      <section className="reveal-section px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-unbounded font-bold mb-8 leading-tight">
              We redefine <br/>
              <span className="font-playfair italic font-light text-[#00D4FF]">possibilities.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-xl text-white/80 font-light leading-relaxed">
              At B2D, we believe that true digital transformation requires more than just a beautiful website or a clever campaign. It demands a holistic ecosystem where strategy, creativity, and technology work in perfect synchronization.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              Our mission is to partner with ambitious brands, helping them navigate the complexities of the digital landscape. We don't just deliver projects; we engineer long-term growth engines that drive tangible business results.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Company Statistics (Modular Grid) */}
      <section className="reveal-section px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10">
            
            <div className="border-r border-b border-white/10 p-12 lg:p-16 flex flex-col justify-between aspect-square md:aspect-auto">
              <p className="font-unbounded text-sm uppercase tracking-widest text-white/50 mb-12">Years Experience</p>
              <div className="text-7xl lg:text-[8rem] font-bold font-unbounded tracking-tighter text-white">
                <span className="stat-number" data-target="5" data-suffix="+">0</span>
              </div>
            </div>

            <div className="border-r border-b border-white/10 p-12 lg:p-16 flex flex-col justify-between bg-[#070B0D]">
              <p className="text-2xl md:text-3xl font-playfair font-light leading-snug mb-12">
                We bring together the perfect blend of deep technical <span className="font-semibold text-[#00D4FF]">expertise</span>, beautiful <span className="font-semibold text-[#00D4FF]">design</span> and optimised <span className="font-semibold text-[#00D4FF]">usability</span>.
              </p>
            </div>

            <div className="border-r border-b border-white/10 p-12 lg:p-16 flex flex-col justify-between aspect-square bg-[#070B0D]">
              <p className="font-unbounded text-sm uppercase tracking-widest text-white/50 mb-12">Projects Completed</p>
              <div className="text-7xl lg:text-[8rem] font-bold font-unbounded tracking-tighter text-white">
                <span className="stat-number" data-target="150" data-suffix="+">0</span>
              </div>
            </div>

            <div className="border-r border-b border-white/10 p-12 lg:p-16 flex flex-col justify-between aspect-square">
              <p className="font-unbounded text-sm uppercase tracking-widest text-white/50 mb-12">Client Satisfaction</p>
              <div className="text-7xl lg:text-[8rem] font-bold font-unbounded tracking-tighter text-[#00D4FF]">
                <span className="stat-number" data-target="100" data-suffix="%">0</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="reveal-section px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-6xl font-bold font-unbounded tracking-tighter">What We Do.</h2>
            <p className="text-white/50 font-playfair italic text-xl mt-4 md:mt-0">Comprehensive digital solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#030303] p-10 group hover:bg-[#070B0D] transition-colors duration-500 relative overflow-hidden flex items-end min-h-[250px]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D4FF]/0 via-transparent to-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-unbounded text-lg font-medium leading-snug relative z-10 group-hover:text-[#00D4FF] transition-colors duration-300">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="reveal-section px-6 md:px-12 lg:px-24 mb-32 md:mb-48 bg-[#070B0D] py-24 md:py-32 relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-unbounded tracking-tighter mb-24 text-center">Our Process.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {processes.map((proc, idx) => (
              <div key={idx} className="relative">
                <div className="text-8xl font-playfair font-bold text-white/5 absolute -top-12 -left-6 pointer-events-none">
                  0{idx + 1}
                </div>
                <div className="border-t border-white/20 pt-6 relative z-10">
                  <h3 className="font-unbounded text-xl font-semibold mb-4">{proc.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trusted By / Industries */}
      <section className="reveal-section px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-white/10">
            
            {/* Center Callout Area */}
            <div className="col-span-2 md:col-span-4 lg:col-span-3 row-span-2 border-r border-b border-white/10 flex items-center justify-center p-12 bg-[#030303] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#00D4FF]/5 blur-[100px]" />
              <h2 className="text-3xl md:text-5xl font-unbounded font-bold text-center leading-tight z-10">
                WE'VE WORKED WITH <br/>
                <span className="font-playfair italic font-light text-[#00D4FF]">AMAZING INDUSTRIES</span>
              </h2>
            </div>

            {/* Industry Cells */}
            {industries.map((ind, idx) => (
              <div key={idx} className="border-r border-b border-white/10 h-[150px] flex items-center justify-center p-6 bg-[#070B0D] hover:bg-white/5 transition-colors duration-300">
                <span className="font-sans text-xs uppercase tracking-widest text-center text-white/80">{ind}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 7. Why Choose B2D */}
      <section className="reveal-section px-6 md:px-12 lg:px-24 mb-16 text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="font-unbounded text-xs uppercase tracking-[0.3em] text-[#00D4FF] mb-8">Ready to Scale?</p>
          <h2 className="text-4xl md:text-6xl font-bold font-unbounded mb-8 leading-tight">
            Partner with the agency that <span className="font-playfair italic font-light">delivers.</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 leading-relaxed">
            Stop settling for average results. Let us build a robust digital architecture that amplifies your brand and accelerates your revenue.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-10 py-4 rounded-full bg-[#00D4FF] text-black font-unbounded text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Start Your Project
          </a>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
