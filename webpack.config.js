module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./index.jsx",
    html: "./index.html"
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
    ],
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}
