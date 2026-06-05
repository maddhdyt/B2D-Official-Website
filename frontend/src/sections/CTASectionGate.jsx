import { lazy, Suspense } from "react";
import useNearViewport from "../hooks/useNearViewport";

const CTASection = lazy(() => import("./CTASection"));

function CTAPlaceholder() {
  return (
    <section className="min-h-[700px] w-full bg-blue-900" aria-hidden="true" />
  );
}

export default function CTASectionGate() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "320px" });

  return (
    <div ref={ref} className="w-full content-visibility-auto contain-intrinsic-size-[700px]">
      {isNearViewport ? (
        <Suspense fallback={<CTAPlaceholder />}>
          <CTASection />
        </Suspense>
      ) : (
        <CTAPlaceholder />
      )}
    </div>
  );
}
