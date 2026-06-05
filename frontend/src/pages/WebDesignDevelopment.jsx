import HeroSection from "../components/webdev/HeroSection";
import ProductCatalog from "../components/webdev/ProductCatalog";
import WhyB2D from "../components/webdev/WhyB2D";
import HowItWorks from "../components/webdev/HowItWorks";
import ComparisonTable from "../components/webdev/ComparisonTable";
import Testimonials from "../components/webdev/Testimonials";
import FAQSection from "../components/webdev/FAQSection";
import CTAFinal from "../components/webdev/CTAFinal";
import Footer from "../components/Footer";

export default function WebDesignDevelopment() {
  return (
    <>
      <main className="w-full bg-[#050A18] overflow-hidden text-white">
        <HeroSection />
        <ProductCatalog />
        <WhyB2D />
        <HowItWorks />
        <ComparisonTable />
        <Testimonials />
        <FAQSection />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
