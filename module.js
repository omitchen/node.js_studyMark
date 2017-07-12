var Hello = require('./module_hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 
//模块接口的唯一变化是使用module.exports = Hello代替了exports.world = function(){}。在外部引用该模块时，其接口对象就是要输出hello对象本身，而不是原先的exports