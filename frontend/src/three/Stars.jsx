import { useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";

const STAR_COUNT = 850;

function createStarPositions() {
  const positions = new Float32Array(STAR_COUNT * 3);
  let seed = 29;

  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let index = 0; index < STAR_COUNT; index += 1) {
    positions[index * 3] = (random() - 0.5) * 22;
    positions[index * 3 + 1] = (random() - 0.5) * 13;
    positions[index * 3 + 2] = -1.2 - random() * 4;
  }

  return positions;
}

const Stars = memo(function Stars() {
  const stars = useRef(null);
  const positions = useMemo(createStarPositions, []);

  useFrame(({ clock }) => {
    if (stars.current) {
      stars.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.018) * 0.025;
      stars.current.position.y =
        Math.sin(clock.getElapsedTime() * 0.035) * 0.035;
    }
  });

  return (
    <points ref={stars} frustumCulled>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        blending={2}
        color="#b9e7ff"
        depthWrite={false}
        opacity={0.62}
        size={0.018}
        sizeAttenuation
        toneMapped={false}
        transparent
      />
    </points>
  );
});

export default Stars;
