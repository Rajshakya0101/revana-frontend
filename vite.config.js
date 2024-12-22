import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // Optional: Visualizer to analyze bundle size
    visualizer({
      filename: './stats.html',
      open: true, // Automatically open the visualizer report in the browser
    }),
  ],
  base: "/revana-frontend/",
  build: {
    // Suppress chunk size warning by increasing the limit (optional)
    chunkSizeWarningLimit: 1000, // Default is 500 KB
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries into their own chunk
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
