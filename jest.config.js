module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation)/|@react-navigation/.*|jsencrypt|react-navigation-.*|@react-navigation',
  ],

  moduleDirectories: ['node_modules', 'src', __dirname],
  setupFilesAfterEnv: [],
  // collectCoverageFrom: ['<rootDir>/src/**/*.tsx'],
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
