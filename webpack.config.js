var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },

    resolve: {
        // 必须加.
        // 入口文件有后缀了，这边第一个配置就要为''空，不然会组合jsxjs，导致找不到入口文件
        // 只能用webpack --display-error-details，显示详细的错误
        extensions: ['', '.js', '.jsx', '.json', '.html']        
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                // query: {
                //     presets: ['es2015','react']
                // }
            },
            {
                test: /\.(png|jpeg|jpg|eot)$/,
                loader: 'url?limit=50000',
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }
        ]
    },

    // use postcss-loader with version > 1.2.1
    // 如果大于1.2.1版本，必须在根路径下新建postcss.config.js, 里面module.exports = {}
    postcss: [
        require('autoprefixer')
    ],

    devServer: {
        quiet: true, // 不显示详细的打包细节
        contentBase: './build',
        port: 8080,
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    },

    devtool: 'source-map',

    plugins: [
        // 指定html入口文件
        new HtmlPlugin({
            template: path.resolve(__dirname, 'app/index.tmpl.html')
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        new OpenBrowserPlugin({
            url: 'http://127.0.0.1:8080'
        }),

        // 自定义：全局构建时变量
        new webpack.DefinePlugin({
            __DEV__: true
        }),
    ]
}