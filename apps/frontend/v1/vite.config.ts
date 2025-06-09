import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'frontend-v1',
      // the proper extensions will be added
      fileName: 'lib/frontend-v1',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
        },
      },
    },
  },
  server: {
    port: 3000,
    warmup: {
      clientFiles: [
        './src/components/Header.tsx',
        './src/components/Footer.tsx',

        './src/hooks/useDeviceWidth.ts',

        './src/assets/icons/*.tsx',

        './src/config/*.ts',
        './src/utils/*.ts',
      ],
    },
  },
  plugins: [react(), libInjectCss()],
});
