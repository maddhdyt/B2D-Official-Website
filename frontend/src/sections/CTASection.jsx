import { domAnimation, LazyMotion, m } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CTASection() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative w-full max-w-[100vw] overflow-hidden bg-gradient-to-br from-[#005BFF] via-[#007BFF] to-[#3ABEFF] py-32 md:py-48"
        aria-labelledby="cta-title"
      >
        {/* Subtle glowing orb in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A8FF] rounded-full blur-[150px] opacity-40 mix-blend-screen pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 flex flex-col items-center text-center">
          
          <m.div 
            className="mb-12 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Circular badge */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 bg-[#07080A] flex items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(0,168,255,0.4)]">
              <img src="https://ik.imagekit.io/yqhp1cmbp/group24.png" alt="B2D Logo" className="w-12 md:w-16 h-auto z-10" />
              
              {/* Rotating text */}
              <m.div
                className="absolute inset-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full" overflow="visible">
                  <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                  <text className="text-[10px] font-bold tracking-widest fill-white/80 uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      Grow • Convert • Scale • Build • Optimize • 
                    </textPath>
                  </text>
                </svg>
              </m.div>
            </div>
          </m.div>

          <m.span 
            className="text-white/90 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            variants={fadeUp}
          >
            LET'S GROW TOGETHER
          </m.span>

          <m.h2
            id="cta-title"
            className="text-white text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-tight lg:leading-[1.1] font-semibold tracking-tight mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            variants={fadeUp}
          >
            Let us help your company accelerate <em className="font-serif font-normal italic">years ahead.</em>
          </m.h2>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            variants={fadeUp}
          >
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#07080A] text-white font-medium text-lg border border-[#00A8FF]/50 shadow-[0_0_20px_rgba(0,168,255,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,168,255,0.6)] hover:border-[#3ABEFF] hover:-translate-y-1 group"
            >
              Contact Us
              <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}
