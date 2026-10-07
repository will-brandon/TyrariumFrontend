import type { JSX } from 'react/jsx-dev-runtime';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { type Color as R3FColor } from '@react-three/fiber';
import { toTHREEColor } from '../../util/colorUtils';
import type { PBRTextureMapURLs } from '../../textures/types';
import TexturePlaneMesh from '../../mesh/demo/TexturePlaneMesh';

export interface TextureViewerSceneProps {
  pbrTextureMapURLs: PBRTextureMapURLs;
  pbrTextureDisplacementScale: number;
  textureRepetitions: [number, number];
  backgroundColor?: R3FColor;
  planeDimensions?: [number, number];
  planeResolution?: [number, number];
}

const TextureViewerScene = ({
  pbrTextureMapURLs,
  pbrTextureDisplacementScale,
  textureRepetitions = [1, 1],
  backgroundColor = '#0091ff',
  planeDimensions = [1, 1],
  planeResolution = [100, 100],
}: TextureViewerSceneProps): JSX.Element => (
  <>
    <color attach='background' args={[toTHREEColor(backgroundColor)]} />
    <PerspectiveCamera position={[0, 0, -5]} makeDefault />
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <pointLight position={[0, 5, 0]} intensity={100} />
    <TexturePlaneMesh
      rotation={[-0.5 * Math.PI, 0, 0]}
      pbrTextureMapURLs={pbrTextureMapURLs}
      pbrTextureDisplacementScale={pbrTextureDisplacementScale}
      textureRepetitions={textureRepetitions}
      dimensions={planeDimensions}
      resolution={planeResolution}
    />
  </>
);

export default TextureViewerScene;
