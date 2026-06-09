import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import { portfolioProjects } from '../data/portfolioProjects';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  // Generate 20 random floating cards based on the 5 original projects
  const [floatingCards] = useState(() => {
    const cards = [];
    for (let i = 0; i < 20; i++) {
      const project = portfolioProjects[i % portfolioProjects.length];
      // Randomize position, depth, and scale
      const isForeground = Math.random() > 0.5;
      cards.push({
        id: `float-${i}`,
        project,
        // Spread cards organically (avoiding the exact center where the text is)
        top: Math.random() > 0.5 ? `${Math.random() * 30}%` : `${70 + Math.random() * 30}%`,
        left: Math.random() > 0.5 ? `${Math.random() * 30}%` : `${70 + Math.random() * 30}%`,
        scale: isForeground ? 0.8 + Math.random() * 0.7 : 0.3 + Math.random() * 0.4,
        z: isForeground ? 50 + Math.random() * 100 : -100 - Math.random() * 200,
        rotation: (Math.random() - 0.5) * 40,
        opacity: isForeground ? 0.8 : 0.3,
        parallaxSpeed: isForeground ? 0.05 + Math.random() * 0.05 : 0.01 + Math.random() * 0.02
      });
    }
    return cards;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // 1. Entrance Stagger for floating cards
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          scale: 0,
          z: -500,
          rotation: (i) => floatingCards[i].rotation + 45
        },
        {
          opacity: (i) => floatingCards[i].opacity,
          scale: (i) => floatingCards[i].scale,
          z: (i) => floatingCards[i].z,
          rotation: (i) => floatingCards[i].rotation,
          duration: 2,
          stagger: {
            amount: 1.5,
            from: "random"
          },
          ease: "expo.out",
          delay: 0.2
        }
      );

      // 2. Continuous Organic Floating Motion
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          y: `+=${20 + Math.random() * 30}`,
          x: `+=${(Math.random() - 0.5) * 20}`,
          rotation: `+=${(Math.random() - 0.5) * 10}`,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2
        });
      });

      // 3. Hero Text Reveal
      gsap.fromTo(
        ".hero-text-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power4.out", delay: 0.5 }
      );

      // 4. Scroll Parallax for Hero
      gsap.to(cardsRef.current, {
        y: (i) => -300 * floatingCards[i].parallaxSpeed * 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // 5. Editorial Showcase Reveal
      const projectRows = gsap.utils.toArray('.project-row');
      projectRows.forEach(row => {
        gsap.fromTo(
          row,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%"
            }
          }
        );
      });

    }, containerRef);

    // Mouse Parallax Logic
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const speed = floatingCards[i].parallaxSpeed * 100;
        gsap.to(card, {
          x: -xPos * speed,
          y: -yPos * speed,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      ctx.revert();
      if (heroEl) heroEl.removeEventListener('mousemove', handleMouseMove);
    };
  }, [floatingCards]);

  return (
    <>
      <main ref={containerRef} className="w-full min-h-screen bg-[#030303] text-white overflow-x-hidden">
        
        {/* HERO SECTION: FLOATING 3D GALLERY */}
        <section 
          ref={heroRef}
          className="relative w-full h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden perspective-1000"
        >
          {/* Ambient Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,rgba(3,3,3,1)_60%)] pointer-events-none z-0" />
          
          {/* Floating Cards Layer */}
          <div className="absolute inset-0 z-10 pointer-events-none transform-style-3d">
            {floatingCards.map((card, idx) => (
              <div
                key={card.id}
                ref={el => cardsRef.current[idx] = el}
                className="absolute w-48 md:w-64 aspect-[4/3] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
                style={{
                  top: card.top,
                  left: card.left,
                  willChange: "transform, opacity"
                }}
              >
                <div className="absolute inset-0 bg-[#00D4FF]/10 mix-blend-overlay z-10" />
                <img 
                  src={card.project.image.webp} 
                  alt="" 
                  className="w-full h-full object-cover filter contrast-125 saturate-50"
                />
              </div>
            ))}
          </div>

          {/* Center Title */}
          <div className="relative z-20 text-center max-w-5xl px-6 pointer-events-none">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] font-bold mix-blend-lighten drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">
              <div className="overflow-hidden"><span className="hero-text-line block font-unbounded tracking-tighter">Projects That</span></div>
              <div className="overflow-hidden"><span className="hero-text-line block"><span className="font-playfair italic font-light text-[#00D4FF]">Drive</span> Growth.</span></div>
            </h1>
            <div className="overflow-hidden mt-8">
              <p className="hero-text-line font-sans text-lg md:text-xl text-white/60 tracking-wide">
                Exploring the intersection of premium design and performance marketing.
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
            <span className="font-unbounded text-xs tracking-widest uppercase">Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        {/* EDITORIAL SHOWCASE SECTION */}
        <section className="relative z-30 w-full bg-[#030303] py-32 md:py-48 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
              <h2 className="text-4xl md:text-5xl font-bold font-unbounded tracking-tighter">Selected Works.</h2>
              <p className="text-white/50 font-playfair italic text-xl mt-4 md:mt-0">Premium digital executions.</p>
            </div>

            <div className="flex flex-col gap-32">
              {portfolioProjects.map((project, idx) => (
                <div key={project.id} className="project-row grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 group">
                  
                  {/* Left: Project Image */}
                  <div className="lg:col-span-8 overflow-hidden rounded-sm relative cursor-pointer">
                    <div className="absolute inset-0 bg-[#00D4FF]/0 group-hover:bg-[#00D4FF]/10 transition-colors duration-500 z-10 pointer-events-none" />
                    <img 
                      src={project.image.webp} 
                      alt={project.title}
                      className="w-full h-full object-cover aspect-[16/9] transform group-hover:scale-105 transition-transform duration-1000 ease-[0.25,1,0.5,1]"
                    />
                  </div>

                  {/* Right: Editorial Data */}
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <span className="font-unbounded text-xs uppercase tracking-[0.2em] text-[#00D4FF] mb-6">
                      {project.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-10 text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-col gap-4 border-t border-white/10 pt-8 mb-12">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40">Services</span>
                        <span className="text-right">Strategy, UI/UX, Development</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40">Result</span>
                        <span className="text-right text-[#00D4FF]">+150% Conversion Rate</span>
                      </div>
                    </div>

                    <a 
                      href="#case-study" 
                      className="w-fit flex items-center gap-4 border-b border-white pb-2 hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
                    >
                      <span className="font-unbounded text-sm uppercase tracking-wider">View Case Study</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
