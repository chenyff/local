function hi(){
	console.log("hi"+this.name);
}
//hi();
//hi.call();
//既然两个是一样的，那我何必用单词多的
//因为call可以改变this指向
var user = {
	name:'chenyufei'
}
var usertwo = {
	name:'chenxiaofei'
}
hi.call(user);
hi.call(usertwo);
//如果我的方法现在传参
function hi(name){
	console.log("hi"+name+"我是"+this.name);
}
hi('chenyufei');
hi.call(user,'chenyufeo');
hi.apply(user,['chenyufei']);
var hi2 = hi.bind(user);
hi2('aaa');
