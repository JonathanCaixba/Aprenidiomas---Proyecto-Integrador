import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/views/about_us.html'),
        community: resolve(__dirname, 'src/views/community.html'),
        contact: resolve(__dirname, 'src/views/contact_us.html'),
        signup: resolve(__dirname, 'src/views/signup.html'),
        work_with_us: resolve(__dirname, 'src/views/work-with-us.html'),
        courses: resolve(__dirname, "src/views/courses.html"),
      },
    },
  },
  server: {
    proxy: {
      '^/about': {
        target: 'http://localhost:5173',
        rewrite: () => '/src/views/about_us.html',
      },
      '^/community': {
        target: 'http://localhost:5173',
        rewrite: () => '/src/views/community.html',
      },
      '^/contact': {
        target: 'http://localhost:5173',
        rewrite: () => '/src/views/contact_us.html',
      },
      '^/courses': {
        target: 'http://localhost:5173',
        rewrite: () => '/src/views/courses.html',
      },
    },
  },
});
