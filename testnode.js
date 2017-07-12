var http = require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	res.write("<h1>NODE.js</h1>");
	res.write("<p>hello world</p>");
	res.end("<p>beyondeweb.Content</p>");
}).listen(3000);
console.log("http server is listening at port 3000");