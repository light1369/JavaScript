//导入path模块
const path = require("path");
// 定义打包规则
moodule.exports = {
    //1.入口函数从哪里开始进行编译打包
    entry: "./src/main.js",
    //2.编译成功后把内容输出到哪里去
    output: {
        //2-1定义输出的指定目录__dirname当前项目根目录，产生一个dist文件目录
        path: path.resolve(__dirname, "./dist"),
        //2-2 合并的js文件储存在dist/bundule.js文件中
        filename: "bundle.js"
    },
    //css打包配置
    module: {
        rules: [{
            test: /\.css$/,//把项目所有的.css结尾的文件进行打包
            use: ["style-loader", "css-loader"]
        }]
    }
}