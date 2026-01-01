const path = require('path')
require("dotenv").config()
const webpack = require("webpack");

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
    publicPath: '/',
  },
  mode: 'development',
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-typescript"
            ]
          }
        }
      },
      {
        test: /\.js$/,  
        exclude: /node_modules/,
        use: 'babel-loader'    
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BASE_API_PUBLIC_URL": JSON.stringify(process.env.BASE_API_PUBLIC_URL),
      "process.env.BASE_API_PRIVATE_URL": JSON.stringify(process.env.BASE_API_PRIVATE_URL),
    })
  ],
  devServer: {
    static: './public',
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    watchFiles: ['src/**/*', 'public/**/*'],
  }
};