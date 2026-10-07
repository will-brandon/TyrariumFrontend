import type { Color as R3FColor } from '@react-three/fiber';
import { Color as THREEColor, type ColorRepresentation as THREEColorRepresentation } from 'three';

export const toTHREEColorRepresentation = (r3fColor: R3FColor): THREEColorRepresentation => {
  // Individually all three possible variations of the type union:
  //  1. THREEColorRepresentation
  //  2. [color: THREEColorRepresentation]
  //  3. [r: number, g: number, b: number]

  // 1. If r3fColor is not an array, it is already a THREEColorRepresentation.
  if (!Array.isArray(r3fColor)) {
    return r3fColor;
  }

  // 2. If the array has one element, it is a THREEColorRepresentation.
  if (r3fColor.length === 1) {
    return new THREEColor(r3fColor[0]);
  }

  // 3. The array must have three elements, it is an RGB tuple.
  const [r, g, b] = r3fColor;
  return new THREEColor(r, g, b);
}
