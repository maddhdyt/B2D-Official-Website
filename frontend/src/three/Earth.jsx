import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import cloudTextureUrl from "../assets/earth-clouds.webp";
import nightTextureUrl from "../assets/earth-night.webp";
import Atmosphere from "./Atmosphere";
import DataNetwork from "./DataNetwork";
import { EARTH_RADIUS } from "./globeMath";

const Earth = memo(function Earth() {
  const earthGroup = useRef(null);
  const clouds = useRef(null);
  const [nightTexture, cloudTexture] = useTexture([
    nightTextureUrl,
    cloudTextureUrl,
  ]);

  useEffect(() => {
    nightTexture.colorSpace = THREE.SRGBColorSpace;
    nightTexture.anisotropy = 4;
    cloudTexture.anisotropy = 2;
    nightTexture.needsUpdate = true;
    cloudTexture.needsUpdate = true;
  }, [cloudTexture, nightTexture]);

  const materials = useMemo(() => {
    const earth = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#4b73a5"),
      emissive: new THREE.Color("#ffad62"),
      emissiveIntensity: 0.82,
      emissiveMap: nightTexture,
      map: nightTexture,
      metalness: 0,
      roughness: 1,
    });
    const cloud = new THREE.MeshPhongMaterial({
      alphaMap: cloudTexture,
      blending: THREE.AdditiveBlending,
      color: new THREE.Color("#b9e8ff"),
      depthWrite: false,
      map: cloudTexture,
      opacity: 0.12,
      shininess: 8,
      transparent: true,
    });

    return { cloud, earth };
  }, [cloudTexture, nightTexture]);

  useEffect(
    () => () => {
      materials.cloud.dispose();
      materials.earth.dispose();
    },
    [materials],
  );

  useFrame((_, delta) => {
    if (earthGroup.current) {
      earthGroup.current.rotation.y += delta * ((Math.PI * 2) / 150);
    }

    if (clouds.current) {
      clouds.current.rotation.y += delta * ((Math.PI * 2) / 112);
    }
  });

  return (
    <group ref={earthGroup} rotation={[-0.13, -1.12, -0.08]}>
      <mesh frustumCulled>
        <sphereGeometry args={[EARTH_RADIUS, 96, 48]} />
        <primitive object={materials.earth} attach="material" />
      </mesh>

      <mesh ref={clouds} frustumCulled scale={1.008}>
        <sphereGeometry args={[EARTH_RADIUS, 80, 40]} />
        <primitive object={materials.cloud} attach="material" />
      </mesh>

      <DataNetwork />
      <Atmosphere />
    </group>
  );
});

export default Earth;
