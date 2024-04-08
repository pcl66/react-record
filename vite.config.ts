import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { svgsprites } from './src/vite_plugin/svgsprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgsprites()],
})
