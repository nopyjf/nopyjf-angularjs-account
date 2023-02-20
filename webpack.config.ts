import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import 'webpack-dev-server';

const config: Configuration = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    base: './src/app/main.css'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].css'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/typescript']
            }
          }
        ]
      },
      {
        test: /\.html$/,
        exclude: /(public)/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true
  }
};

export default config;
