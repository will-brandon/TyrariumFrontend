import { useEffect, type JSX } from 'react';
import type { PBRTextureMapURLs } from './types';
import { useTexture } from '@react-three/drei';
import { RepeatWrapping } from 'three';

export interface PBRTextureStandardMaterialProps {
  mapURLs: PBRTextureMapURLs;
  displacementScale: number;
  repetitions?: [number, number];
}

const PBRTextureStandardMaterial = ({
    mapURLs,
    displacementScale,
    repetitions = [1, 1],
 }: PBRTextureStandardMaterialProps): JSX.Element => {
  const textureMaps = useTexture(mapURLs);

  useEffect(() => {
    Object.values(textureMaps).forEach(texture => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(...repetitions);
      texture.needsUpdate = true; 
    });
  }, [textureMaps, repetitions]);

  return (
    <meshStandardMaterial
      map={textureMaps.map}
      displacementMap={textureMaps.displacementMap}
      normalMap={textureMaps.normalMap}
      aoMap={textureMaps.aoMap}
      roughnessMap={textureMaps.roughnessMap}
      displacementScale={displacementScale}
    />
  );
};

export default PBRTextureStandardMaterial;
