export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // for css files: help jest to transform files with extension .css, .less, .sass, .scss
    '^.+\\.svg$': 'jest-transformer-svg', // for svg files: jest will substitute the imported svg file with the jest-transformer-svg module.
    // '^@(.*)$': '<rootDir>/src/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@pages(.*)$': '<rootDir>/src/pages/$1',
    '^@api(.*)$': '<rootDir>/src/api/$1',
    '^@routes(.*)$': '<rootDir>/src/routes/$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts/$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers/$1',
    '^@hocs(.*)$': '<rootDir>/src/hocs/$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@logics(.*)$': '<rootDir>/src/logics/$1',
    '^@services(.*)$': '<rootDir>/src/services/$1',
    '^@customTypes(.*)$': '<rootDir>/src/customTypes/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
    '^@context(.*)$': '<rootDir>/src/context/$1',
    '^@stories(.*)$': '<rootDir>/src/stories/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
