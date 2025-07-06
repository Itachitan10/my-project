import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  server :{ 
      port: 3000,
    base : process.env.VITE_BASE_PATH ||'/itan_ramen_shop1'
  }
})
