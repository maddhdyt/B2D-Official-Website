import React, { useEffect } from 'react';
import HeroContent from '../components/content/HeroContent';
import ServiceShowcase from '../components/content/ServiceShowcase';
import CreativeProcess from '../components/content/CreativeProcess';
import BrandIdentityShowcase from '../components/content/BrandIdentityShowcase';
import SocialMediaPreview from '../components/content/SocialMediaPreview';
import PricingContent from '../components/content/PricingContent';
import TestimonialsContent from '../components/content/TestimonialsContent';
import FAQCTAContent from '../components/content/FAQCTAContent';
import Footer from '../components/Footer';

const ContentCreative = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#050A18] min-h-screen text-[#FFFFFF] overflow-x-hidden">
        <HeroContent />
        <ServiceShowcase />
        <CreativeProcess />
        <BrandIdentityShowcase />
        <SocialMediaPreview />
        <PricingContent />
        <TestimonialsContent />
        <FAQCTAContent />
      </div>
      <Footer />
    </>
  );
};

export default ContentCreative;
