// vite.config.ts
import { defineConfig } from 'file:///C:/Users/straz/Desktop/Private/Projects/LAF/site/node_modules/.pnpm/vite@5.4.19_@types+node@22.15.30_terser@5.41.0/node_modules/vite/dist/node/index.js';
import react from 'file:///C:/Users/straz/Desktop/Private/Projects/LAF/site/node_modules/.pnpm/@vitejs+plugin-react-swc@3._c12225a894d282e3803123d7c8d5921b/node_modules/@vitejs/plugin-react-swc/index.mjs';
import { resolve } from 'node:path';
var __vite_injected_original_dirname =
  'C:\\Users\\straz\\Desktop\\Private\\Projects\\LAF\\site\\apps\\frontend\\v1';
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, 'lib/main.js'),
      name: 'frontend-v1',
      // the proper extensions will be added
      fileName: 'laf-site-frontend-v1',
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
    port: 3e3,
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
  plugins: [react()],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzdHJhelxcXFxEZXNrdG9wXFxcXFByaXZhdGVcXFxcUHJvamVjdHNcXFxcTEFGXFxcXHNpdGVcXFxcYXBwc1xcXFxmcm9udGVuZFxcXFx2MVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc3RyYXpcXFxcRGVza3RvcFxcXFxQcml2YXRlXFxcXFByb2plY3RzXFxcXExBRlxcXFxzaXRlXFxcXGFwcHNcXFxcZnJvbnRlbmRcXFxcdjFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3N0cmF6L0Rlc2t0b3AvUHJpdmF0ZS9Qcm9qZWN0cy9MQUYvc2l0ZS9hcHBzL2Zyb250ZW5kL3YxL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvbWFpbi5qcycpLFxuICAgICAgbmFtZTogJ2Zyb250ZW5kLXYxJyxcbiAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXG4gICAgICBmaWxlTmFtZTogJ2xhZi1zaXRlLWZyb250ZW5kLXYxJyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICAgICdyZWFjdC1yb3V0ZXItZG9tJzogJ1JlYWN0Um91dGVyRE9NJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICB3YXJtdXA6IHtcbiAgICAgIGNsaWVudEZpbGVzOiBbXG4gICAgICAgICcuL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3gnLFxuICAgICAgICAnLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4JyxcblxuICAgICAgICAnLi9zcmMvaG9va3MvdXNlRGV2aWNlV2lkdGgudHMnLFxuXG4gICAgICAgICcuL3NyYy9hc3NldHMvaWNvbnMvKi50c3gnLFxuXG4gICAgICAgICcuL3NyYy9jb25maWcvKi50cycsXG4gICAgICAgICcuL3NyYy91dGlscy8qLnRzJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCldLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJZLFNBQVMsb0JBQW9CO0FBQ3hhLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFGeEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxNQUFNO0FBQUE7QUFBQSxNQUVOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBLE1BR2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxNQUNuRCxRQUFRO0FBQUE7QUFBQTtBQUFBLFFBR04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2Isb0JBQW9CO0FBQUEsUUFDdEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFFBRUE7QUFBQSxRQUVBO0FBQUEsUUFFQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
