const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin")

module.exports = {
  publicPath: './',
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new ImageminWebpWebpackPlugin()
    ]
  }
}