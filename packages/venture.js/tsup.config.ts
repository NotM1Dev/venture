import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  target: 'esnext',
  skipNodeModulesBundle: true,
  keepNames: true,
  minifyIdentifiers: false,
  minifySyntax: true,
  minifyWhitespace: true,
  silent: true,
  shims: true,
  clean: true,
  dts: true
});
