import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import EditorialGrid from "../components/editorial/EditorialGrid";
import EditorialHeader from "../components/editorial/EditorialHeader";
import EditorialImage from "../components/editorial/EditorialImage";
import DisplayType from "../components/editorial/DisplayType";

const ContentCreative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="w-full bg-[#050A18] overflow-x-hidden text-white pt-24">
        <EditorialGrid>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-8 flex flex-col justify-center">
              <EditorialHeader
                index="02"
                indexTitle="Ideation & Production"
                titleLine1="Content"
                titleLine2="Creative"
              />
            </div>
            <div className="md:col-span-4 flex items-end">
              <DisplayType delay={0.4}>
                We craft abstract visual strategies and cinematic storytelling. Elevating brand identities beyond the digital noise.
              </DisplayType>
            </div>
          </div>
        </EditorialGrid>

        <EditorialGrid noTopLine>
          <EditorialImage 
            src="/assets/editorial/content_creative.png" 
            alt="Abstract Digital Creative Sculpture"
            aspectRatio="aspect-video md:aspect-[21/9]"
          />
        </EditorialGrid>

        {/* Temporary layout for existing logic */}
        <EditorialGrid noTopLine>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
            <div>
              <h3 className="text-3xl font-light tracking-tight text-white mb-6">Visual Storytelling</h3>
              <DisplayType>
                Every piece of content is a narrative vehicle. We integrate modern motion graphics, high-end photography, and brutalist typography to capture attention.
              </DisplayType>
            </div>
            <div>
              <h3 className="text-3xl font-light tracking-tight text-white mb-6">Brand Architecture</h3>
              <DisplayType>
                Your brand is more than a logo. It's an entire ecosystem of emotions and aesthetics carefully curated to resonate with premium audiences.
              </DisplayType>
            </div>
          </div>
        </EditorialGrid>
      </main>
      <Footer />
    </>
  );
};

export default ContentCreative;
