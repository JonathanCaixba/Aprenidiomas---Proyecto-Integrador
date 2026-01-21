import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        courses: resolve(__dirname, 'src/views/courses.html'),
        about: resolve(__dirname, 'src/views/about_us.html'),
        community: resolve(__dirname, 'src/views/community.html'),
        contact: resolve(__dirname, 'src/views/contact_us.html'),
        signup: resolve(__dirname, 'src/views/signup.html'),
        work_with_us: resolve(__dirname, 'src/views/work-with-us.html'),
        cart: resolve(__dirname, 'src/views/cart.html'),
        TyC: resolve(__dirname, 'src/views/TyC.html'),
      },
    },
  },
})
