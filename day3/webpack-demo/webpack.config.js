module.exports={
    // 配置入口文件
    entry: './main.js',
    // 配置入口文件输出位置
    output: {
        path:__dirname,
        filename:'build.js'
    },
    // 配置模块加载器
    module: {
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};