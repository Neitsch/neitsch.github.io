/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // automock: false,
  // bail: 0,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/generated/**',
      '!*.{js,ts}',
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
      "/node_modules/",
      "/.next/",
      "/out/",
      "/coverage/",
  ],
  coverageProvider: "babel",
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],
  // coverageThreshold: undefined,
  errorOnDeprecated: true,
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)",
  ],
  testPathIgnorePatterns: [
      '<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/out/'
  ],
    transform: {
        /* Use babel-jest to transpile tests with the next/babel preset
           https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
};
