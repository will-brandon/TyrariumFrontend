import { Canvas as R3FCanvas } from '@react-three/fiber';
import './ReactApp.css'
import type { JSX } from 'react/jsx-dev-runtime';
import TextureViewerScene from './scene/demo/TextureViewerScene';
import pbrTextures from './textures/pbrTextures';

const ReactApp = (): JSX.Element => {
  return (
    <div className='react-app'>
      <R3FCanvas shadows>
        <TextureViewerScene
          pbrTextureMapURLs={pbrTextures.darkRock02['1K']}
          pbrTextureDisplacementScale={0.03}
          textureRepetitions={[2, 2]}
          planeResolution={[400, 400]}
        />
      </R3FCanvas>
    </div>
  );
};

export default ReactApp;
