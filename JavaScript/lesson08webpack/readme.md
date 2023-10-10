安装webpack:
     npm install  -g webpack webpack-cli

1：创建一个node.js项目  npm init -y
2: 创建一个src目录
3：在src存放两个需要合并的util.js和common.js
4: 准备一个入口文件 main.js ,其实就是模块集中进行引入

// JS打包
5：在根目录下定义个webpack.config.js文件配置打包规则
6：执行webpack查看效果 ：webpack

//CSS打包
7: 安装style-loader和css-loader插件: npm install style-loader css-loader
    1.css-loader是将css装载到javascript
    2.style-loader是让javascript认识css

8: 在webpack.config.js配置css打包规则


webpack监听：
//修改编译后的代码，会制动编译打包

    webpack -w

