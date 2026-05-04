import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

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
  build: {
    rolldownOptions: {
      output: {
        manualChunks: (id: string) => {
          if (!id.includes("node_modules")) return;
          if (id.includes("@radix-ui")) return "vendor-radix";
          if (id.includes("framer-motion")) return "vendor-framer";
          if (id.includes("recharts")) return "vendor-recharts";
          if (id.includes("@supabase")) return "vendor-supabase";
          if (
            id.includes("react-dom") ||
            id.includes("scheduler") ||
            id.includes("/react/") ||
            id.includes("react-router")
          ) {
            return "vendor-react";
          }
        },
      },
    },
  },
});
