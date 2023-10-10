/**
 * 修改node中modules和cache位置
 * 
 * // 该命令将node_modules的位置设置到 "D:\soft\nodejs\node_modules"目录下：
        npm config set prefix "D:\soft\nodejs\node_modules"
        
    // 该命令将cache的位置设置到 "D:\soft\nodejs\node_modules\npm_cache"目录下：
        npm config set cache "D:\soft\nodejs\node_modules\npm_cache"

    // 局部安装，插件在执行命令的目录下
        npm install mysql 

    // 全局安装,插件在配置的node_modules中
        npm install mysql -g

 *  */


//1:导入mysqsl 依赖包，mysql属于第三方模块，类似java.sql
const { log } = require("console");
var mysql = require("mysql");
//2:创建一个mysql的Connection对象
//3：配置数据连接信息
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "123",
    database: "test"
});
//4：开辟连接
connection.connect();
//5:执行curd
connection.query("select * from user", function (error, request, fields) {
    //如果查询出错，直接抛出
    if (error) throw error;
    //查询成功
    console.log("results=", request);
});
//6:关闭连接
connection.end();
//运行 node 3.操作mysql.js  查看效果

