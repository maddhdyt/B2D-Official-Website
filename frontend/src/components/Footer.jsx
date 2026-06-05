import { domAnimation, LazyMotion, m } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <LazyMotion features={domAnimation} strict>
      <footer className="relative w-full max-w-[100vw] overflow-hidden bg-[#07080A] pt-24 pb-8 md:pt-32" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>

        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[#00A8FF]/[0.15] blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[60vw] h-[200px] bg-[#005BFF]/[0.25] blur-[120px] pointer-events-none rounded-full" />
        
        {/* Decorative light streak */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00A8FF]/50 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
          
          {/* Logo with glow */}
          <m.div 
            className="mb-16 md:mb-24 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[#00A8FF] blur-[30px] opacity-30 rounded-full" />
            <img src="https://ik.imagekit.io/yqhp1cmbp/group24.png" alt="B2D Logo" className="relative h-12 md:h-16 w-auto" />
          </m.div>

          {/* Main Footer Content */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-32">
            
            {/* Newsletter Section */}
            <m.div 
              className="lg:col-span-5 flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={fadeUp}
            >
              <div className="inline-block border border-white/20 rounded px-3 py-1 mb-6 w-max">
                <span className="text-white text-xs font-bold tracking-widest uppercase">B2D AGENCY</span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-8 max-w-md leading-tight">
                Sign up to harness the power of Digital Growth.
              </h3>
              <form className="flex w-full max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00A8FF] transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-md hover:border-[#00A8FF] hover:bg-[#00A8FF]/10 transition-colors"
                  aria-label="Subscribe"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </m.div>

            {/* Links Section */}
            <m.div 
              className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              variants={staggerContainer}
            >
              {/* Column 1 */}
              <m.div variants={fadeUp} className="flex flex-col gap-4">
                <h4 className="text-white font-semibold text-sm mb-2">Services</h4>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Paid Advertising</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Content & Creative</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Web Development</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">CRM & Automation</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Growth Strategy</a>
              </m.div>

              {/* Column 2 */}
              <m.div variants={fadeUp} className="flex flex-col gap-4">
                <h4 className="text-white font-semibold text-sm mb-2">Company</h4>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">About</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Portfolio</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Blog</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Careers</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Contact</a>
              </m.div>

              {/* Column 3 */}
              <m.div variants={fadeUp} className="flex flex-col gap-4 col-span-2 md:col-span-1 mt-4 md:mt-0">
                <h4 className="text-white font-semibold text-sm mb-2">Resources</h4>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Case Studies</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Insights</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">Articles</a>
                <a href="#" className="text-white/60 hover:text-[#00A8FF] transition-colors text-sm">FAQ</a>
              </m.div>
            </m.div>
          </div>

          {/* Bottom Footer */}
          <m.div 
            className="w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-white/40 text-xs tracking-wider uppercase mb-8">
              &copy; {currentYear} B2D AGENCY™
            </p>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-60">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
          </m.div>

        </div>
      </footer>
    </LazyMotion>
  );
}
