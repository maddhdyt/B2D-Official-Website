import React, { useEffect } from 'react';
import HeroAds from '../components/digads/HeroAds';
import PainPoints from '../components/digads/PainPoints';
import ServiceCatalogAds from '../components/digads/ServiceCatalogAds';
import HowItWorksAds from '../components/digads/HowItWorksAds';
import PlatformTools from '../components/digads/PlatformTools';
import CaseStudies from '../components/digads/CaseStudies';
import PricingAds from '../components/digads/PricingAds';
import FAQCTAAds from '../components/digads/FAQCTAAds';
import Footer from '../components/Footer';

const DigitalAdvertising = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#050A18] min-h-screen text-[#FFFFFF] overflow-hidden">
        <HeroAds />
        <PainPoints />
        <ServiceCatalogAds />
        <HowItWorksAds />
        <PlatformTools />
        <CaseStudies />
        <PricingAds />
        <FAQCTAAds />
      </div>
      <Footer />
    </>
  );
};

export default DigitalAdvertising;
