var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'app')],
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()]
}

//u need to install css-loader,style-loader,bable-loader