import { lazy, Suspense } from "react";
import useNearViewport from "../hooks/useNearViewport";

const TestimonialSection = lazy(() => import("./TestimonialSection"));

function TestimonialPlaceholder() {
  return (
    <section className="min-h-[800px] w-full bg-[#07080A]" aria-hidden="true" />
  );
}

export default function TestimonialSectionGate() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "320px" });

  return (
    <div ref={ref} className="w-full content-visibility-auto contain-intrinsic-size-[800px]">
      {isNearViewport ? (
        <Suspense fallback={<TestimonialPlaceholder />}>
          <TestimonialSection />
        </Suspense>
      ) : (
        <TestimonialPlaceholder />
      )}
    </div>
  );
}
