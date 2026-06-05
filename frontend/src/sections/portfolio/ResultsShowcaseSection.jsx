import { m } from "framer-motion";
import { portfolioProjects } from "../../data/portfolioProjects";
import PortfolioPicture from "./PortfolioPicture";

const ease = [0.22, 1, 0.36, 1];

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease },
    y: 0,
  },
};

const cardVariants = {
  left: {
    hidden: { opacity: 0, x: -120, rotate: -17 },
    visible: {
      opacity: 1,
      rotate: -12,
      transition: { duration: 1.2, ease },
      x: 0,
    },
  },
  right: {
    hidden: { opacity: 0, x: 120, rotate: 17 },
    visible: {
      opacity: 1,
      rotate: 12,
      transition: { duration: 1.2, ease },
      x: 0,
    },
  },
};

function ShowcaseCard({ project, side }) {
  return (
    <m.article
      className={`results-showcase-card results-showcase-card-${side}`}
      variants={cardVariants[side]}
    >
      <div className={`results-showcase-float results-showcase-float-${side}`}>
        <PortfolioPicture
          image={project.image}
          title={`${project.title} showcase`}
          className="h-full w-full object-cover"
        />
        <div className="results-showcase-card-shine" aria-hidden="true" />
      </div>
    </m.article>
  );
}

export default function ResultsShowcaseSection() {
  return (
    <m.section
      id="results-showcase"
      className="results-showcase-section relative w-full overflow-hidden bg-[#07080A] py-24 md:py-32 lg:min-h-[860px] lg:py-40"
      aria-labelledby="results-showcase-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.18, once: true }}
    >
      <div className="results-showcase-ambient" aria-hidden="true" />
      <span className="portfolio-spark portfolio-spark-one" aria-hidden="true">
        +
      </span>
      <span className="portfolio-spark portfolio-spark-two" aria-hidden="true">
        +
      </span>

      <div className="results-showcase-grid relative z-10 mx-auto w-full max-w-[1600px] px-5">
        <ShowcaseCard project={portfolioProjects[0]} side="left" />

        <m.div
          className="results-showcase-copy flex flex-col items-center justify-center text-center"
          variants={contentVariants}
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.32em] text-[#B8B8B8] md:text-xs">
            To Infinity And Beyond
          </p>
          <h2
            id="results-showcase-title"
            className="mt-7 text-[3rem] font-bold leading-[0.98] tracking-[-0.055em] text-white md:text-[4rem] lg:text-[5rem]"
          >
            Hasil Yang
            <em className="mt-2 block font-serif font-medium tracking-[-0.04em] text-white">
              Lebih Baik
            </em>
          </h2>
          <m.a
            href="#portfolio-carousel"
            className="portfolio-cta mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Portfolio
          </m.a>
        </m.div>

        <ShowcaseCard project={portfolioProjects[1]} side="right" />
      </div>
    </m.section>
  );
}
