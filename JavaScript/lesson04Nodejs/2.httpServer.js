//导入模块require 就类似于import java.io
const http = require('http');
//1：创建一个httpserver服务
http.createServer(function (request, response) {
    //浏览器怎么认识hello server?
    response.writeHead(200, { 'Content-type': 'text/html' });//告诉浏览器
    //以text-plain去解析hell server 这段数据。
    //给浏览器输出内容
    response.end("<strong>hello server!!!</strong>");
}).listen(8888);

console.log("你启动的服务是：http://localhost:8888启动成功！");
//2：监听端口8888
//3：启动运行服务 弄得httpsserver.js
//4:在浏览器访问http://localhost:8888
