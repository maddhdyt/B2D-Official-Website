import analyticsAvif from "../assets/portfolio/analytics.avif";
import analyticsWebp from "../assets/portfolio/analytics.webp";
import creativeAvif from "../assets/portfolio/creative.avif";
import creativeWebp from "../assets/portfolio/creative.webp";
import crmAvif from "../assets/portfolio/crm.avif";
import crmWebp from "../assets/portfolio/crm.webp";

export const portfolioProjects = [
  {
    id: "growth-intelligence",
    title: "Growth Intelligence",
    category: "Analytics & Performance",
    description:
      "Satu pusat kendali untuk membaca pertumbuhan, kanal, dan peluang konversi.",
    image: { avif: analyticsAvif, webp: analyticsWebp },
  },
  {
    id: "nova-brand-system",
    title: "Nova Brand System",
    category: "Brand Identity & UI/UX",
    description:
      "Identitas digital terpadu yang mengubah strategi menjadi pengalaman visual.",
    image: { avif: creativeAvif, webp: creativeWebp },
  },
  {
    id: "flow-crm",
    title: "Flow CRM",
    category: "CRM & Automation",
    description:
      "Sistem pipeline dan nurturing yang membuat setiap peluang bergerak lebih cepat.",
    image: { avif: crmAvif, webp: crmWebp },
  },
  {
    id: "revenue-command",
    title: "Revenue Command",
    category: "Marketing Operations",
    description:
      "Dashboard real-time untuk menyatukan performa kampanye dan revenue.",
    image: { avif: analyticsAvif, webp: analyticsWebp },
  },
  {
    id: "digital-experience",
    title: "Digital Experience",
    category: "Product Design",
    description:
      "Ekosistem interface premium yang konsisten di seluruh customer journey.",
    image: { avif: creativeAvif, webp: creativeWebp },
  },
];
