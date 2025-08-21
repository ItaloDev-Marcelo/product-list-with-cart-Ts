import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   test: {
    globals: true, // permite usar describe/test/expect sem importar
    environment: "jsdom", // simula navegador (necessário p/ React)
    setupFiles: "./src/setupTests.ts", // opcional (configs extras)
  },
})
