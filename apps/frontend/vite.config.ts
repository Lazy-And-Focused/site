import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vercel } from 'vite-plugin-vercel/vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
    warmup: {
      clientFiles: [
        './src/shared/components/app-header/index.tsx',
        './src/shared/components/app-footer/index.tsx',

        './src/shared/components/ui/icons/index.tsx',

        './src/shared/config/*.ts',
        './src/shared/utils/*.ts',
      ],
    },
  },
  plugins: [vercel(), react()],
});
