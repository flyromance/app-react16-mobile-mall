var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'), // 默认是脚本所处的目录
    entry: './app/index.js',
    output: {
        // path: './dist', // 2版本必须用绝对路径
        path: resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: [resolve('app')],
            use: 'babel-loader',
        },
        {
            test: /\.(png|jpeg|jpg|eot)$/,
            use: 'url-loader?limit=50000',
            // option: {
            //     query: {
            //         limit: 5000,
            //     }
            // }
        },
        {
            test: /\.less$/,
            // loader: 'style!css!postcss!less', // 不能省略loader，不能用!
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('autoprefixer'),
                    ]
                }
            }, 'less-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }]
    },

    // use postcss-loader with version > 1.2.1
    // 如果大于1.2.1版本，必须在根路径下新建postcss.config.js, 里面module.exports = {}
    // postcss: [
    //     require('autoprefixer')
    // ],
    plugins: [
        // 指定html入口文件
        new HtmlWebpackPlugin({
            template: './app/index.tmpl.html',
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://127.0.0.1:8080'
        }),

        // 自定义：全局构建时变量
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(process.env.NODE_ENV === 'development' ? true : false)
        }),
    ],
    resolve: {
        // 入口文件有后缀了，这边第一个配置就要为''空，不然会组合jsxjs，导致找不到入口文件
        extensions: ['.js', '.jsx'], // webpack1.0版本必须加 "", 2版本后加“”会报错
        // modules: ['./app', 'node_modules'], // webpack1.0版本为modulesDirectories
        alias: {
            '@': resolve('app'), // 必须用绝对路径
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: "http://127.0.0.1:8002",
                secure: false // 不加不能跨越
            }
        },
        quiet: true, // 不显示详细的打包细节
        contentBase: './dist',
        historyApiFallback: true, // 不跳转
        port: 8080,
        inline: true, // 实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    },
    devtool: 'source-map',
}