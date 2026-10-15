import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-travel-app/', // ⚠️ 指定 GitHub Pages 的儲存庫名稱子路徑
})