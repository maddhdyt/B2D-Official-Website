import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama website selesai dibuat?",
    answer: "Tergantung jenis produk: WordPress 3-7 hari, Custom Code 2-4 minggu, CRM/ERP 1-3 bulan.",
  },
  {
    question: "Apakah saya bisa update konten website sendiri?",
    answer: "Ya, untuk WordPress dan Landing Page kami sertakan pelatihan singkat. Untuk Custom Code, kami bisa tambahkan CMS sederhana sesuai kebutuhan.",
  },
  {
    question: "Apakah harga sudah termasuk hosting dan domain?",
    answer: "Paket Company Profile WordPress sudah termasuk hosting & domain tahun pertama. Produk lain bisa dikonsultasikan.",
  },
  {
    question: "Bagaimana jika saya tidak puas dengan hasilnya?",
    answer: "Kami memberikan revisi hingga klien puas dalam periode garansi. Kepuasan klien adalah prioritas kami.",
  },
  {
    question: "Apakah B2D bisa handle proyek dari luar kota?",
    answer: "Tentu. Kami melayani klien di seluruh Indonesia secara remote. Semua komunikasi via WhatsApp, email, atau video call.",
  },
  {
    question: "Apa perbedaan WordPress dan Custom Code?",
    answer: "WordPress lebih cepat & mudah dikelola sendiri, cocok untuk UMKM. Custom Code memberikan performa, keamanan, dan fleksibilitas lebih tinggi untuk bisnis yang berkembang.",
  },
];

function FAQItem({ faq, isOpen, toggleOpen }) {
  return (
    <div className="border border-[rgba(0,212,255,0.12)] rounded-xl overflow-hidden bg-[#0D1F3C]/40 backdrop-blur-sm mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-unbounded text-white font-medium text-lg pr-4">{faq.question}</span>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 text-[#00D4FF] ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-[#A0B4CC] leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#0A1628]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-unbounded text-3xl md:text-5xl font-bold text-white"
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
