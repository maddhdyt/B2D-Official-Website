import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MobileAccordion from "./MobileAccordion";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function MobileMenu({ isOpen, closeMenu, onOpenContact }) {
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#07080A]/60 backdrop-blur-md md:hidden"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] z-[101] bg-[#0A0D14] border-l border-white/10 shadow-2xl flex flex-col md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <span className="text-white font-semibold tracking-wider text-sm">MENU</span>
              <button 
                onClick={closeMenu}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col px-6 py-8">
              <MobileAccordion closeMenu={closeMenu} />
              
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-4 text-xl font-medium text-white/90 hover:text-[#00A8FF] transition-colors border-t border-white/5 first:border-none"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Footer / CTA */}
            <div className="mt-auto p-6 border-t border-white/5 bg-white/[0.02]">
              <button
                onClick={() => {
                  closeMenu();
                  onOpenContact();
                }}
                className="flex items-center justify-center w-full py-4 rounded-xl bg-[#00A8FF] text-white font-medium hover:bg-[#1E90FF] transition-colors shadow-[0_0_20px_rgba(0,168,255,0.3)]"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
