import Seo from "../components/common/Seo";
import GlobeSectionGate from "../sections/GlobeSectionGate";
import GrowthStrategySectionGate from "../sections/GrowthStrategySectionGate";
import InsightsSectionGate from "../sections/InsightsSectionGate";
import PortfolioShowcaseFlowGate from "../sections/PortfolioShowcaseFlowGate";
import WhatWeDoBestSectionGate from "../sections/WhatWeDoBestSectionGate";
import HeroSection from "../sections/home/HeroSection";
import HorizonDivider from "../sections/home/HorizonDivider";
import IntroStatementSection from "../sections/home/IntroStatementSection";
import TrustedBrandsSection from "../sections/home/TrustedBrandsSection";
import TestimonialSectionGate from "../sections/TestimonialSectionGate";
import CTASectionGate from "../sections/CTASectionGate";
import Footer from "../components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "B2D",
  logo: "https://ik.imagekit.io/yqhp1cmbp/group24.png",
  description:
    "Agensi strategi, desain, dan pemasaran digital yang membantu brand tumbuh lebih cepat.",
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="B2D - Grow Smart, Go Digital"
        description="B2D adalah agensi strategi, desain, dan pemasaran digital yang membantu brand tumbuh lebih cepat."
        schema={organizationSchema}
      />

      <main
        id="main-content"
        className="relative z-10 flex w-full max-w-[100vw] min-w-0 flex-1 flex-col items-center justify-start overflow-x-hidden pt-20 md:pt-24"
      >
        <HeroSection />
        <HorizonDivider />
        <IntroStatementSection />
        <TrustedBrandsSection />
        <GlobeSectionGate />
        <GrowthStrategySectionGate />
        <PortfolioShowcaseFlowGate />
        <InsightsSectionGate />
        <WhatWeDoBestSectionGate />
        <TestimonialSectionGate />
        <CTASectionGate />
      </main>
      <Footer />
    </>
  );
}
