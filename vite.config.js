import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {  
        target: 'http://localhost:8000',
      },
      '/aichemy_development_server': {  
        target: 'https://d22hvcpp22yvs6.cloudfront.net',
      },
    }
  },  
})
