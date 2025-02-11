import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test/', // замените на имя вашего репозитория
  build: {
    outDir: 'dist',
  },
});
