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
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
