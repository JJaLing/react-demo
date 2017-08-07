var webpack = require('webpack');
var path = require('path')
var ROOT = path.resolve(__dirname)
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractCSS = new ExtractTextPlugin('stylesheets/[name]-one-[contenthash].css');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    devtool: "source-map",
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'actions': resolve('/src/redux/actions')
        }
    },
    devServer: {
        proxy: {
            '/restful': {
                target: 'http://uctest.eztalks.com:8080',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/restful': ''
                }
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.css']
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                include: /less/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        }
                    }, {
                        loader: 'less-loader'
                    }]
                })
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader'],
                include: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.DefinePlugin({
            'UCENV': JSON.stringify(process.env.UCENV)
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: ROOT + '/dist/index.html',
            template: ROOT + '/index.html',
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    ]
}