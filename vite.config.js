import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // Updated import

export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.jpg'],plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Use the PostCSS plugin here
      ],
    },
  },
})