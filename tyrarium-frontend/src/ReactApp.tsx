import { Canvas as R3FCanvas } from '@react-three/fiber';
import './ReactApp.css'
import type { JSX } from 'react/jsx-dev-runtime';
import SimpleTerrariumScene from './scene/SimpleTerrariumScene';

const ReactApp = (): JSX.Element => {
  return (
    <div className='react-app'>
      <R3FCanvas shadows>
        <SimpleTerrariumScene />
      </R3FCanvas>
    </div>
  );
};

export default ReactApp;
