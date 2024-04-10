import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import { svgsprites } from './src/vite_plugin/svgsprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe(),
    svgsprites(),
  ],
})
