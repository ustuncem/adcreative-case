import path from 'path';

import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '#components': path.resolve(__dirname, './src/components'),
      '#constants': path.resolve(__dirname, './src/constants'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#services': path.resolve(__dirname, './src/services'),
      '#utils': path.resolve(__dirname, './src/utils'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
