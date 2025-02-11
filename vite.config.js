import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: false, // Отключает наложение HMR ошибок на экране
    },
  },
});
