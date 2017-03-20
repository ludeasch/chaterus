var path = require('path');

module.exports = {
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react','es2015'],
              plugins:["transform-decorators-legacy"],
            }
          }
        ]

    },
    entry:{ home:"./home.js",
            groupChat:"./chat.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',

    },

};