module.exports = {
  entry: './main.js',
  output: {
        path: './dist',
        filename: 'bundle.js'
    },
  devServer: {
    inline: true,
    port: 8080,
    proxy: {
    '/projects/*': 'http://localhost:80/' // <- backend
      }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
