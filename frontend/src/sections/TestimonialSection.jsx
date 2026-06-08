import { domAnimation, LazyMotion, m } from "framer-motion";
import favicon from "../assets/favicon.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TestimonialSection() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative w-full max-w-[100vw] overflow-hidden bg-[#07080A] py-32 md:py-48"
        aria-labelledby="testimonial-title"
      >
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#00A8FF]/[0.03] rounded-full blur-[120px]" />
        </div>

        {/* Decorative Trajectory Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <m.div
            className="w-[800px] h-[800px] absolute opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 800 800" fill="none" className="w-full h-full">
              <circle cx="400" cy="400" r="300" stroke="#00A8FF" strokeWidth="1" strokeDasharray="4 12" className="opacity-40" />
              <path d="M 100,400 Q 400,100 700,400 T 100,400" stroke="#1E90FF" strokeWidth="1" fill="none" strokeDasharray="10 20" className="opacity-30" />
              <circle cx="100" cy="400" r="3" fill="#3ABEFF" className="opacity-80" />
              <circle cx="680" cy="300" r="2" fill="#00A8FF" className="opacity-60" />
            </svg>
          </m.div>
          <m.div
            className="w-[600px] h-[600px] absolute opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
              <ellipse cx="300" cy="300" rx="250" ry="100" transform="rotate(45 300 300)" stroke="#3ABEFF" strokeWidth="1" strokeDasharray="8 16" />
              <ellipse cx="300" cy="300" rx="250" ry="100" transform="rotate(-45 300 300)" stroke="#005BFF" strokeWidth="1" strokeDasharray="6 12" />
            </svg>
          </m.div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 flex flex-col items-center text-center">
          <m.h2
            id="testimonial-title"
            className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={fadeUp}
          >
            What our clients are <em className="font-serif font-normal italic text-[#f8f9fa]">saying.</em>
          </m.h2>

          <m.div
            className="flex flex-col items-center max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            variants={fadeUp}
          >
            <div className="mb-8 flex items-center gap-3">
              <img src={favicon} alt="Logo" className="h-8 object-contain" />
              <span className="text-white font-bold tracking-widest uppercase text-sm">GE Ventures</span>
            </div>

            <blockquote className="text-lg md:text-2xl lg:text-[28px] leading-relaxed md:leading-snug font-serif italic text-white/90 mb-12">
              "These guys are the real deal. Effective, efficient, and a pleasure to work with. Dan quickly understood and was able to help us better articulate the nuances of our business. Would highly recommend working with them."
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 mb-4 bg-white/5">
                <img src="https://i.pravatar.cc/150?u=ge-ventures" alt="Jordan Fedor" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-medium text-base mb-0.5">Jordan Fedor</span>
                <span className="text-[#00A8FF] text-xs uppercase tracking-wider font-semibold">VC at GE Ventures</span>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
