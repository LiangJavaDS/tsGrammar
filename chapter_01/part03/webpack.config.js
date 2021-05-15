const path = require('path')

// 引入html插件，生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件，打包前清空之前打包的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// webpack中所有的配置信息都应该写在下方
module.exports = {
    // 入口文件
    entry: "./src/index.ts",
    output: {
        // 打包文件目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: 'bundle.js',
        // 告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false
        }
    },

    mode: 'development',
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置预定义的环境
                        options: {
                            // 设置兼容的浏览器
                            presets: [
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息 
                                    {
                                        // 兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方式,"usage"按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },//新语法转为旧语法
                    'ts-loader'//ts转为js
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '这是一个自定义的title',
            template: './src/index.html'
        })
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}