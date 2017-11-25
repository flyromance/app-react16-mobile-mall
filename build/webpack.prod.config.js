var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "app": path.resolve('./app/index.jsx'),
        vendor: [
            'react', 'react-dom', 'react-addons-perf', 'react-addons-pure-render-mixin'
        ]
    },

    output: {
        path: path.resolve('./build'),
        filename: '[name].[chunkhash:8].js',
        publicPath: '/',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less'),
                // loader: ExtractTextPlugin.extract({fallback: 'style', use: 'css!postcss!less'}), // 必须结合webpack2.0使用
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss'),
                // loader: ExtractTextPlugin.extract({fallback: 'style', use: 'css!postcss'}),
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'url?limit=5000&name=/img/[name].[chunkhash:8].[ext]'
            }
        ]
    },

    postcss: [
        require('autoprefixer')
    ],

    plugins: [
        new webpack.BannerPlugin("Copyright by j-fanlong@360.cn."),

        new HtmlPlugin({
            template: 'app/index.tmpl.html'
        }),

        // 把css文件从js文件中分离开
        new ExtractTextPlugin('[name].[chunkhash:8].css'),

        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            },
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),

        // 为组件分配ID：通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // webpack2.0 自动使用这个功能
        new webpack.optimize.OccurenceOrderPlugin(),

        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        // 抽取公共的js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash:8].js'
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

}
