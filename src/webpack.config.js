import { resolve as _resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
};
export const module = {
  rules: [
    {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        
      },
    },
  ],
};
export const resolve = {
  extensions: ['.js', '.jsx'],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];
export const devServer = {
  static: join(__dirname, 'public'),
  compress: true,
  port: 3000,
};
