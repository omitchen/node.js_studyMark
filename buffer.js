var buf = new Buffer(256);

len = buf .write("www.omitchen.com");
//写入缓冲区
console.log("写入字节数:"+len);
//从缓冲区读取数据
console.log(buf.toString("utf8",0,5));
//将 Buffer 转换为 JSON 对象
var json = buf.toJSON(buf);
console.log(json);	

//缓冲区合并
var buf1 = new Buffer('www.runoob.com ');
var buf2 = new Buffer("菜鸟教程");
var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());

//缓冲区比较
var result = buf2.compare(buf1);
console.log(result);
if(result < 0) {
   console.log(buf2 + " 在 " + buf1 + "之前");
}else if(result == 0){
   console.log(buf2 + " 与 " + buf1 + "相同");
}else {
   console.log(buf2 + " 在 " + buf1 + "之后");
}
//拷贝缓冲区
buf1.copy(buf2);
console.log(buf2.toString());

var buf4 = buf1.slice(0,3);
console.log(buf4.toString());
//缓冲区长度
console.log(buf1.length);