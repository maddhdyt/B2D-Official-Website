import { m, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { portfolioProjects } from "../../data/portfolioProjects";
import PortfolioPicture from "./PortfolioPicture";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease },
    y: 0,
  },
};

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PortfolioCard({ project, index }) {
  return (
    <m.article
      className="portfolio-carousel-card group"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{
        opacity: 1,
        transition: { delay: index * 0.09, duration: 0.9, ease },
        y: 0,
      }}
      viewport={{ amount: 0.25, once: true }}
    >
      <PortfolioPicture
        image={project.image}
        title={`${project.title}, ${project.category}`}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="portfolio-card-overlay">
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span>{project.description}</span>
      </div>
    </m.article>
  );
}

export default function PortfolioCarouselSection() {
  const railRef = useRef(null);
  const scrollFrame = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const scrollToProject = useCallback(
    (nextIndex) => {
      const normalizedIndex =
        (nextIndex + portfolioProjects.length) % portfolioProjects.length;
      const rail = railRef.current;
      const target = rail?.children[normalizedIndex];
      if (!rail || !target) return;

      const railRect = rail.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      
      const scrollLeft = rail.scrollLeft + (targetRect.left - railRect.left) - (railRect.width / 2) + (targetRect.width / 2);

      rail.scrollTo({
        left: scrollLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      setActiveIndex(normalizedIndex);
    },
    [prefersReducedMotion],
  );

  const syncActiveProject = useCallback(() => {
    cancelAnimationFrame(scrollFrame.current);
    scrollFrame.current = requestAnimationFrame(() => {
      const rail = railRef.current;

      if (!rail) {
        return;
      }

      const railCenter = rail.getBoundingClientRect().left + rail.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      Array.from(rail.children).forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - railCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    });
  }, []);

  useEffect(
    () => () => {
      cancelAnimationFrame(scrollFrame.current);
    },
    [],
  );

  return (
    <m.section
      id="portfolio-carousel"
      className="portfolio-carousel-section relative w-full overflow-hidden bg-[#07080A] px-0 py-24 md:py-32 lg:py-40"
      aria-labelledby="portfolio-carousel-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.08, once: true }}
    >
      <div className="portfolio-carousel-ambient" aria-hidden="true" />
      <span className="portfolio-glow-dot portfolio-glow-dot-one" aria-hidden="true" />
      <span className="portfolio-glow-dot portfolio-glow-dot-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center">
        <m.h2
          id="portfolio-carousel-title"
          className="w-full max-w-5xl text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl"
          variants={fadeUp}
        >
          Membantu{" "}
          <em className="font-serif font-normal text-[#DDF8FF]">Akselerasi</em>{" "}
          Bisnis
        </m.h2>
        <m.p
          className="mt-6 w-full max-w-2xl text-sm font-light text-slate-300/70 md:text-base"
          variants={fadeUp}
        >
          Portofolio dari perusahaan yang berhasil berakselerasi
        </m.p>
        <m.a
          href="#portfolio-track"
          className="portfolio-cta mt-8"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          View Portfolio
        </m.a>
      </div>

      <div className="portfolio-carousel-shell relative z-10 mt-16 w-full md:mt-20">
        <button
          type="button"
          className="portfolio-carousel-nav portfolio-carousel-nav-left"
          onClick={() => scrollToProject(activeIndex - 1)}
          aria-label="Project sebelumnya"
        >
          <ArrowIcon direction="left" />
        </button>

        <div
          ref={railRef}
          id="portfolio-track"
          className="portfolio-carousel-track"
          aria-live="polite"
          onScroll={syncActiveProject}
        >
          {portfolioProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <button
          type="button"
          className="portfolio-carousel-nav portfolio-carousel-nav-right"
          onClick={() => scrollToProject(activeIndex + 1)}
          aria-label="Project berikutnya"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </m.section>
  );
}
