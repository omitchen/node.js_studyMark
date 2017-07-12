//pipe=管子
var fs = require("fs");
var readerStream = fs.createReadStream("input.txt");
var writerStream  = fs.createWriteStream("output.txt");
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
console.log("程序完成");