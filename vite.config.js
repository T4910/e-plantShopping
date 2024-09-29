import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",  // For local preview, set base to "/"
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html',  // Explicitly set the entry point
    },
  },
  root: '.',  // Ensure Vite looks in the root for index.html
  optimizeDeps: {
    include: ['react', 'react-dom', '@reduxjs/toolkit', 'react-redux'],
  },
})
y