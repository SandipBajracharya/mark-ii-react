module.exports = {
  parser: '@typescript-eslint/parser', // for eslint to parse typescript
  parserOptions: {
    project: 'tsconfig.json', // for eslint to parse typescript
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  env: { browser: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '!.storybook'],
  settings: { react: { version: '18.2' } },
  rules: {
    'react/jsx-no-target-blank': 'off',
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // 'comma-dangle': ['error', { objects: 'always' }],
  },
};
