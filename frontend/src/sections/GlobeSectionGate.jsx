import { lazy, Suspense } from "react";
import useNearViewport from "../hooks/useNearViewport";

const GlobeSection = lazy(() => import("./GlobeSection"));

function GlobeSectionPlaceholder() {
  return (
    <section
      className="globe-section-placeholder h-[820px] w-full md:h-[920px]"
      aria-label="B2D global digital network"
    >
      <div className="globe-placeholder-horizon" aria-hidden="true" />
    </section>
  );
}

export default function GlobeSectionGate() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "300px" });

  return (
    <div
      ref={ref}
      id="global-network"
      className="deferred-section h-[820px] w-full md:h-[920px]"
    >
      {isNearViewport ? (
        <Suspense fallback={<GlobeSectionPlaceholder />}>
          <GlobeSection />
        </Suspense>
      ) : (
        <GlobeSectionPlaceholder />
      )}
    </div>
  );
}
