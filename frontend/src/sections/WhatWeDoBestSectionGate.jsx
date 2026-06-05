import { lazy, Suspense } from "react";
import useNearViewport from "../hooks/useNearViewport";

const WhatWeDoBestSection = lazy(() => import("./WhatWeDoBestSection"));

function ServicesPlaceholder() {
  return (
    <section
      className="services-placeholder min-h-[940px] w-full md:min-h-[1080px]"
      aria-label="Layanan utama B2D"
    >
      <div className="services-placeholder-panel" aria-hidden="true" />
    </section>
  );
}

export default function WhatWeDoBestSectionGate() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "320px" });

  return (
    <div ref={ref} className="services-deferred w-full">
      {isNearViewport ? (
        <Suspense fallback={<ServicesPlaceholder />}>
          <WhatWeDoBestSection />
        </Suspense>
      ) : (
        <ServicesPlaceholder />
      )}
    </div>
  );
}
