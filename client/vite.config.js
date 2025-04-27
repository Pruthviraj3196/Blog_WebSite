// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

  export default defineConfig({
    server: {
      host: '0.0.0.0',
      port: 4562,
      allowedHosts: ['blog-website-1-j0n3.onrender.com'],
      proxy: {
        '/api': {
          target: "https://blog-website-d8oe.onrender.com",
          changeOrigin: true,
          secure: false,
        },
      },
        
    },
    plugins: [react()],
});
