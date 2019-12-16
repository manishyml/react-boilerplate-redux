const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve, join } = require("path");
const webpack = require("webpack");
const moduleRules = [
  {
    // javascript
    test: /\.(js|jsx)$/,
    include: /src/,
    use: {
      loader: "babel-loader"
    }
  },
  {
    // css
    test: /\.css$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      }
    ]
  },
  {
    // less
    test: /\.less$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "style-loader",
        options: {
          injectType: "singletonStyleTag"
        }
      },
      {
        loader: "css-loader"
      },
      {
        loader: "less-loader",
        options: {
          paths: [resolve(__dirname, "src")]
        }
      }
    ]
  },
  {
    // fonts
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "app/fonts",
          publicPath: "/app/fonts/",
          sourceMap: true,
          convertToAbsoluteUrls: true
        }
      }
    ]
  },
  {
    // images
    test: /\.(png|svg|jpg|gif|ico)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "app/images",
          publicPath: "/app/images/",
          sourceMap: true,
          convertToAbsoluteUrls: true
        }
      }
    ]
  }
];
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: join(__dirname, "/src/index.html"),
    filename: "./index.html"
  })
];
module.exports = {
  entry: resolve(__dirname + "/src/index.js"),
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/",
    path: join(__dirname, "/dist/")
  },
  mode: "development",
  module: { rules: moduleRules },
  plugins,
  devtool: "no-source-map",
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    port: 8082,
    contentBase: join(__dirname, "/dist")
  }
};
