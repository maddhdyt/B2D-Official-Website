import { brands } from "../../data/brands";

const logoClassName =
  "h-8 md:h-12 w-auto opacity-60 grayscale transition-all duration-300 " +
  "hover:scale-125 hover:grayscale-0 hover:opacity-100 " +
  "hover:drop-shadow-[0_0_15px_rgba(0,251,255,0.8)] cursor-pointer";

function LogoTrack({ clone = false }) {
  return (
    <div
      className="flex flex-shrink-0 transform-gpu animate-scroll items-center gap-16 md:gap-24 pr-16 md:pr-24 group-hover:[animation-play-state:paused]"
      aria-hidden={clone || undefined}
    >
      {brands.map((brand) => (
        <img
          key={brand.src}
          src={brand.src}
          alt={clone ? "" : brand.name}
          width={brand.width}
          height={brand.height}
          loading="lazy"
          decoding="async"
          draggable="false"
          className={logoClassName}
        />
      ))}
    </div>
  );
}

export default function TrustedBrandsSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#07080a] z-30 flex flex-col items-center justify-center pt-8 pb-32 overflow-hidden"
      aria-labelledby="trusted-brands-title"
    >
      <h2
        id="trusted-brands-title"
        className="text-xs md:text-sm text-gray-400 font-unbounded uppercase tracking-[0.2em] md:tracking-[0.3em] mb-12"
      >
        Dipercaya Oleh Brand Inovatif
      </h2>

      <div className="flex w-full group">
        <LogoTrack />
        <LogoTrack clone />
      </div>

      <div
        className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-linear-to-r from-[#07080a] to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-linear-to-l from-[#07080a] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
