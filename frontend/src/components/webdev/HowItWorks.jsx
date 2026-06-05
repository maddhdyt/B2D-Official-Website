import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description: "Konsultasi & Brief Kebutuhan",
    duration: "1-2 hari",
  },
  {
    number: "2",
    title: "Design",
    description: "Wireframe & UI/UX Mockup",
    duration: "3-5 hari",
  },
  {
    number: "3",
    title: "Development",
    description: "Coding & Integrasi",
    duration: "7-14 hari",
  },
  {
    number: "4",
    title: "Testing",
    description: "QA & Revisi Persetujuan",
    duration: "2-3 hari",
  },
  {
    number: "5",
    title: "Launch",
    description: "Go Live & Support",
    duration: "Selamanya",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#050A18]">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Bagaimana Kami Bekerja
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#A0B4CC] max-w-2xl mx-auto"
          >
            Proses transparan dari konsultasi awal hingga website Anda live.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#00D4FF]/30 z-0" />
          
          {/* Connecting Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute top-[40px] bottom-[40px] left-[40px] w-[2px] border-l-2 border-dashed border-[#00D4FF]/30 z-0" />

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8 w-full lg:w-1/5"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#0D1F3C] border-2 border-[#00D4FF]/50 flex items-center justify-center text-3xl font-bold text-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                  {step.number}
                </div>
                <div className="flex flex-col lg:items-center lg:text-center mt-2 lg:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#A0B4CC] text-sm mb-2">{step.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
