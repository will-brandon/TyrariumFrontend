import type { JSX } from 'react';
import DemoCubeMesh from './DemoCubeMesh';

export interface DemoCubeFieldMeshProps {
  xCount?: number;
  yCount?: number;
  zCount?: number;
  spacing?: number;
}

const DemoCubeFieldMesh = ({
  xCount = 10,
  yCount = 10,
  zCount = 10,
  spacing = 2,
}: DemoCubeFieldMeshProps = {}): JSX.Element => (
  <>
    {Array.from({ length: xCount }, (_, x) =>
      Array.from({ length: yCount }, (_, y) =>
        Array.from({ length: zCount }, (_, z) => (
          <DemoCubeMesh
            key={`demo-cube-${x}-${y}-${z}`}
            position={[
              x * spacing - xCount / 2,
              y * spacing - yCount / 2,
              z * spacing - zCount / 2,
            ]}
            color={`hsl(${(x + y + z) * 36}, 100%, 50%)`}
            size={1}
          />
        ))
      )
    )}
  </>
);

export default DemoCubeFieldMesh;
