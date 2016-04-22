var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './index.js',
        vendor: ['jquery', 'lodash']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('css!stylus')
            },
            {
                test: /\.png/,
                loader: 'file'
            }
        ]
    }
};
