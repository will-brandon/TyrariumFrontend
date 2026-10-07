import type { JSX } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import SimpleSandMesh from '../mesh/demo/SimpleSandMesh';
import SimpleStoneMesh from '../mesh/demo/SimpleStoneMesh';

const SimpleTerrariumScene = (): JSX.Element => (
  <>
    <color attach='background' args={['#03001d']} />
    <PerspectiveCamera position={[2, 3, 5]} makeDefault />
    <OrbitControls />
    <pointLight position={[-5, 50, -3]} intensity={5_000} />
    <SimpleSandMesh width={100} height={70} cellSize={0.2} />
    {
      Array.from({ length: 20 }, (_, i) => i).map(() => (
        <SimpleStoneMesh
          position={[Math.random() * 15 - 5, 0.5, Math.random() * 15 - 5]}
          size={Math.random() + 1}
        />
      ))
    }
  </>
);

export default SimpleTerrariumScene;
