var events = require('events'); 
var eventEmitter = new events.EventEmitter(); 

var listener1 = function listener1(){
	console.log("监听器listener1执行");
}
var listener2 = function listener2(){
	console.log("监听器listener2执行");
}

eventEmitter.addListener("connection",listener1);
//addListener(event, listener)为指定事件添加一个监听器到监听器数组的尾部
eventEmitter.on("connection",listener2);
//on(event, listener)为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
//listenerCount(emitter, event)返回指定事件的监听器数量。

console.log(eventListeners+"个监听器链接事件");

eventEmitter.emit("connection");
//emit(event, [arg1], [arg2], [...])按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false

eventEmitter.removeListener("connection",listener1);
//removeListener(event, listener)移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。

console.log("listener1不再受监听");
eventEmitter.emit("error");


//event是事件,就是connection,eventEmitter只是一个对象,可以对这个对象进行添加,删除事件,要设置监听是在实例化对象的EventEmitter()
//一个对象身上可以有最多可以有是个监听器

//继承EventEmitter
/*大多数时候我们不会直接使用EventEmitter,而是在对象中继承它,包括fs,net,http在内的,只要是支持事件响应的核心模块都是EventEmitter的之类*/
/*具有某个实体功能的对象实现时间符合语义,事件的监听和发射应该是一个对象的方式,其次JavaScript的对象机制都是基于原型的,支持部分多重继承,继承EventEmitter不会打乱对象原有的继承关系*/