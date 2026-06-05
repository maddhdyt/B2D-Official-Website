import HeroBackdrop from "../components/common/HeroBackdrop";
import SparkleField from "../components/common/SparkleField";
import Navbar from "../components/Navbar/Navbar";

export default function SiteLayout({ children }) {
  return (
    <div
      id="top"
      className="font-sans bg-[#07080a] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden min-h-screen flex flex-col relative"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Lewati ke konten utama
      </a>
      <HeroBackdrop />
      <SparkleField />
      <Navbar />
      {children}
    </div>
  );
}
