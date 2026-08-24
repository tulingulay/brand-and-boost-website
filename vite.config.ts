import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      // Alleen voor de client-build: in de SSR-build zijn react e.d.
      // extern en mag er geen vendor-chunk van gemaakt worden.
      output: isSsrBuild
        ? {}
        : {
            // React-runtime apart: contentwijzigingen breken de vendor-cache
            // dan niet (sluit aan op de immutable caching in netlify.toml).
            manualChunks: {
              vendor: ["react", "react-dom", "react-router-dom"],
            },
          },
    },
  },
  ssr: {
    // CommonJS-pakketten die de prerender (Node ESM) niet als named
    // imports kan laden, bundelen we mee in de server-build.
    noExternal: ["react-helmet-async"],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
