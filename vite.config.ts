// import * as fs from 'fs';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // https: {
    //   key: fs.readFileSync('../../localhost-key.pem'),
    //   cert: fs.readFileSync('../../localhost.pem'),
    // },
  },
  preview: {
    port: 5173,
    strictPort: true,
    // https:
    //   {
    //     key: fs.readFileSync('../../localhost-key.pem'),
    //     cert: fs.readFileSync('../../localhost.pem'),
    //   },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
