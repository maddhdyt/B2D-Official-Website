import { useFrame, useThree } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";
import Earth from "./Earth";
import SpaceBackground from "./SpaceBackground";
import Stars from "./Stars";

const GlobeScene = memo(function GlobeScene() {
  const globe = useRef(null);
  const viewport = useThree((state) => state.viewport);
  const scale = useMemo(
    () => THREE.MathUtils.clamp(viewport.width / 7.4, 0.88, 1.65),
    [viewport.width],
  );
  const baseY = -viewport.height / 2 + 0.06;

  useFrame(() => {
    if (!globe.current) {
      return;
    }

    const parallax = Math.min(window.scrollY * 0.0001, 0.22);
    globe.current.position.y = THREE.MathUtils.lerp(
      globe.current.position.y,
      baseY + parallax,
      0.035,
    );
  });

  return (
    <>
      <color attach="background" args={["#000814"]} />
      <ambientLight color="#003566" intensity={0.7} />
      <directionalLight
        color="#4CC9F0"
        intensity={1.1}
        position={[-4, 4, 6]}
      />
      <SpaceBackground />
      <Stars />
      <group
        ref={globe}
        position={[0, baseY, 0]}
        rotation={[0.04, 0, 0]}
        scale={scale}
      >
        <Earth />
      </group>
    </>
  );
});

export default GlobeScene;
