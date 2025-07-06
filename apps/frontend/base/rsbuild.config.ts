import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const defaultMeta = {
  charset: {
    charset: 'UTF-8',
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

export default defineConfig({
    plugins: [pluginReact()],
    
    html: {
        template: './index.html',

        title: 'LAF TEAM',
        favicon: './public/images/favicon.svg',
        
        meta: defaultMeta,
    },
    
    source: {
        entry: {
            index: './src/main.tsx',
        },
    },
});