import { defineConfig } from "vite";
import type { ViteReactSSGOptions } from "vite-react-ssg";
import react from "@vitejs/plugin-react";
import path from "path";

const ssgOptions: ViteReactSSGOptions = {
  formatting: "none",
  crittersOptions: false,
  script: "async",
  dirStyle: "nested",
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions,
});
