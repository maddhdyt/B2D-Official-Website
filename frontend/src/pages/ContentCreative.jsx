import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import mockup1 from '../assets/creative-service/Creative Service-1.png';
import mockup2 from '../assets/creative-service/Creative Service-2.png';
import mockup3 from '../assets/creative-service/Creative Service-3.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'Brand Identity & Visual Direction',
    description: 'We shape the visual core of your brand, establishing aesthetics that command attention and communicate luxury. From logo marks to comprehensive design systems.',
  },
  {
    id: '02',
    title: 'Social Media Content Production',
    description: 'Bespoke, high-end content tailored for modern algorithms. We craft short-form videos and dynamic visuals that elevate your social presence and drive engagement.',
  },
  {
    id: '03',
    title: 'Creative Campaign Development',
    description: 'End-to-end campaign ideation and execution. We blend storytelling with striking visuals to create memorable campaigns that resonate with premium audiences.',
  },
  {
    id: '04',
    title: 'Photography & Videography',
    description: 'Cinematic production quality. Our in-house directors and DPs produce visually stunning commercial spots, editorial shoots, and brand films.',
  },
  {
    id: '05',
    title: 'Motion Graphics & Animation',
    description: 'Abstract 3D motion and sleek 2D animations that bring static ideas to life. We use motion as a powerful tool to explain, entertain, and amaze.',
  },
  {
    id: '06',
    title: 'Content Strategy & Storytelling',
    description: 'Beyond the visuals, we define the narrative. We strategize how your content ecosystem functions, ensuring every piece serves your overarching business goals.',
  }
];

