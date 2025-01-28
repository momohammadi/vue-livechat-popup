import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({ isProduction: true })],
  build: {
    lib: {
      entry: new URL('src', import.meta.url).pathname, // مسیر به جای require('path')
      name: 'VueLiveChatPopup',
      formats: ['es', 'cjs', 'iife'],
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
