const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const html = [
  "index",
  "onas",
].map(
  (item) =>
    new HtmlWebpackPlugin({
      template: `./src/${item}.html`,
      filename: `./views/${item}.html`,
    })
);
module.exports = {
  entry: "./src/app.js",
  //devtool: "inline-source-map",
  output: {
    filename: "public/app.[contenthash].js",
    path: path.resolve(__dirname, "./production"),
  },
  node: {
    global: false,
    __filename: 'mock',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
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
            presets: [["@babel/preset-env"]],
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
      filename: "./public/style.[contenthash].css",
    }),

    new CleanWebpackPlugin(),

    ...html,

    new CopyPlugin({
      patterns: [
        {from: "./src/gfx", to: "public/gfx" },
        {from: "./server_config.js", to: "server.js" }
      ],
    }),
  ],
};
