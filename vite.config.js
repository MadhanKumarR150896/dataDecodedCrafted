import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        search: resolve(__dirname, "search.html"),
        about: resolve(__dirname, "about.html"),
        post: resolve(__dirname, "post.html"),
      },
    },
  },
  server: {
    port: 5173,
  },
});
