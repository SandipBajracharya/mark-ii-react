import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // core: {
  //   builder: 'storybook-builder-vite', // Use Vite as the builder
  // },
  // async viteFinal(config) {
  //   const { mergeConfig } = await import('vite');
  //   return mergeConfig(config, {
  //     plugins: [svgr()],
  //   });
  // },
};
export default config;
