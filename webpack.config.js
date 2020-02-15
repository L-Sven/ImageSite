var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    disableHostCheck: true
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/react"]
            }
          }
        ]
      },
      {
        enforce: "pre",
        test: /\js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        include: "/src/css",
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
