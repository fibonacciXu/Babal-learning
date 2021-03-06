const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  // entry: ["@babel/polyfill", "./index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
