import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  entry: {
    main: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js']
  }
};

export default config;
