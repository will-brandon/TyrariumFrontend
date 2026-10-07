import { useFrame, type Euler, type Color as R3FColor, type Vector3 } from '@react-three/fiber';
import { useRef, useState, type JSX } from 'react';
import type { Group } from 'three';

interface DemoInnerCubeMeshProps {
  size: number;
  color: R3FColor;
}

const DemoInnerCubeMesh = ({ size, color }: DemoInnerCubeMeshProps): JSX.Element => (
  <mesh>
    <boxGeometry args={[size, size, size]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

interface DemoCubeHaloMeshProps extends DemoInnerCubeMeshProps {
  opacity: number;
}

const DemoCubeHaloMesh = ({ size, color, opacity }: DemoCubeHaloMeshProps): JSX.Element => (
  <mesh>
    <boxGeometry args={[size, size, size]} />
    <meshBasicMaterial color={color} transparent opacity={opacity} />
  </mesh>
);

export interface DemoCubeMeshProps {
  position?: Vector3;
  rotation?: Euler;
  color?: R3FColor;
  size?: number;
}

const DemoCubeMesh = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = '#ff0000',
  size = 1,
}: DemoCubeMeshProps): JSX.Element => {
  const haloGroupRef = useRef<Group>(null);
  const [hoverStartTime, setHoverStartTime] = useState<number | null>(null);

  // Halo pulses per second
  const haloPulseRate = 1.0;

  useFrame(() => {
    if (!haloGroupRef.current || !hoverStartTime) {
      return;
    }

    const hoverDurationSec = (Date.now() - hoverStartTime) / 1_000;

    haloGroupRef.current.scale.setScalar(1.1 - Math.cos(hoverDurationSec * Math.PI * haloPulseRate) * 0.1);
  });

  return (
    <group position={position} rotation={rotation}>
      <group
        onPointerOver={event => {
          event.stopPropagation();
          setHoverStartTime(Date.now());
        }}
        onPointerOut={event => {
          event.stopPropagation();
          setHoverStartTime(null);
        }}
      >
        <DemoInnerCubeMesh color={color} size={size} />
      </group>
      <group ref={haloGroupRef}>
        {hoverStartTime && (
          <DemoCubeHaloMesh
            color={'#ffffff'}
            size={size * 1.1}
            opacity={0.5}
          />
        )}
      </group>
    </group>
  );
};

export default DemoCubeMesh;
