import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all', { prefix: 'REACT_APP_' })],
  resolve: {
    // also defined in tsconfig.json
    alias: {
      '@api': resolve(root, 'api'),
      '@components': resolve(root, 'components'),
      '@pages': resolve(root, 'pages'),
      '@routes': resolve(root, 'routes'),
      '@layouts': resolve(root, 'layouts'),
      '@helpers': resolve(root, 'helpers'),
      '@hocs': resolve(root, 'hocs'),
      '@hooks': resolve(root, 'hooks'),
      '@logics': resolve(root, 'logics'),
      '@services': resolve(root, 'services'),
      '@customTypes': resolve(root, 'types'),
      '@utils': resolve(root, 'utils'),
      '@context': resolve(root, 'context'),
      '@stories': resolve(root, 'stories'),
      '@*': resolve(root, ''),
    },
  },
});
