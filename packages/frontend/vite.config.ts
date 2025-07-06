import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import swc from "unplugin-swc";

export default defineConfig({
  plugins: [
    vue(),
    swc.vite({
      jsc: {
        parser: {
          syntax: "typescript",
          decorators: true,
        },
        target: "es2020",
        transform: {
          useDefineForClassFields: true,
        },
      },
      module: {
        type: "es6",
      },
      minify: false,
    }),
  ],
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: resolve(__dirname, "public/index.html"),
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
