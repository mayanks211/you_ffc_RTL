import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 👈 Tells Vitest to use your jsdom package
    setupFiles: './src/setupTests.js', // 👈 Runs your matcher configurations
  },
});