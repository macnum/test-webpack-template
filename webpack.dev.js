const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // injects styles in dev
      },
    ],
  },
  devServer: {
    watchFiles: ["src/**/*.{html,css,js}"],
  },
});
