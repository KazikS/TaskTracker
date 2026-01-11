import { defineConfig, createSystem, defaultConfig } from '@chakra-ui/react';
import { globalCss } from './global-css';
import { recipes } from './recipes/';
import { tokens } from './tokens';

const config = defineConfig({
  globalCss,
  theme: {
    recipes,
    tokens,
  },
});

export const system = createSystem(defaultConfig, config);
