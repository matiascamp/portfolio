import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom','tailwindcss'],
          lucide: ['lucide-react'],
        }
      }
    },
    assetsDir: 'assets',
    minify: 'terser'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react','tailwindcss'],
  },
  preview: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    }
  }
})
