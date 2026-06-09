import { m } from "framer-motion";
import { portfolioProjects } from "../../data/portfolioProjects";
import PortfolioPicture from "./PortfolioPicture";

const ease = [0.22, 1, 0.36, 1];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1.4, ease },
  },
};

export default function ResultsShowcaseSection() {
  const projects = portfolioProjects.slice(0, 3); // Get first 3 projects

  return (
    <m.section
      id="results-showcase"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#07080A] to-[#070B0D] py-24 md:py-32 lg:py-40 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.15, once: true }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-24">
        
        {/* Top Header */}
        <m.div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 mb-32" variants={staggerContainer}>
          <div className="flex-1">
            <m.h2 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] font-bold">
              <span className="font-playfair italic font-light text-white/90">We Craft</span><br />
              <span className="font-unbounded tracking-tighter">Human-Centric</span><br />
              <span className="font-unbounded tracking-tighter text-[#EAEAEA]">Digital Products.</span>
            </m.h2>
          </div>
          <div className="w-full md:w-[280px] pt-4 md:pt-16 flex-shrink-0">
            <m.p variants={fadeUpVariants} className="font-sans text-xs md:text-sm text-white/60 leading-relaxed">
              Located in Indonesia, our studio is dedicated to crafting robust and renowned brands. We blend data-driven insights with premium aesthetic execution.
            </m.p>
          </div>
        </m.div>

        {/* Projects Label */}
        <m.div variants={fadeUpVariants} className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
          <h3 className="font-unbounded text-xl md:text-2xl font-bold">Projects</h3>
          <a href="#portfolio" className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            More +500
          </a>
        </m.div>

        {/* Cards Showcase */}
        <m.div variants={staggerContainer} className="relative w-full flex items-end justify-center md:justify-start mt-12 md:mt-24 pb-12">
          
          {/* Card 1 (Left, Smallest) */}
          <m.div variants={cardVariants} className="w-[35%] md:w-[28%] relative z-10 translate-y-12 md:translate-y-24 -ml-4 md:ml-0 group cursor-pointer">
            <div className="w-full aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <PortfolioPicture
                image={projects[0].image}
                title={projects[0].title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-sans text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest mb-1">24 Feb 2024</p>
              <h4 className="font-unbounded text-xs md:text-sm font-bold truncate">{projects[0].title}</h4>
            </div>
          </m.div>

          {/* Card 2 (Middle, Medium) */}
          <m.div variants={cardVariants} className="w-[45%] md:w-[35%] relative z-20 -ml-6 md:-ml-12 mb-6 md:mb-12 group cursor-pointer">
            <div className="w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <PortfolioPicture
                image={projects[1].image}
                title={projects[1].title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 absolute -bottom-16 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-sans text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest mb-1">22 Mar 2024</p>
              <h4 className="font-unbounded text-xs md:text-sm font-bold truncate">{projects[1].title}</h4>
            </div>
          </m.div>

          {/* Card 3 (Right, Largest) */}
          <m.div variants={cardVariants} className="w-[50%] md:w-[45%] relative z-30 -ml-12 md:-ml-16 group cursor-pointer">
            <div className="w-full aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
              <PortfolioPicture
                image={projects[2].image}
                title={projects[2].title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="mt-6 md:mt-8 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-sans text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest mb-1">04 Jan 2024</p>
              <h4 className="font-unbounded text-sm md:text-base font-bold truncate">{projects[2].title}</h4>
            </div>
          </m.div>

        </m.div>
      </div>
    </m.section>
  );
}
