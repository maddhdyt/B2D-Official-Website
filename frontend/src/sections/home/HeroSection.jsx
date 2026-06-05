export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-4"
      aria-labelledby="hero-title"
    >
      <h1
        id="hero-title"
        className="flex flex-col items-center justify-center font-unbounded font-semibold text-5xl md:text-[6rem] leading-[1.05] tracking-tight"
      >
        <span className="block text-white">Grow</span>

        <span className="relative font-serif italic text-6xl md:text-[7.5rem] font-light mt-2 mb-4 md:mb-6 pr-4 text-white">
          Smart

          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] text-gray-300/40 pointer-events-none -rotate-2"
            viewBox="0 0 200 80"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse
              cx="100"
              cy="40"
              rx="98"
              ry="32"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>

          <svg
            className="absolute -right-8 top-[-10%] w-8 h-8 md:w-10 md:h-10 text-white pointer-events-none animate-pulse"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
            <path d="M19 4L19.5 6.5L22 7L19.5 7.5L19 10L18.5 7.5L16 7L18.5 6.5L19 4Z" />
          </svg>
        </span>

        <span className="block text-white">Go Digital</span>
      </h1>

      <div className="mt-14 relative group z-20">
        <div
          className="absolute -inset-0.5 bg-linear-to-r from-[#468AFF] to-[#00FBFF] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"
          aria-hidden="true"
        />
        <a
          href="#about"
          className="relative block px-10 py-3.5 rounded-full bg-[#0a0f1c] border border-gray-700/50 text-sm md:text-base text-gray-200 hover:text-white transition-all duration-300 font-unbounded cursor-pointer"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
