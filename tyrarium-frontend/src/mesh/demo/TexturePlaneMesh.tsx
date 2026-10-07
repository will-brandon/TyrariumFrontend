import type { Euler as R3FEuler, Vector3 as R3FVector3 } from '@react-three/fiber';
import { type JSX } from 'react';
import type { PBRTextureMapURLs } from '../../textures/types';
import PBRTextureStandardMaterial from '../../textures/PBRTextureStandardMaterial';

export interface TexturePlaneMeshProps {
  pbrTextureMapURLs: PBRTextureMapURLs;
  pbrTextureDisplacementScale: number;
  textureRepetitions?: [number, number];
  position?: R3FVector3;
  rotation?: R3FEuler;
  dimensions?: [number, number];
  resolution?: [number, number];
}

const TexturePlaneMesh = ({
  pbrTextureMapURLs,
  pbrTextureDisplacementScale,
  textureRepetitions = [1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  dimensions = [1, 1],
  resolution = [100, 100],
}: TexturePlaneMeshProps): JSX.Element => (
  <mesh
    position={position}
    rotation={rotation}
  >
    <planeGeometry args={[...dimensions, ...resolution]} />
    <PBRTextureStandardMaterial
      mapURLs={pbrTextureMapURLs}
      displacementScale={pbrTextureDisplacementScale}
      repetitions={textureRepetitions}
    />
  </mesh>
);

export default TexturePlaneMesh;
