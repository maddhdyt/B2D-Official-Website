import { lazy, Suspense } from "react";
import useNearViewport from "../hooks/useNearViewport";

const InsightsSection = lazy(() => import("./InsightsSection"));

function InsightsPlaceholder() {
  return (
    <section
      className="insights-placeholder min-h-[980px] w-full md:min-h-[1100px]"
      aria-label="Insights dan artikel digital marketing B2D"
    >
      <div className="insights-placeholder-glow" aria-hidden="true" />
    </section>
  );
}

export default function InsightsSectionGate() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "320px" });

  return (
    <div ref={ref} className="insights-deferred w-full">
      {isNearViewport ? (
        <Suspense fallback={<InsightsPlaceholder />}>
          <InsightsSection />
        </Suspense>
      ) : (
        <InsightsPlaceholder />
      )}
    </div>
  );
}
