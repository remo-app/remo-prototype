import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// console.log('hello',path.resolve())
// const __dirname = path.resolve()

const projectRoot = path.resolve(__dirname);
console.log(projectRoot)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, './src'),
    },
  }
})
