import {
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "framer-motion";

const nodes = [
  {
    id: "landing-page",
    label: (
      <>
        Landing Page
        <br />
        Optimization
      </>
    ),
    position: "left",
  },
  {
    id: "paid-advertising",
    label: "Paid Advertising",
    position: "right",
  },
  {
    id: "crm-lead-nurturing",
    label: (
      <>
        CRM & Lead
        <br />
        Nurturing
      </>
    ),
    position: "bottom",
  },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease },
    y: 0,
  },
};

const radarReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.18, duration: 1.2, ease },
  },
};

const nodeReveal = {
  hidden: { opacity: 0, scale: 0.45 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.55 + index * 0.18, duration: 0.75, ease },
  }),
};

function StrategyNode({ index, label, position }) {
  return (
    <div className={`strategy-node strategy-node-${position}`}>
      <m.div
        className="strategy-node-motion"
        custom={index}
        variants={nodeReveal}
      >
        <span className="strategy-node-dot" aria-hidden="true">
          <span />
        </span>
        <span className="strategy-node-label">{label}</span>
      </m.div>
    </div>
  );
}

function RadarDiagram() {
  return (
    <m.div className="strategy-radar" variants={radarReveal}>
      <div className="strategy-radar-glow" aria-hidden="true" />
      <div className="strategy-radar-surface">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 700 700"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="strategy-axis-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.08" />
              <stop offset="55%" stopColor="#00D4FF" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.16" />
            </linearGradient>
            <filter id="strategy-star-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="strategy-axis-lines">
            <line x1="350" y1="350" x2="189" y2="196" />
            <line x1="350" y1="350" x2="511" y2="196" />
            <line x1="350" y1="350" x2="350" y2="560" />
          </g>

          <g className="strategy-orbit-spin">
            <circle className="strategy-orbit strategy-orbit-outer" cx="350" cy="350" r="242" />
            <circle className="strategy-orbit strategy-orbit-middle" cx="350" cy="350" r="174" />
            <circle className="strategy-orbit strategy-orbit-inner" cx="350" cy="350" r="106" />
            <path
              className="strategy-orbit-star"
              d="M 470 127 L 475 139 L 487 144 L 475 149 L 470 161 L 465 149 L 453 144 L 465 139 Z"
              filter="url(#strategy-star-glow)"
            />
            <circle className="strategy-orbit-particle" cx="280" cy="582" r="3.5" />
            <circle className="strategy-orbit-particle" cx="526" cy="338" r="2.5" />
          </g>
        </svg>

        <div className="strategy-center-copy">
          <m.div variants={fadeUp}>
            <strong>3 Pilar</strong>
            <span>Digital Marketing</span>
          </m.div>
        </div>

        {nodes.map((node, index) => (
          <StrategyNode key={node.id} index={index} {...node} />
        ))}

        <span className="strategy-float-dot strategy-float-dot-one" aria-hidden="true" />
        <span className="strategy-float-dot strategy-float-dot-two" aria-hidden="true" />
        <span className="strategy-float-star strategy-float-star-one" aria-hidden="true">
          +
        </span>
        <span className="strategy-float-star strategy-float-star-two" aria-hidden="true">
          +
        </span>
      </div>
    </m.div>
  );
}

export default function GrowthStrategySection() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : "hidden";

  return (
    <LazyMotion features={domAnimation} strict>
      <m.section
        className="strategy-section relative w-full max-w-[100vw] overflow-hidden bg-[#07080A] px-5 py-24 md:py-32 lg:py-36"
        aria-labelledby="growth-strategy-title"
        initial={initial}
        whileInView="visible"
        viewport={{ amount: 0.12, once: true }}
      >
        <div className="strategy-section-ambient" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center text-center">
          <m.div className="w-full min-w-0" variants={fadeUp}>
            <p className="font-unbounded text-[0.62rem] uppercase tracking-[0.32em] text-[#00D4FF]/65 md:text-xs">
              Growth Strategy
            </p>
            <h2
              id="growth-strategy-title"
              className="mx-auto mt-5 max-w-6xl text-2xl font-semibold leading-[1.2] tracking-[-0.04em] text-white md:text-4xl lg:text-[2.65rem]"
            >
              Solusi Pemasaran Pertumbuhan Berbasis Data
              <span className="mt-1 block">
                yang Disesuaikan dan{" "}
                <em className="font-serif font-normal text-[#DDF8FF]">
                  Berfokus Pada Kinerja
                </em>
              </span>
            </h2>
          </m.div>

          <m.p
            className="mt-7 w-full max-w-[650px] text-sm font-light leading-7 text-slate-300/70 md:text-[0.95rem]"
            variants={fadeUp}
          >
            Solusi pemasaran pertumbuhan berbasis data dan berfokus pada
            kinerja yang kami rancang khusus telah membantu perusahaan dari
            berbagai bentuk dan ukuran untuk tumbuh lebih cepat, terlepas dari
            ukuran, industri, atau model pendapatan mereka.
          </m.p>

          <RadarDiagram />
        </div>
      </m.section>
    </LazyMotion>
  );
}
