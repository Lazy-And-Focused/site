import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
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
  plugins: [react(), tsconfigPaths()],
});
