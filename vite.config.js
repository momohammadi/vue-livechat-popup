import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({ isProduction: true })],
  build: {
    lib: {
      entry: ['src/index.js'],
      name: 'VueLiveChatPopup',
      formats: ['es', 'iife'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
