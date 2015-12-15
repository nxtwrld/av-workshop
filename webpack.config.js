var webpack = require('webpack');

module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    entry: './app/scripts/index.js',
    output: {
      path: __dirname,
      filename: 'index.js'
    },
    debug : isDev,
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-0']
          }
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'ractive'
        },
        {
          test: /\.json?$/,
          loader : 'json'
        }
      ]
    },
    plugins : [
      //new webpack.DefinePlugin({ __VERSION__: JSON.stringify(grunt.file.readJSON('package.json').version) }),
      //new webpack.optimize.DedupePlugin(),
      //new webpack.optimize.UglifyJsPlugin()
    ]
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}
