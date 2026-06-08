import { domAnimation, LazyMotion, m, MotionConfig } from "framer-motion";
import { featuredArticles } from "../data/articles";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease },
    y: 0,
  },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 18 18 6M9 6h9v9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ArticlePicture({ article }) {
  return (
    <picture>
      <source srcSet={article.image.avif} type="image/avif" />
      <source srcSet={article.image.webp} type="image/webp" />
      <img
        src={article.image.webp}
        alt=""
        width="1400"
        height="880"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </picture>
  );
}

function ArticleCard({ article, index }) {
  return (
    <m.article
      className="insights-article-card group"
      initial={{ opacity: 0, y: 38 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0.12 + index * 0.12, duration: 1, ease },
        y: 0,
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      <a href={article.href} aria-label={`Read article: ${article.title}`}>
        <div className="insights-article-media">
          <ArticlePicture article={article} />
          <div className="insights-article-overlay" aria-hidden="true" />
          <span className="insights-read-action">
            Read Article
            <ArrowIcon />
          </span>
        </div>

        <div className="insights-article-copy">
          <div className="insights-article-meta">
            <span>{article.author}</span>
            <span aria-hidden="true">/</span>
            <span>{article.category}</span>
          </div>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      </a>
    </m.article>
  );
}

export default function InsightsSection() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.section
          id="insights"
          className="insights-section relative w-full overflow-clip bg-[#07080A] px-5 py-24 md:py-32 lg:py-40"
          aria-labelledby="insights-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="insights-ambient" aria-hidden="true" />
          <span className="insights-glow-dot insights-glow-dot-one" aria-hidden="true" />
          <span className="insights-glow-dot insights-glow-dot-two" aria-hidden="true" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <m.header className="text-center" variants={fadeUp}>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.36em] text-[#B8B8B8] md:text-xs">
                Latest In
              </p>
              <h2
                id="insights-title"
                className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.055em] text-white md:text-6xl lg:text-7xl"
              >
                <em className="font-serif font-normal text-[#DDF8FF]">
                  Digital
                </em>{" "}
                Advertising
              </h2>
            </m.header>

            <div className="insights-grid mt-14 md:mt-20">
              {featuredArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={index}
                />
              ))}
            </div>

            <m.div className="mt-14 text-center md:mt-16" variants={fadeUp}>
              <m.a
                href="/blog"
                className="insights-more-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                More Articles
              </m.a>
            </m.div>
          </div>
        </m.section>
      </MotionConfig>
    </LazyMotion>
  );
}
