import React from "react";
import GridLine from "./GridLine";

export default function EditorialGrid({ children, className = "", noTopLine = false, noBottomLine = false }) {
  return (
    <section className={`relative w-full max-w-[90rem] mx-auto px-6 md:px-12 ${className}`}>
      {/* Outer framing lines */}
      <GridLine direction="vertical" className="left-6 md:left-12" delay={0.1} />
      <GridLine direction="vertical" className="right-6 md:right-12" delay={0.2} />
      
      {!noTopLine && <GridLine direction="horizontal" className="top-0" delay={0.3} />}
      {!noBottomLine && <GridLine direction="horizontal" className="bottom-0" delay={0.4} />}
      
      <div className="relative z-10 py-16 md:py-24">
        {children}
      </div>
    </section>
  );
}
