import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";


// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
      react(),
      tailwindcss(),
      ViteImageOptimizer({
          test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
          png: {
              quality: 85,
          },
          jpeg: {
              quality: 85,
          },
          jpg: {
              quality: 85,
          },
          tiff: {
              quality: 85,
          },
      }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
