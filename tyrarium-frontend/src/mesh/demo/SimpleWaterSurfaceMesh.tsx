import { useFrame, type Vector3 } from '@react-three/fiber';
import { useMemo, type JSX } from 'react';
import { createNoise3D } from 'simplex-noise';
import { PlaneGeometry } from 'three';

export interface SimpleWaterSurfaceMeshProps {
  position?: Vector3;
  width?: number;
  height?: number;
  cellSize?: number;
}

const SimpleWaterSurfaceMesh = ({
  position = [0, 0, 0],
  width = 1,
  height = 1,
  cellSize = 1,
}: SimpleWaterSurfaceMeshProps): JSX.Element => {
  const noise1 = createNoise3D();
  const noise2 = createNoise3D();

  const geometry = useMemo(() => {
    const xResolution = Math.floor(width / cellSize);
    const yResolution = Math.floor(height / cellSize);
    const geometry = new PlaneGeometry(width, height, xResolution, yResolution);
    return geometry;
  }, [width, height, cellSize]);
  
  useFrame(({ clock }) => {
    if (!Number.isInteger(width / cellSize) || !Number.isInteger(height / cellSize)) {
      throw new Error(`Width and height must be multiples of cellSize. Got width=${width}, height=${height}, cellSize=${cellSize}.`);
    }
    
    const positionAttribs = geometry.attributes.position;

    for (let i = 0; i < positionAttribs.count; i++) {
      const x = positionAttribs.getX(i);
      const y = positionAttribs.getY(i);
      const noise1Sample = noise1(x * 0.1, y * 0.1, clock.elapsedTime * 0.5) * 1;
      const noise2Sample = noise2(x * 0.5, y * 0.5, clock.elapsedTime) * 0.1;
      const z = noise1Sample + noise2Sample;
      positionAttribs.setZ(i, z);
    }

    positionAttribs.needsUpdate = true;
    geometry.computeVertexNormals();

    return geometry;
  });

  return (
    <mesh
      position={position}
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow
    >
      <meshPhysicalMaterial
        color='#ffffff'
        transmission={1}
        roughness={0.1}
        ior={1.333}
      />
    </mesh>
  );
}

export default SimpleWaterSurfaceMesh;
