import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/parking-visualization": path.resolve(__dirname, "./src/parking-visualization"),
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      onwarn(warning, warn) {
        // Suprimir advertencias específicas de resolución
        if (warning.code === 'MODULE_NOT_FOUND') return;
        warn(warning);
      }
    }
  },
  optimizeDeps: {
    include: [
      'zod',
      'react-hook-form',
      '@hookform/resolvers/zod'
    ]
  }
}));
