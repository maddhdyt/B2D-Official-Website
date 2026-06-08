import { useInView } from "framer-motion";
import { AdaptiveDpr } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import GlobeScene from "./GlobeScene";

function AdaptiveBloom() {
  const width = useThree((state) => state.size.width);

  if (width < 680) {
    return null;
  }

  return (
    <EffectComposer enableNormalPass={false} multisampling={0}>
      <Bloom
        intensity={0.58}
        luminanceSmoothing={0.28}
        luminanceThreshold={0.72}
        mipmapBlur
        radius={0.42}
      />
    </EffectComposer>
  );
}

export default function GlobeCanvas() {
  const containerRef = useRef(null);
  // Keep rendering slightly before it enters screen to avoid pop-in
  const isInView = useInView(containerRef, { margin: "400px" });

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        camera={{ far: 60, fov: 42, near: 0.1, position: [0, 0.25, 8.4] }}
        dpr={[1, 1.5]}
        frameloop={isInView ? "always" : "demand"}
      gl={{
        alpha: false,
        antialias: false,
        depth: true,
        powerPreference: "high-performance",
        stencil: false,
      }}
      shadows={false}
    >
      <AdaptiveDpr pixelated />
      <GlobeScene />
      <AdaptiveBloom />
    </Canvas>
    </div>
  );
}
