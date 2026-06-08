import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import EditorialGrid from "../components/editorial/EditorialGrid";
import EditorialHeader from "../components/editorial/EditorialHeader";
import EditorialImage from "../components/editorial/EditorialImage";
import DisplayType from "../components/editorial/DisplayType";

const DigitalAdvertising = () => {
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
                index="03"
                indexTitle="Data & Performance"
                titleLine1="Digital"
                titleLine2="Advertising"
              />
            </div>
            <div className="md:col-span-4 flex items-end">
              <DisplayType delay={0.4}>
                We harness the power of data visualization and algorithmic targeting. Turning raw analytics into high-converting campaigns.
              </DisplayType>
            </div>
          </div>
        </EditorialGrid>

        <EditorialGrid noTopLine>
          <EditorialImage 
            src="/assets/editorial/digital_advertising.png" 
            alt="Futuristic Holographic Data Visualization"
            aspectRatio="aspect-video md:aspect-[21/9]"
          />
        </EditorialGrid>

        {/* Temporary layout for existing logic */}
        <EditorialGrid noTopLine>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
            <div>
              <h3 className="text-3xl font-light tracking-tight text-white mb-6">Algorithmic Targeting</h3>
              <DisplayType>
                Stop guessing. We deploy sophisticated tracking architectures and machine learning models to find your exact audience at the optimal moment.
              </DisplayType>
            </div>
            <div>
              <h3 className="text-3xl font-light tracking-tight text-white mb-6">Conversion Science</h3>
              <DisplayType>
                Advertising is math disguised as art. We rigorously test variables, optimize funnels, and scale winning creatives to maximize ROI and lower CPA.
              </DisplayType>
            </div>
          </div>
        </EditorialGrid>
      </main>
      <Footer />
    </>
  );
};

export default DigitalAdvertising;
