import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import PortfolioCarouselSection from "./portfolio/PortfolioCarouselSection";
import ResultsShowcaseSection from "./portfolio/ResultsShowcaseSection";

export default function PortfolioShowcaseFlow() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div>
          <ResultsShowcaseSection />
          <PortfolioCarouselSection />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
