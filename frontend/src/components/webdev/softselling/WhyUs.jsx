import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const outlineTextRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax text
      gsap.to(textRef.current, {
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
      gsap.to(outlineTextRef.current, {
        y: -250,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Cards stagger fade up
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      col: "lg:col-start-1 lg:col-span-3",
      mt: "mt-0",
      tag: "ATTENTION TO DETAILS",
      text: "In every project, we do in-depth analysis of specific performance indicators and predictability of results."
    },
    {
      col: "lg:col-start-5 lg:col-span-3",
      mt: "lg:mt-16 mt-6",
      tag: "BRAND REPUTATION",
      text: "Personalized approach to brand development, maintaining reputation and increasing loyalty."
    },
    {
      col: "lg:col-start-9 lg:col-span-3",
      mt: "lg:mt-8 mt-6",
      tag: "NEW SOLUTIONS",
      text: "We are not afraid to introduce new solutions. We are catalysts for your growth."
    },
    {
      col: "lg:col-start-2 lg:col-span-3",
      mt: "lg:mt-20 mt-6",
      tag: "COMPETENT TEAM",
      text: "More than 10 years of experience. We don't test hypotheses, we implement strategies."
    },
    {
      col: "lg:col-start-6 lg:col-span-3",
      mt: "lg:mt-32 mt-6",
      tag: "BUDGET EFFICIENCY",
      text: "We argue our decisions. We implement effective strategies and optimize marketing costs."
    },
    {
      col: "lg:col-start-10 lg:col-span-3",
      mt: "lg:mt-24 mt-6 mb-8",
      tag: "GROWTH & RESULT",
      text: "Increase demand for your product/services with a comprehensive approach."
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#050A18] border-t border-white/10">
      
      {/* Background Texts */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
        <h2 ref={textRef} className="text-white font-['Unbounded'] font-bold text-6xl md:text-[8rem] lg:text-[12rem] tracking-tighter mix-blend-overlay opacity-60">
          WHY WE?
        </h2>
        <h2 ref={outlineTextRef} className="text-transparent font-['Unbounded'] font-bold text-7xl md:text-[10rem] lg:text-[14rem] tracking-tighter mt-12 opacity-20" style={{ WebkitTextStroke: '2px #00D4FF' }}>
          WHY WE?
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {cards.map((card, i) => (
          <div 
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`${card.col} ${card.mt} flex flex-col bg-[#0A1128]/80 backdrop-blur-md border border-white/5 p-8 relative group hover:border-[#00D4FF]/30 transition-colors duration-500 min-h-[250px]`}
          >
            {/* Corner Bracket Decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-[#00D4FF] transition-colors" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-[#00D4FF] transition-colors" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-[#00D4FF] transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-[#00D4FF] transition-colors" />

            <p className="text-[#94A3B8] font-light text-sm leading-relaxed mb-12">
              {card.text}
            </p>

            <div className="mt-auto pt-4 border-t border-white/5">
              <span className="text-[#00D4FF] font-['Unbounded'] font-medium text-[10px] tracking-widest uppercase">
                {card.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
