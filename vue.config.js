const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin")

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new ImageminWebpWebpackPlugin()
    ]
  }
}