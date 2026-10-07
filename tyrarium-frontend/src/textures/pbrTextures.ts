import { type PBRTextureMapURLs } from './types';

import aerialRocks02_1K_DiffuseTexture from '../assets/textures/aerial_rocks_02/1k/aerial_rocks_02_diff_1k.png';
import aerialRocks02_1K_DisplacementTexture from '../assets/textures/aerial_rocks_02/1k/aerial_rocks_02_disp_1k.png';
import aerialRocks02_1K_NormalTexture from '../assets/textures/aerial_rocks_02/1k/aerial_rocks_02_nor_gl_1k.png';
import aerialRocks02_1K_AmbientOcclusionTexture from '../assets/textures/aerial_rocks_02/1k/aerial_rocks_02_ao_1k.png';
import aerialRocks02_1K_RoughnessTexture from '../assets/textures/aerial_rocks_02/1k/aerial_rocks_02_rough_1k.png';

import darkRock02_1K_DiffuseTexture from '../assets/textures/dark_rock_02/1k/dark_rock_02_diff_1k.png';
import darkRock02_1K_DisplacementTexture from '../assets/textures/dark_rock_02/1k/dark_rock_02_disp_1k.png';
import darkRock02_1K_NormalTexture from '../assets/textures/dark_rock_02/1k/dark_rock_02_nor_gl_1k.png';
import darkRock02_1K_AmbientOcclusionTexture from '../assets/textures/dark_rock_02/1k/dark_rock_02_ao_1k.png';
import darkRock02_1K_RoughnessTexture from '../assets/textures/dark_rock_02/1k/dark_rock_02_rough_1k.png';

import aerialBeach01_1K_DiffuseTexture from '../assets/textures/aerial_beach_01/1k/aerial_beach_01_diff_1k.png';
import aerialBeach01_1K_DisplacementTexture from '../assets/textures/aerial_beach_01/1k/aerial_beach_01_disp_1k.png';
import aerialBeach01_1K_NormalTexture from '../assets/textures/aerial_beach_01/1k/aerial_beach_01_nor_gl_1k.png';
import aerialBeach01_1K_AmbientOcclusionTexture from '../assets/textures/aerial_beach_01/1k/aerial_beach_01_ao_1k.png';
import aerialBeach01_1K_RoughnessTexture from '../assets/textures/aerial_beach_01/1k/aerial_beach_01_rough_1k.png';

export type PBRTextureURLsByVariant = Record<string, PBRTextureMapURLs>;

const pbrTextures: Record<string, PBRTextureURLsByVariant> = {
  aerialRocks02: {
    '1K': {
      map: aerialRocks02_1K_DiffuseTexture,
      displacementMap: aerialRocks02_1K_DisplacementTexture,
      normalMap: aerialRocks02_1K_NormalTexture,
      aoMap: aerialRocks02_1K_AmbientOcclusionTexture,
      roughnessMap: aerialRocks02_1K_RoughnessTexture,
    },
  },
  darkRock02: {
    '1K': {
      map: darkRock02_1K_DiffuseTexture,
      displacementMap: darkRock02_1K_DisplacementTexture,
      normalMap: darkRock02_1K_NormalTexture,
      aoMap: darkRock02_1K_AmbientOcclusionTexture,
      roughnessMap: darkRock02_1K_RoughnessTexture,
    },
  },
  aerialBeach01: {
    '1K': {
      map: aerialBeach01_1K_DiffuseTexture,
      displacementMap: aerialBeach01_1K_DisplacementTexture,
      normalMap: aerialBeach01_1K_NormalTexture,
      aoMap: aerialBeach01_1K_AmbientOcclusionTexture,
      roughnessMap: aerialBeach01_1K_RoughnessTexture,
    },
  },
};

export default pbrTextures;
