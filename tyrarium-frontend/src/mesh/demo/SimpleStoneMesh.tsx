import type { Euler as R3FEuler, Color as R3FColor, Vector3 as R3FVector3 } from '@react-three/fiber';
import { useMemo, type JSX } from 'react';
import { createNoise3D } from 'simplex-noise';
import { IcosahedronGeometry, Vector3 as THREEVector3 } from 'three';

interface SimpleStoneMeshProps {
  position?: R3FVector3;
  rotation?: R3FEuler;
  size?: number;
  color?: R3FColor;
}

const SimpleStoneMesh = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = 1,
  color = '#6f6f6f',
}: SimpleStoneMeshProps): JSX.Element => {
  const geometry = useMemo(() => {

    const resolution = 10;

    const geometry = new IcosahedronGeometry(size * 0.5, resolution);
    const positionAttribs = geometry.attributes.position;
    const normalAttribs = geometry.attributes.normal;

    const noise1 = createNoise3D();
    const noise2 = createNoise3D();

    const vertex = new THREEVector3();
    const vertexNormal = new THREEVector3();

    for (let i = 0; i < positionAttribs.count; i++) {
      vertex.fromBufferAttribute(positionAttribs, i);
      vertexNormal.fromBufferAttribute(normalAttribs, i);
      
      const noise1Sample = noise1(vertex.x, vertex.y, vertex.z) * 0.2;
      const noise2Sample = noise2(vertex.x * 3, vertex.y * 3, vertex.z * 3) * 0.02;
      const displacement = noise1Sample + noise2Sample;

      vertex.addScaledVector(vertexNormal, displacement);

      positionAttribs.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    positionAttribs.needsUpdate = true;
    geometry.computeVertexNormals();

    return geometry;
  }, [size]);

  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={geometry}
    >
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default SimpleStoneMesh;
