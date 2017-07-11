var webpack = require('webpack');
var path = require('path')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
    devtool: "cheap-eval-source-map",
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {}
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.css']
    },
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'babel-loader'
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
}