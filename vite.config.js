import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Корень сайта
  server: {
    hmr: {
      overlay: false,
    },
  },
});