const ContentCreative = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const showcaseRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.fromTo('.hero-text-line', 
        { y: 100, opacity: 0, rotateZ: 2 }, 
        { y: 0, opacity: 1, rotateZ: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
      );
      tl.fromTo('.hero-accent',
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.6"
      );

      // Lines Animation on Scroll
      gsap.utils.toArray('.divider-line').forEach((line) => {
        gsap.fromTo(line, 
          { scaleX: 0 }, 
          { scaleX: 1, duration: 1.5, ease: 'power3.inOut', scrollTrigger: {
            trigger: line,
            start: 'top 90%',
          }}
        );
      });

      // Number Parallax
      gsap.utils.toArray('.service-number').forEach((num) => {
        gsap.to(num, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: num,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Showcase Images Scale Reveal
      gsap.utils.toArray('.showcase-image-container').forEach((container) => {
        const img = container.querySelector('img');
        gsap.fromTo(img,
          { scale: 1.2 },
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

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div ref={containerRef} className="w-full bg-[#050505] overflow-x-hidden text-white font-sans selection:bg-[#D5F155] selection:text-black">
      {/* Navbar spacing compensation */}
      <div className="h-24 md:h-32"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="px-6 md:px-12 lg:px-24 pt-12 pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="font-unbounded text-sm md:text-base tracking-widest text-[#7661E8] mb-8 uppercase flex items-center gap-4">
            <span className="w-12 h-px bg-[#7661E8]"></span>
            B2D Creative Service
          </p>
          <div className="overflow-hidden">
            <h1 className="hero-text-line font-unbounded text-5xl md:text-7xl lg:text-9xl leading-[1.1] font-bold uppercase">
              We Create
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-text-line font-unbounded text-5xl md:text-7xl lg:text-9xl leading-[1.1] font-bold uppercase">
              Content That
            </h1>
          </div>
          <div className="overflow-hidden flex items-center flex-wrap gap-4 md:gap-8">
            <h1 className="hero-text-line font-playfair italic text-[#D5F155] text-6xl md:text-8xl lg:text-[10rem] leading-none font-light relative">
              Moves
              <div className="hero-accent absolute -bottom-2 md:-bottom-4 left-0 w-full h-[3px] md:h-2 bg-[#7661E8] transform origin-left"></div>
            </h1>
            <h1 className="hero-text-line font-unbounded text-5xl md:text-7xl lg:text-9xl leading-[1.1] font-bold uppercase">
              People.
            </h1>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-white/80 italic mb-8 md:mb-16">Our Creative Arsenal</h2>
        </div>
        
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={index} className="w-full">
              <div className="divider-line w-full h-px bg-white/10 origin-left"></div>
              <div 
                className="group px-6 md:px-12 lg:px-24 py-8 md:py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 cursor-pointer items-start hover:bg-white/[0.02] transition-colors duration-500"
                onClick={() => toggleService(index)}
              >
                <div className="md:col-span-5 relative">
                  <h3 className="service-number font-unbounded text-[6rem] md:text-[10rem] lg:text-[12rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent transition-all duration-500 group-hover:from-[#D5F155]/20 group-hover:to-transparent pb-6">
                    {service.id}
                  </h3>
                </div>
                
                <div className="md:col-span-7 flex flex-col justify-center h-full pt-4 md:pt-12">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="font-unbounded text-2xl md:text-4xl lg:text-5xl font-semibold uppercase group-hover:text-[#D5F155] transition-colors duration-500">
                      {service.title}
                    </h4>
                    <div className="text-[#D5F155] transition-transform duration-500 ml-4 shrink-0">
                      {activeService === index ? <Minus size={32} /> : <Plus size={32} />}
                    </div>
                  </div>
                  
                  <div 
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${activeService === index ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                      <button className="mt-8 flex items-center gap-2 text-xs md:text-sm font-unbounded uppercase tracking-widest text-[#7661E8] hover:text-[#D5F155] transition-colors duration-300">
                        View Cases <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="divider-line w-full h-px bg-white/10 origin-left"></div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section ref={showcaseRef} className="py-16 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <div className="md:col-span-5 flex flex-col gap-8 md:gap-24 relative z-10">
            <div className="showcase-image-container w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={mockup1} 
                alt="B2D Creative Director" 
                className="w-full h-full object-cover object-center origin-top"
              />
            </div>
            
            <div className="pl-0 md:pl-12">
              <h3 className="font-unbounded text-3xl md:text-5xl uppercase font-bold mb-6">
                Visuals that <br/><span className="text-[#7661E8]">Provoke.</span>
              </h3>
              <p className="font-playfair text-xl md:text-2xl italic text-white/70 max-w-md">
                "We don't just capture moments; we construct realities that elevate your brand's perception."
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8 md:gap-16 pt-0 md:pt-32">
            <div className="showcase-image-container w-[90%] md:w-[85%] aspect-square overflow-hidden rounded-lg shadow-2xl ml-0 md:-ml-12 relative z-20">
              <img 
                src={mockup2} 
                alt="B2D Film Production" 
                className="w-full h-full object-cover object-center origin-top"
              />
            </div>
            
            <div className="showcase-image-container w-[70%] md:w-[55%] aspect-square overflow-hidden rounded-lg shadow-2xl ml-auto">
              <img 
                src={mockup3} 
                alt="Abstract Motion Graphics" 
                className="w-full h-full object-cover object-center origin-top"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-[#7661E8] to-transparent mb-12"></div>
          <h2 className="font-unbounded text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-8">
            Attention is <br/>
            <span className="font-playfair italic text-[#D5F155] font-light lowercase">the new currency.</span>
          </h2>
          <p className="font-sans text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl">
            In a landscape saturated with disposable content, we forge visual narratives built to endure. Our approach merges meticulous strategy with uncompromising aesthetic standards, ensuring your brand doesn't just participate in the conversation—it leads it.
          </p>
          <a href="/contact" className="mt-16 group flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-white/20 hover:border-[#D5F155] transition-colors duration-500 relative">
            <span className="font-unbounded text-xs md:text-sm uppercase tracking-[0.2em] group-hover:text-[#D5F155] transition-colors duration-500 z-10 text-center leading-loose">
              START<br />PROJECT
            </span>
            <div className="absolute inset-0 bg-[#D5F155]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentCreative;
