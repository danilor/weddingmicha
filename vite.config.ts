import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Change the output folder (e.g., to 'build')
    outDir: 'docs',

    // 2. Clear the folder before building (recommended if outputting outside the root)
    emptyOutDir: true,
  },
  base:'./',
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
})
