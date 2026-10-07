import type { Color as R3FColor, Vector3 } from '@react-three/fiber';
import { useMemo, type JSX } from 'react';
import { createNoise2D } from 'simplex-noise';
import { PlaneGeometry } from 'three';

interface SimpleSandMeshProps {
  position?: Vector3;
  width?: number;
  height?: number;
  cellSize?: number;
  color?: R3FColor;
}

const SimpleSandMesh = ({
  position = [0, 0, 0],
  width = 1,
  height = 1,
  cellSize = 1,
  color = '#C2B280',
}: SimpleSandMeshProps): JSX.Element => {
  const geometry = useMemo(() => {
    if (!Number.isInteger(width / cellSize) || !Number.isInteger(height / cellSize)) {
      throw new Error(`Width and height must be multiples of cellSize. Got width=${width}, height=${height}, cellSize=${cellSize}.`);
    }

    const xResolution = Math.floor(width / cellSize);
    const yResolution = Math.floor(height / cellSize);

    const geometry = new PlaneGeometry(width, height, xResolution, yResolution);
    const positionAttribs = geometry.attributes.position;

    const noise1 = createNoise2D();
    const noise2 = createNoise2D();
    const noise3 = createNoise2D();
    const noise4 = createNoise2D();

    for (let i = 0; i < positionAttribs.count; i++) {
      const x = positionAttribs.getX(i);
      const y = positionAttribs.getY(i);
      const noise1Sample = noise1(x * cellSize * 10, y * cellSize * 10) * 0.1;
      const noise2Sample = noise2(x * cellSize * 1, y * cellSize * 1) * 0.3;
      const noise3Sample = noise3(x * cellSize * 0.1, y * cellSize * 0.1) * 3;
      const noise4Sample = noise4(x * cellSize * 0.005, y * cellSize * 0.005) * 20;
      const z = noise1Sample + noise2Sample + noise3Sample + noise4Sample;
      positionAttribs.setZ(i, z);
    }

    positionAttribs.needsUpdate = true;
    geometry.computeVertexNormals();

    return geometry;
  }, [width, height, cellSize]);

  return (
    <mesh
      position={position}
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default SimpleSandMesh;
