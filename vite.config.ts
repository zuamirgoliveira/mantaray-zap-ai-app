import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tauri } from 'vite-plugin-tauri'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tauri()],
    
})
