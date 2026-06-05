import { PerformanceMonitor } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useState } from "react";
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
  const [dpr, setDpr] = useState(1.15);

  return (
    <Canvas
      camera={{ far: 60, fov: 42, near: 0.1, position: [0, 0.25, 8.4] }}
      dpr={dpr}
      frameloop="always"
      gl={{
        alpha: false,
        antialias: false,
        depth: true,
        powerPreference: "high-performance",
        stencil: false,
      }}
      shadows={false}
    >
      <PerformanceMonitor
        flipflops={3}
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr(1.35)}
      />
      <GlobeScene />
      <AdaptiveBloom />
    </Canvas>
  );
}
