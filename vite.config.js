import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-travel-app/', // 修改為您的 GitHub 儲存庫名稱
})