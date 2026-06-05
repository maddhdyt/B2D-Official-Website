import { lazy, Suspense } from "react";
import useNearViewport from "../hooks/useNearViewport";

const GrowthStrategySection = lazy(() => import("./GrowthStrategySection"));

function StrategyPlaceholder() {
  return (
    <section
      className="strategy-section-placeholder min-h-[760px] w-full md:min-h-[940px] lg:min-h-[1120px]"
      aria-label="Tiga pilar strategi digital marketing B2D"
    >
      <div className="strategy-placeholder-radar" aria-hidden="true" />
    </section>
  );
}

export default function GrowthStrategySectionGate() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "300px" });

  return (
    <div
      ref={ref}
      id="growth-strategy"
      className="strategy-deferred-section w-full"
    >
      {isNearViewport ? (
        <Suspense fallback={<StrategyPlaceholder />}>
          <GrowthStrategySection />
        </Suspense>
      ) : (
        <StrategyPlaceholder />
      )}
    </div>
  );
}
