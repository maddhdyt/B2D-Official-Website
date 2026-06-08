import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#050A18] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#00D4FF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Siap Membangun Kehadiran Digital Anda?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-[#A0B4CC] mb-12 max-w-2xl"
        >
          Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan Anda dan kami siapkan solusi terbaik.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://wa.me/6281234567890" // Placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="font-unbounded flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D4FF] text-[#050A18] font-bold text-lg hover:bg-[#00D4FF]/90 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            <MessageCircle className="w-5 h-5" />
            Chat via WhatsApp
          </a>
          
          <a 
            href="mailto:hello@b2d.id"
            className="font-unbounded flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/5 backdrop-blur-md text-white font-bold text-lg hover:bg-[#00D4FF]/20 transition-all"
          >
            <Mail className="w-5 h-5" />
            Kirim Email
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-6 text-sm text-[#4A6080]"
        >
          <span>hello@b2d.id</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#4A6080]" />
          <span>+62 812 3456 7890</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#4A6080]" />
          <span>Senin - Jumat, 09:00 - 17:00 WIB</span>
        </motion.div>
      </div>
    </section>
  );
}
