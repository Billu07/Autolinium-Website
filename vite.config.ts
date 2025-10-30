import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Output directory
    outDir: "dist",

    // Generate source maps for production debugging
    sourcemap: false,

    // Minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
      format: {
        comments: false,
      },
    } as any, // TypeScript workaround for Terser options

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Rollup options for code splitting
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "animation-vendor": ["framer-motion"],
          "three-vendor": ["three", "vanta"],
          "particles-vendor": ["react-tsparticles", "tsparticles-slim"],
        },

        // Asset file names
        assetFileNames: (assetInfo) => {
          // Add null check for assetInfo.name
          if (!assetInfo.name) {
            return "assets/[name]-[hash][extname]";
          }

          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];

          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },

        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },

    // CSS code splitting
    cssCodeSplit: true,

    // Asset inline limit (4kb)
    assetsInlineLimit: 4096,

    // Report compressed size
    reportCompressedSize: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
    exclude: ["three", "vanta"],
  },

  // Server configuration for development
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
  },

  // Preview server configuration
  preview: {
    port: 4173,
    host: true,
    cors: true,
  },

  // CSS options
  css: {
    devSourcemap: true,
  },
});
