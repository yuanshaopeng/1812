const webpack = require("webpack")//引入本地webpack模块
const HtmlWebpackPlugin = require("html-webpack-plugin");//创建html模板插件
const CleanWebpackPlugin = require("clean-webpack-plugin");//清除上一次的打包残余插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")//js与css分离打包插件
module.exports = {
    //指定打包的入口文件
    entry:__dirname+"/src/main.js",
    //指定输出文件地址及名称
    output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
    },
    //建立一个本地服务
    devServer:{
        host:"localhost",
        port:8080,
        open:true,
        hot:true,//开启热加载
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:"babel-loader",
            exclude:/node_modules/ //排除打包文件
        },{
            test:/\.css$/,
            use:["style-loader",MiniCssExtractPlugin.loader,"css-loader"]
        },{
            test:/\.scss$/,
            use:["style-loader",MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
        },{
            //打包图片
            test:/\.png$/,
            loader:"file-loader"
        }]
    },
    //调错工具
    //开发环境下使用eval-source-map 
    //发布环境下使用eval
    devtool:"eval-source-map",//添加源码映射
    plugins:[
        //热加载
        new webpack.HotModuleReplacementPlugin(),//引入热加载模块，
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:__dirname+"/src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name]-buddle.css"
        })
    ]
}