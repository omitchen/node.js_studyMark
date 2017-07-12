function Hello(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	};
	this.sayHello = function(){
		console.log("Hello"+name);
	};
};
module.exports = Hello;
//node提供了exports和require俩种对象，其中exports是模块公开的接口，require用于从外部获取一个模块的接口，既所获取模块的exports对象