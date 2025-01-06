import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "./", // Ensures relative paths in the output
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
       
        target: 'https://printease1-kpsy.onrender.com', // Your backend URL
        changeOrigin: true,  // Ensures the request is proxied correctly
        secure: false,       // Set to true if you're using HTTPS
      },
    },
  },
});
