import { resolve } from 'path';

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  }
};
