module.exports = {
    entry: {
      index: './src/index.js',
      balkony: './src/balkony.js',
      kuhni: './src/kuhni.js'
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
    },
  };