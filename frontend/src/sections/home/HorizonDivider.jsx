export default function HorizonDivider() {
  return (
    <div
      className="relative w-full mt-16 md:mt-24 h-[120px] md:h-[180px] flex justify-center"
      aria-hidden="true"
    >
      <div className="absolute bottom-[30px] md:bottom-[50px] w-[80vw] md:w-[60vw] h-[150px] bg-linear-to-t from-[#468AFF]/40 to-[#00FBFF]/5 rounded-t-full filter blur-[50px] pointer-events-none z-0" />

      <div
        className="absolute bottom-0 w-[150vw] md:w-[110vw] h-[120px] md:h-[180px] bg-linear-to-r from-[#468AFF] to-[#00FBFF] rounded-t-[50%] z-10 shadow-[0_-5px_20px_rgba(70,138,255,0.2)]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 15%, black 50%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 15%, black 50%, transparent 85%)",
          pointerEvents: "none",
        }}
      />

      <div className="absolute bottom-[-2px] w-[150vw] md:w-[110vw] h-[120px] md:h-[180px] bg-[#07080a] rounded-t-[50%] z-20 pointer-events-none" />
    </div>
  );
}
