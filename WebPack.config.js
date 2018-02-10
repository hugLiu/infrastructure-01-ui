var webpack = require("webpack")

module.exports = {
    entry: {
        //正式包
        //soUI: './soUI.js',
        //开发用包
        tree: './tree.js',
        //提供模块的包
        //soUIMod: './soUIMod.js'
    },
    output: {
        path: './Assets/js',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)/,
                loader: 'url-loader?limit=20480'
                    //loader: 'file?name=../../Assets/demo/font/[hash].[ext]'
            },
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'
            // }, 
            // {
            //     test: /\.less$/,
            //     loader: 'style!css!less'
            // },
            // { 
            //     test: /\.(png|jpg)$/, 
            //     loader: 'url?limit=25000' 
            // },
            //图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=81920'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": 'jquery'
        })
    ]
}