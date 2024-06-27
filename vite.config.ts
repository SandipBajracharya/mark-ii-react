import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // also defined in tsconfig.json
    alias: {
      '@components': resolve(root, 'components'),
      '@pages': resolve(root, 'pages'),
      '@routes': resolve(root, 'routes'),
      '@layouts': resolve(root, 'layouts'),
      '@helpers': resolve(root, 'helpers'),
      '@hocs': resolve(root, 'hocs'),
    },
  },
});
