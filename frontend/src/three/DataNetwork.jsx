import { useFrame } from "@react-three/fiber";
import { memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { cities, createRouteCurve, latLngToVector3, routes } from "./globeMath";

function createNetworkGeometry() {
  const curves = routes.map(createRouteCurve);
  const lineSegments = [];

  curves.forEach((curve) => {
    const points = curve.getPoints(40);

    for (let index = 0; index < points.length - 1; index += 1) {
      lineSegments.push(...points[index].toArray(), ...points[index + 1].toArray());
    }
  });

  return {
    curves,
    linePositions: new Float32Array(lineSegments),
    cityPositions: new Float32Array(
      cities.flatMap(({ lat, lon }) =>
        latLngToVector3(lat, lon, 3.045).toArray(),
      ),
    ),
  };
}

const DataNetwork = memo(function DataNetwork() {
  const lineMaterialRef = useRef(null);
  const packetsAttribute = useRef(null);
  const network = useMemo(createNetworkGeometry, []);
  const packetPositions = useMemo(
    () => new Float32Array(routes.length * 3),
    [],
  );
  const materials = useMemo(() => {
    const line = new THREE.LineBasicMaterial({
      blending: THREE.AdditiveBlending,
      color: new THREE.Color("#00A6FB").multiplyScalar(2.2),
      depthWrite: false,
      opacity: 0.52,
      toneMapped: false,
      transparent: true,
    });
    const city = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color: new THREE.Color("#ffb65c").multiplyScalar(2.8),
      depthWrite: false,
      size: 0.052,
      sizeAttenuation: true,
      toneMapped: false,
      transparent: true,
    });
    const packet = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color: new THREE.Color("#4CC9F0").multiplyScalar(3),
      depthWrite: false,
      size: 0.042,
      sizeAttenuation: true,
      toneMapped: false,
      transparent: true,
    });

    return { city, line, packet };
  }, []);

  useEffect(
    () => () => {
      materials.city.dispose();
      materials.line.dispose();
      materials.packet.dispose();
    },
    [materials],
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity = 0.46 + Math.sin(elapsed * 0.65) * 0.1;
    }

    network.curves.forEach((curve, index) => {
      const progress = (elapsed * 0.075 + index / network.curves.length) % 1;
      curve.getPoint(progress).toArray(packetPositions, index * 3);
    });

    if (packetsAttribute.current) {
      packetsAttribute.current.needsUpdate = true;
    }
  });

  return (
    <group>
      <lineSegments frustumCulled>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[network.linePositions, 3]}
          />
        </bufferGeometry>
        <primitive
          ref={lineMaterialRef}
          object={materials.line}
          attach="material"
        />
      </lineSegments>

      <points frustumCulled>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[network.cityPositions, 3]}
          />
        </bufferGeometry>
        <primitive object={materials.city} attach="material" />
      </points>

      <points frustumCulled>
        <bufferGeometry>
          <bufferAttribute
            ref={packetsAttribute}
            attach="attributes-position"
            args={[packetPositions, 3]}
          />
        </bufferGeometry>
        <primitive object={materials.packet} attach="material" />
      </points>
    </group>
  );
});

export default DataNetwork;
