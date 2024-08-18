module.exports = {
  preset: 'react-native',
  "setupFiles": ["<rootDir>/jest/setup.js"],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation)/|@react-navigation/.*|jsencrypt|react-navigation-.*|@react-navigation',
  ],

  moduleDirectories: ['node_modules', 'src', __dirname],
  setupFilesAfterEnv: [],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
    },
  },
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: [
    './node_modules',
    './coverage',
    './android',
    './ios',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
