import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {},
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
