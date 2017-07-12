/*function say(world){
	console.log(world);
}
function execute(someFunction,value){
	someFunction(value);
}
execute(say,"hello");*/
//一个函数可以作为另一个函数的参数
/*把 say 函数作为execute函数的第一个变量进行了传递。这里返回的不是 say 的返回值，而是 say 本身
这样一来， say 就变成了execute 中的本地变量 someFunction ，execute可以通过调用 someFunction() （带括号的形式）来使用 say 函数。
当然，因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。*/

//方法一
/*var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("hello world");
	response.end();
}).listen(8888);*/

//方法二

var http = require("http");
function onRequest(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("createServer");
	//服务器暂时不支持中文，内容不支持热更新，必须重新启动服务器
	response.end();
}

http.createServer(onRequest).listen(7000);