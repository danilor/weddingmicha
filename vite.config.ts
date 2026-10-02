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
  server: {
    proxy: {
      // Intercepts all requests starting with /api
      '/api': {
        target: 'http://localhost:3000', // Your Node.js backend port
        changeOrigin: true,             // Changes the origin of the host header to the target URL
        secure: false,                  // Set to false if using self-signed SSL certs
      },
    },
  },
  base:'./',
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
})
