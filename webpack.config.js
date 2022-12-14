module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}