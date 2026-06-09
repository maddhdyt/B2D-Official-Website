import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function DesktopMenu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // slight delay to prevent flickering
  };

  return (
    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
      
      {/* Services Item with Dropdown */}
      <li 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`flex items-center gap-1 py-2 cursor-pointer transition-colors duration-200 ${isServicesOpen ? "text-white" : "hover:text-white"}`}
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          aria-expanded={isServicesOpen}
        >
          Services
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-[#00A8FF]" : ""}`} 
          />
        </button>
        
        <AnimatePresence>
          {isServicesOpen && <ServicesDropdown />}
        </AnimatePresence>
      </li>

      {/* Regular Links */}
      {navItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="py-2 cursor-pointer hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
