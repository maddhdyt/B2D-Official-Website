export default function IntroStatementSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#07080a] z-30 flex justify-center pb-24 px-4 -mt-12 md:-mt-24"
      aria-label="Tentang B2D"
    >
      <div className="max-w-[890px] text-center">
        <p className="text-4xl text-gray-300 leading-[1.4] font-light tracking-normal">
          B2D{" "}
          <span className="font-serif italic lowercase text-gray-400">
            adalah layanan penuh
          </span>{" "}
          STRATEGI, DESAIN <br className="hidden md:block" />
          dan AGENSI PEMASARAN DIGITAL{" "}
          <span className="font-serif italic lowercase text-gray-400">
            yang membantu
          </span>{" "}
          MEREK BERKEMBANG{" "}
          <span className="font-serif italic lowercase text-gray-400">
            maupun
          </span>{" "}
          BRAND TUMBUH LEBIH CEPAT.
        </p>
      </div>
    </section>
  );
}
