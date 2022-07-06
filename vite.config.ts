import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [solidPlugin(), glsl()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
