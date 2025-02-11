import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test/', // Указано название репозитория
  server: {
    hmr: {
      overlay: false,
    },
  },
});
