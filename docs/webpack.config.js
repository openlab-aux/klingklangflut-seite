const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// https://webpack.js.org/configuration/
module.exports = {
  mode: 'production',
  entry: {
    main: path.join(__dirname, '_webpack', 'main'),
  },
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: ['node_modules'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      { 
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: path.join('..', 'fonts'),
          name: '[name].[ext]',
        }
      }
    ],
  },
};
