import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/proyecto3/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        parte1: resolve(__dirname, 'parte1.html'),
      },
    },
  },
})