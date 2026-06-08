import { lazy, Suspense } from "react";
import earthNightUrl from "../assets/earth-night.webp";
import starfieldUrl from "../assets/starfield.webp";
import useNearViewport from "../hooks/useNearViewport";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import useSaveData from "../hooks/useSaveData";
import useWebGLSupport from "../hooks/useWebGLSupport";

const GlobeCanvas = lazy(() => import("../three/GlobeCanvas"));

function GlobeFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-65"
        style={{ backgroundImage: `url(${starfieldUrl})` }}
      />
      <div
        className="globe-fallback-earth"
        style={{ backgroundImage: `url(${earthNightUrl})` }}
      />
    </div>
  );
}

export default function GlobeSection() {
  const { ref, isNearViewport } = useNearViewport({ rootMargin: "80px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const saveData = useSaveData();
  const supportsWebGL = useWebGLSupport();
  const canRenderScene =
    isNearViewport && supportsWebGL && !prefersReducedMotion && !saveData;

  return (
    <section
      ref={ref}
      className={`globe-section relative h-[820px] w-full overflow-hidden bg-[#000814] md:h-[920px] ${
        isNearViewport ? "globe-section-visible" : ""
      }`}
      aria-labelledby="globe-section-title"
    >
      <GlobeFallback />

      {canRenderScene ? (
        <div className="absolute inset-0 z-10" aria-hidden="true">
          <Suspense fallback={null}>
            <GlobeCanvas />
          </Suspense>
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_28%,rgba(0,53,102,0.24),transparent_48%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-32 bg-linear-to-b from-[#07080a] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-36 bg-linear-to-t from-[#07080a] via-[#000814]/55 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-40 mx-auto flex h-full max-w-7xl flex-col items-center px-5 pt-12 text-center md:pt-16">
        <p className="font-unbounded text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#4CC9F0]/80 md:text-xs">
          B2D Global Digital Network
        </p>
        <h2
          id="globe-section-title"
          className="mt-6 max-w-4xl font-unbounded text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
        >
          Ideas built to move
          <span className="block font-serif text-[1.08em] font-normal italic text-[#4CC9F0]">
            beyond borders.
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-sm font-light leading-7 text-slate-300/75 md:text-base">
          Strategy, design, and digital experiences connected into one
          scalable growth system.
        </p>

        <div className="mt-auto mb-12 flex items-center gap-3 font-unbounded text-[0.55rem] uppercase tracking-[0.25em] text-[#4CC9F0]/65 md:mb-16">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00A6FB] shadow-[0_0_14px_#00A6FB]" />
          Live network
          <span className="h-px w-12 bg-linear-to-r from-[#00A6FB]/70 to-transparent" />
          24 / 7
        </div>
      </div>
    </section>
  );
}
