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
        './src/components/header.tsx',
        './src/components/footer.tsx',

        './src/shared/ui/icons/index.tsx',

        './src/shared/config/*.ts',
        './src/shared/utils/*.ts',
      ],
    },
  },
  plugins: [vercel(), react()],
});
