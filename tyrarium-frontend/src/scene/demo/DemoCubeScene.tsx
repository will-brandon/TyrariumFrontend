import type { JSX } from 'react/jsx-dev-runtime';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { type Color as R3FColor } from '@react-three/fiber';
import { toTHREEColor } from '../../util/colorUtils';
import DemoCubeFieldMesh from '../../mesh/demo/DemoCubeFieldMesh';

export interface DemoCubeSceneProps {
  backgroundColor?: R3FColor;
}

const DemoCubeScene = ({ backgroundColor = '#000000' }: DemoCubeSceneProps): JSX.Element => (
  <>
    <color attach='background' args={[toTHREEColor(backgroundColor)]} />
    <PerspectiveCamera position={[2, 3, 5]} makeDefault />
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <pointLight position={[30, 20, 3]} intensity={1_000} />
    <DemoCubeFieldMesh />
  </>
);

export default DemoCubeScene;
