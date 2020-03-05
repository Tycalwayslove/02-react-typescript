const path = require("path");
module.exports = {
  mode: "production",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", "tsx"]
  },
  // entry: path.resolve(__dirname, "/src"),
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "bundle.js"
  // },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDom"
  }
};
