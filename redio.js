var http  = require("http");
http.createServer(function(request,response){
	//发送http头部
	//http状态值:200:ok
	//内容类型:text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("hello world\n");
	//调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号
}).listen(8000);
console.log("server running at http://127.0.0.1:8000/");