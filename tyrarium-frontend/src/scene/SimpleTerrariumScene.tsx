import type { JSX } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import SimpleSandMesh from '../mesh/demo/SimpleSandMesh';

const SimpleTerrariumScene = (): JSX.Element => (
  <>
    <color attach='background' args={['#03001d']} />
    <PerspectiveCamera position={[2, 3, 5]} makeDefault />
    <OrbitControls />
    <pointLight position={[-5, 50, -3]} intensity={4_000} />
    <SimpleSandMesh width={100} height={70} cellSize={0.2} />
  </>
);

export default SimpleTerrariumScene;
