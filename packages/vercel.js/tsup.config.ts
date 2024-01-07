import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  target: 'esnext',
  skipNodeModulesBundle: true,
  minify: true,
  silent: true,
  shims: true,
  clean: true,
  dts: true
});
