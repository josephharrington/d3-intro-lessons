module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'lib']
  }
};
