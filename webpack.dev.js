const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const html = [
    "index",
    "onas",
].map(
  (item) =>
    new HtmlWebpackPlugin({
      template: `./src/${item}.html`,
      filename: `${item}.html`,
    })
);
module.exports = {
  entry: "./src/app.js",
  devtool: "inline-source-map",
  output: {
    filename: "./src/index.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    open: true,
    devMiddleware: {
      index: true,
      writeToDisk: true,
    },
    hot: true,
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "ie 11" }]],
          },
        },
      },
      {
        test: /\.html$/i,
        exclude: /src\templates/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/style.[contenthash].css",
    }),

    new CleanWebpackPlugin(),

    ...html,

    new CopyPlugin({
      patterns: [{ from: "./src/gfx", to: "src/gfx" }],
    }),
  ],
};
