import { useTexture } from "@react-three/drei";
import { memo, useEffect } from "react";
import * as THREE from "three";
import starfieldUrl from "../assets/starfield.webp";

const SpaceBackground = memo(function SpaceBackground() {
  const texture = useTexture(starfieldUrl);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 1;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <mesh position={[0, 0, -7]} scale={[24, 12, 1]} frustumCulled>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#486f9c"
        depthWrite={false}
        map={texture}
        toneMapped={false}
      />
    </mesh>
  );
});

export default SpaceBackground;
