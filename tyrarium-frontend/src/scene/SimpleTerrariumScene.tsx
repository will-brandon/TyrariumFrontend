import type { JSX } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import SimpleSandMesh from '../mesh/demo/SimpleSandMesh';
import SimpleStoneMesh from '../mesh/demo/SimpleStoneMesh';
import SimpleWaterSurfaceMesh from '../mesh/demo/SimpleWaterSurfaceMesh';

const SimpleTerrariumScene = (): JSX.Element => (
  <>
    <color attach='background' args={['#03001d']} />
    <PerspectiveCamera position={[2, 3, 5]} makeDefault />
    <OrbitControls />
    <pointLight
      position={[15, 40, -13]}
      intensity={8_000}
      castShadow
      shadow-mapSize={[4096, 4096]}
    />
    <SimpleSandMesh position={[0, 0.7, 0]} width={100} height={70} cellSize={0.2} />
    <SimpleWaterSurfaceMesh position={[0, 0, 0]} width={100} height={70} cellSize={0.2} />
    {
      Array.from({ length: 20 }, (_, i) => i).map(() => (
        <SimpleStoneMesh
          position={[Math.random() * 15 - 5, 1, Math.random() * 15 - 5]}
          size={Math.random() + 1}
        />
      ))
    }
  </>
);

export default SimpleTerrariumScene;
