import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import { resolve } from 'path'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        entry: './electron/main.ts'
      },
      {
        entry: './electron/preload.ts'
      }
    ])
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  }
})
