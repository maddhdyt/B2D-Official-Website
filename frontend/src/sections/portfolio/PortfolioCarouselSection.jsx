import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioProjects } from "../../data/portfolioProjects";
import PortfolioPicture from "./PortfolioPicture";

gsap.registerPlugin(ScrollTrigger);

// We need 6 projects for the scattered layout.
// Duplicate if necessary to fill the slots.
const displayProjects = [...portfolioProjects, ...portfolioProjects].slice(0, 6);

// Configuration for asymmetrical scattering
const cardConfigs = [
  { top: "15%", left: "10%", width: "w-[150px] md:w-[200px]", speed: 0.05, float: 3.2 },
  { top: "10%", left: "70%", width: "w-[120px] md:w-[160px]", speed: 0.03, float: 2.8 },
  { top: "45%", left: "5%", width: "w-[200px] md:w-[280px]", speed: -0.04, float: 4.1 },
  { top: "65%", left: "80%", width: "w-[180px] md:w-[240px]", speed: -0.06, float: 3.5 },
  { top: "75%", left: "30%", width: "w-[140px] md:w-[180px]", speed: 0.04, float: 2.5 },
  { top: "35%", left: "85%", width: "w-[100px] md:w-[140px]", speed: 0.02, float: 3.0 },
];

export default function PortfolioCarouselSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Entrance
      gsap.fromTo(
        ".floating-card",
        { y: 100, opacity: 0, scale: 0.9 },
        { 
          y: 0, opacity: 1, scale: 1, 
          duration: 1.5, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // 2. Text Reveal
      gsap.fromTo(
        ".headline-word",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // 3. Continuous Floating (Zero Gravity)
      gsap.utils.toArray(".floating-card").forEach((card, index) => {
        const floatDuration = cardConfigs[index].float;
        gsap.to(card.querySelector('.card-inner'), {
          y: "-=25",
          rotation: (Math.random() - 0.5) * 4,
          duration: floatDuration,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Math.random() * -2
        });
      });

      // 4. Mouse Tracking Parallax
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        gsap.utils.toArray(".floating-card").forEach((card, index) => {
          const speed = cardConfigs[index].speed;
          const xPos = (clientX - centerX) * speed;
          const yPos = (clientY - centerY) * speed;
          
          gsap.to(card, {
            x: xPos,
            y: yPos,
            duration: 1.5,
            ease: "power2.out",
            overwrite: "auto"
          });
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="portfolio-floating-gallery"
      className="relative w-full h-[120vh] min-h-[900px] overflow-hidden bg-[#070B0D] flex items-center justify-center text-white"
      aria-labelledby="portfolio-carousel-title"
    >
      {/* Soft Radial Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-[#00D4FF]/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] bg-[#DC143C]/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Floating Project Cards */}
      <div className="absolute inset-0 z-10">
        {displayProjects.map((project, index) => {
          const config = cardConfigs[index];
          return (
            <div
              key={`${project.id}-${index}`}
              className={`floating-card absolute ${config.width}`}
              style={{ top: config.top, left: config.left }}
            >
              <Link to={`/portfolio/${project.id}`} className="card-inner w-full block rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative group cursor-pointer bg-[#0A0A0A]">
                <PortfolioPicture
                  image={project.image}
                  title={project.title}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-30 block"
                />
                
                {/* Subtle internal glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00D4FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Info Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <p className="font-unbounded text-xs md:text-sm font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</p>
                  <p className="font-sans text-[8px] md:text-[10px] uppercase tracking-widest text-[#00D4FF] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Massive Central Typography */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pointer-events-none max-w-4xl mix-blend-difference">
        <h2 
          id="portfolio-carousel-title"
          className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.1] mb-8"
        >
          <div className="overflow-hidden">
            <span className="headline-word inline-block font-unbounded tracking-tighter">Creative</span>
          </div>
          <div className="overflow-hidden">
            <span className="headline-word inline-block font-unbounded tracking-tighter">Strategy</span>
          </div>
          <div className="overflow-hidden my-2 md:my-0">
            <span className="headline-word inline-block font-playfair italic font-light text-white/80">Meets</span>
          </div>
          <div className="overflow-hidden">
            <span className="headline-word inline-block font-unbounded tracking-tighter">Real Results.</span>
          </div>
        </h2>
        
        <div className="overflow-hidden">
          <p className="headline-word font-sans text-xs md:text-sm text-white/60 mb-8 max-w-md mx-auto tracking-wide">
            Explore our curated selection of digital products, branding systems, and performance architectures.
          </p>
        </div>

        <div className="overflow-hidden">
          <a 
            href="#portfolio" 
            className="headline-word pointer-events-auto inline-block px-8 py-4 rounded-full bg-transparent text-white font-unbounded text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-500 border border-white/20 hover:border-[#00D4FF] hover:bg-[#00D4FF]/10 backdrop-blur-sm"
          >
            Explore Projects
          </a>
        </div>
      </div>

    </section>
  );
}
