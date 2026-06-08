import { memo, useEffect, useMemo } from "react";
import * as THREE from "three";
import { EARTH_RADIUS } from "./globeMath";

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewDirection;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDirection = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uStrength;
  varying vec3 vNormal;
  varying vec3 vViewDirection;

  void main() {
    float rim = pow(1.0 - max(dot(vNormal, vViewDirection), 0.0), 3.2);
    float horizon = smoothstep(0.08, 0.95, rim);
    gl_FragColor = vec4(uColor * (1.0 + rim * 1.8), horizon * uStrength);
  }
`;

const Atmosphere = memo(function Atmosphere() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fragmentShader,
        side: THREE.FrontSide,
        toneMapped: false,
        transparent: true,
        uniforms: {
          uColor: { value: new THREE.Color("#00A6FB").multiplyScalar(1.6) },
          uStrength: { value: 0.72 },
        },
        vertexShader,
      }),
    [],
  );

  useEffect(() => () => material.dispose(), [material]);

  return (
    <mesh frustumCulled scale={1.035}>
      <sphereGeometry args={[EARTH_RADIUS, 48, 24]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
});

export default Atmosphere;
