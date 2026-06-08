import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GridLine({ direction = "horizontal", delay = 0, className = "" }) {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-10%" });

  const isHorizontal = direction === "horizontal";

  return (
    <div
      ref={lineRef}
      className={`absolute bg-white/10 ${
        isHorizontal ? "h-[1px] w-full left-0" : "w-[1px] h-full top-0"
      } ${className}`}
      style={{
        transformOrigin: isHorizontal ? "left" : "top",
      }}
    >
      <motion.div
        className="w-full h-full bg-white/20"
        initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
        animate={
          isInView
            ? { scaleX: 1, scaleY: 1 }
            : { scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </div>
  );
}
