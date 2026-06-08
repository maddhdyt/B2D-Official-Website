import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { remoteAssets } from "../../assets/remoteAssets";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import NavbarButton from "./NavbarButton";
import ContactDrawer from "../ContactDrawer";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 20;
    if (isScrolled !== shouldBeScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ease-out ${
          isScrolled 
            ? "py-3 bg-[#07080A]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="/"
            className="flex items-center cursor-pointer group relative z-10"
            aria-label="B2D homepage"
          >
            <img
              src={remoteAssets.logo.src}
              alt="B2D Logo"
              width={remoteAssets.logo.width}
              height={remoteAssets.logo.height}
              decoding="async"
              fetchPriority="high"
              className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "h-6 md:h-7" : "h-7 md:h-8"
              }`}
            />
            {/* Subtle glow behind logo on hover */}
            <div className="absolute inset-0 bg-[#00A8FF]/0 group-hover:bg-[#00A8FF]/20 blur-xl rounded-full transition-colors duration-300" />
          </a>

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Desktop CTA Button */}
          <NavbarButton onOpenContact={() => setIsContactOpen(true)} />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        closeMenu={() => setIsMobileMenuOpen(false)} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
