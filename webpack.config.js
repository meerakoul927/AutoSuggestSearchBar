const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // ----------------------------------------------------------
  // --- This property defines where the application starts ---
  //-----------------------------------------------------------
  entry:'./src/index.js',
  output:{
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  mode: 'production', // Set the mode to 'production'
  optimization: {
    usedExports: true, // Enable tree shaking
    minimize: true, // Enable minification
    minimizer: [new TerserPlugin()], // Use TerserPlugin for minification
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Replace with your Node.js server's URL
        changeOrigin: true, // Add this option to handle CORS
      },
    },
  },

 module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
           "css-loader",
           "sass-loader",
        ]
      },
    ]
  },
 plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    
  ]
}




