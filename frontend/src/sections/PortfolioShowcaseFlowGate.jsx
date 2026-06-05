import { lazy, Suspense } from "react";
import useNearViewport from "../hooks/useNearViewport";

const PortfolioShowcaseFlow = lazy(() => import("./PortfolioShowcaseFlow"));

function PortfolioFlowPlaceholder() {
  return (
    <section
      className="portfolio-flow-placeholder min-h-[1900px] w-full md:min-h-[2100px]"
      aria-label="Showcase hasil kerja dan portfolio B2D"
    >
      <div className="portfolio-flow-placeholder-glow" aria-hidden="true" />
    </section>
  );
}

export default function PortfolioShowcaseFlowGate() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "320px" });

  return (
    <div
      ref={ref}
      className="portfolio-flow-deferred w-full"
    >
      {isNearViewport ? (
        <Suspense fallback={<PortfolioFlowPlaceholder />}>
          <PortfolioShowcaseFlow />
        </Suspense>
      ) : (
        <PortfolioFlowPlaceholder />
      )}
    </div>
  );
}
