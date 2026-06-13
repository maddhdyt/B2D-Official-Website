import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Megaphone, PenTool, Code2, Scale } from "lucide-react";

const servicesList = [
  { title: "Digital Advertising", icon: Megaphone, href: "/service/digital-advertising" },
  { title: "Content & Creative", icon: PenTool, href: "/service/content-creative" },
  { title: "Web Design & Development", icon: Code2, href: "/service/web-design-development" },
  { title: "Legalitas & Perizinan", icon: Scale, href: "/service/legalitas" },
];

export default function MobileAccordion({ closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left text-xl font-medium text-white/90 hover:text-white transition-colors"
      >
        <span>Services</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#00A8FF]" : "text-white/50"}`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 py-2 pl-4 border-l border-white/10 ml-2 mb-4">
              {servicesList.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <a
                    key={idx}
                    href={service.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 py-2 text-white/70 hover:text-[#00A8FF] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-base">{service.title}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
