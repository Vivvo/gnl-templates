const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './assets/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [ 'script-loader' ]
      // },
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'},
          {loader: "postcss-loader"},
          {loader: "resolve-url-loader"},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",

            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    hot: true,

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),

    new HtmlWebPackPlugin({
      template: './pages/index.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/create-account.html',
      filename: './create-account.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/reset-password.html',
      filename: './reset-password.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/reset-password-confirmation.html',
      filename: './reset-password-confirmation.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/dashboard.html',
      filename: './dashboard.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/notifications-main.html',
      filename: './notifications-main.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/profile.html',
      filename: './profile.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/service-add.html',
      filename: './service-add.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/service-onboard.html',
      filename: './service-onboard.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/service-card-back.html',
      filename: './service-card-back.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/mrd-service-linked.html',
      filename: './mrd-service-linked.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/mrd-service-unlinked.html',
      filename: './mrd-service-unlinked.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/mcp-service-linked.html',
      filename: './mcp-service-linked.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/mcp-service-unlinked.html',
      filename: './mcp-service-unlinked.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/mcp-service-linked-no-reminders.html',
      filename: './mcp-service-linked-no-reminders.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/wcp-service-unlinked.html',
      filename: './wcp-service-unlinked.html',
    }),

    new HtmlWebPackPlugin({
      template: './pages/wcp-service-linked.html',
      filename: './wcp-service-linked.html',
    }),

  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
