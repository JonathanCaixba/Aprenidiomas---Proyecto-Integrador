import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        courses: resolve(__dirname, "courses.html"),
        about: resolve(__dirname, "about_us.html"),
        community: resolve(__dirname, "community.html"),
        contact: resolve(__dirname, "contact_us.html"),
        signup: resolve(__dirname, "signup.html"),
        work_with_us: resolve(__dirname, "work_with_us.html"),
        cart: resolve(__dirname, "cart.html"),
      },
    },
  },
});
