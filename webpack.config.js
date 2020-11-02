
const path = require('path')
const webpack = require('webpack')
const html = require('html-webpack-plugin')

var fs = require('fs');

var dir = fs.realpathSync(process.cwd());

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        include: [
          path.resolve(dir, 'node_modules'),
          path.resolve(dir, 'src')
        ],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },      
      {
        test: /\.css$/,
        include: [
          path.resolve(dir, 'node_modules'),
          path.resolve(dir, 'src')
        ],
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  resolve: {
    modules: [ 'src', 'node_modules' ],
    extensions: [ '.js' ],
    symlinks: false,
  },
  plugins: [
    new html({
      meta: {
        charset: 'utf-8',
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  }
};

