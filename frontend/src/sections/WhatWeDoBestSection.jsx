import { domAnimation, LazyMotion, m, MotionConfig } from "framer-motion";
import { coreServices } from "../data/services";

const ease = [0.22, 1, 0.36, 1];

const panelReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 34 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.15, ease },
    y: 0,
  },
};

const listReveal = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.12,
    },
  },
};

const rowReveal = {
  hidden: { opacity: 0, x: -18, y: 14 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease },
    x: 0,
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

function ServiceRow({ service }) {
  return (
    <m.li className="services-panel-row" variants={rowReveal}>
      <span className="services-panel-active-line" aria-hidden="true" />
      <span className="services-panel-number">{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="services-panel-arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
    </m.li>
  );
}

export default function WhatWeDoBestSection() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <section
          id="services"
          className="services-section relative w-full max-w-[100vw] overflow-hidden bg-gradient-to-br from-[#0e3b5e] to-[#1884c2] px-5 py-24 md:py-32 lg:py-40"
          aria-labelledby="services-title"
        >
          <div className="services-section-ambient" aria-hidden="true" />
          <span className="services-section-dot services-section-dot-one" aria-hidden="true" />
          <span className="services-section-dot services-section-dot-two" aria-hidden="true" />

          <m.div
            className="services-panel relative z-10 mx-auto w-full max-w-6xl"
            initial="hidden"
            whileInView="visible"
            variants={panelReveal}
            viewport={{ amount: 0.12, once: true }}
          >
            <header className="services-panel-header">
              <p>Core Capabilities</p>
              <h2 id="services-title">
                What We Do{" "}
                <em className="font-serif font-normal">Best.</em>
              </h2>
            </header>

            <m.ol className="services-panel-list" variants={listReveal}>
              {coreServices.map((service) => (
                <ServiceRow key={service.number} service={service} />
              ))}
            </m.ol>
          </m.div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
}
