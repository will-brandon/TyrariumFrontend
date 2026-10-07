import type { JSX } from 'react/jsx-dev-runtime';
import DemoCubeMesh from '../mesh/DemoCubeMesh';
import { OrbitControls } from '@react-three/drei';
import type { Color as R3FColor } from '@react-three/fiber';
import { toTHREEColorRepresentation } from '../util/colorUtils';

interface DemoCubeSceneProps {
  backgroundColor?: R3FColor;
}

const DemoCubeScene = ({ backgroundColor = '#00f000' }: DemoCubeSceneProps): JSX.Element => {
  return (
    <>
      <color attach='background' args={[toTHREEColorRepresentation(backgroundColor)]} />
      <OrbitControls />
      <pointLight position={[10, 8, 3]} intensity={100} />
      <DemoCubeMesh />
    </>
  );
};

export default DemoCubeScene;
