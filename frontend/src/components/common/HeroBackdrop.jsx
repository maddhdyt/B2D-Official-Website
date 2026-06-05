import { remoteAssets } from "../../assets/remoteAssets";

export default function HeroBackdrop() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-[110vh] pointer-events-none z-0 opacity-100"
      style={{
        backgroundImage: `url('${remoteAssets.gridBackground}')`,
        backgroundSize: "70% auto",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
      aria-hidden="true"
    />
  );
}
