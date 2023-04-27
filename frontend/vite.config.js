import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    alias: {
      // eslint-disable no-undef
      '@': path.resolve(__dirname, './src'),
      //eslint-enable no-undef
    },
  },
  plugins: [react()],
});
