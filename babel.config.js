// const alias = {
//   '@navigation': './src/navigation/',
//   '@screens': './src/screens/',
//   '@/utils/themes': './src/utils/themes',
//   '@utils': './src/utils/',
//   '@assets': './src/assets/',
//   '@component': './src/component/',
//   '@config': './src/config/',
//   '@slice': './src/slice/',
// };
const alias = {'^@/(.+)': './src/\\1'};
const extensions = ['.android.js', '.ios.js', '.js', '.json', '.native', 'jsx'];
const root = ['./'];
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {root, alias, extensions},
      '@babel/plugin-transform-runtime',
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-private-property-in-object',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-syntax-jsx',
  ],
};
