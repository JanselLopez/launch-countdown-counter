// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site:'https://jansellopez.github.io/',
  base:'launch-countdown-counter',
  integrations: [tailwind()],
});