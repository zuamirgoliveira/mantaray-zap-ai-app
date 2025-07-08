import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tauri } from 'vite-plugin-tauri'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tauri(),
    tailwindcss()
  ]
})
