/* global require */
module.exports = {
  extends: [
    // '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'jest',
    'ft-flow',
    'react-hooks',
    'react',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        quotes: [2, 'single'],
        // semi: ['error', 'never'],
        'comma-dangle': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        curly: ['error', 'multi-line'],
        radix: 'off',
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            // multiline: 'first',
            ignoreCase: false,
            noSortAlphabetically: false,
            reservedFirst: true,
            locale: 'auto',
          },
        ],

        'react/no-unstable-nested-components': ['off'],
      },
    },
  ],
  root: true,
};
