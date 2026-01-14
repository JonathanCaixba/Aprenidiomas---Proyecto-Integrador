import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/views/about_us.html'),
        community: resolve(__dirname, 'src/views/community.html'),
        contact: resolve(__dirname, 'src/views/contact_us.html'),
      },
    },
  },
})