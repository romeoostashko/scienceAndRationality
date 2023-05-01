module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          src: './',
          components: './src/components',
          screens: './src/screens',
          asyncStorage: './src/asyncStorage',
          navigation: './src/navigation',
          store: './src/store',
          hooks: './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
