/*
 this
 * 
 * 
 * 
 * */
var user = {
	fname:'dabai',
	lname:'chen'
}
//console.log(user);
//console.log(user.lname+user.fname)
//封装成一个函数
var user = {
	fname:'dabai',
	lname:'chen',
	fullname:function(){
		return user.lname+user.fname;
	}
}
//console.log(user.fullname());
//改名 person
//换this
//声明一个变量等于full name;
//console.log(this);
//严格模式  use strict

//构造函数  
//function user(){
//	console.log(this);
//}
//user();
//new user();
//var person = new user();
//function user(){
//	this.name = 'dafeige';
//	this.age = 18;
//}

//感觉this用处不大，还容易搞混，是么
function hi(name){
	console.log(this);
	console.log(name);
	console.log("hi"+name);
}
var a = {
	name:'dabai'
}
var b = {
	name:'erbai'
}
a.yo = hi;
b.yo = hi;
a.yo('aaa');
