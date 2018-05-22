/*
 为什么会有这种数据类型
 * 因为有时候我们需要明确的说明一个量只有壳没有瓤，也就是空
 * 如何使用
 * null只有在需要明确指定（或清空）一个量时才使用，如删除用户介绍：user.intro = null。
 * null只能手动设置，JS本身不会将任何量的默认值设为null
 * 
 * typeof null  会返回object
 * 为什么会这样
 * js设计者的锅，工作没做好，仅此而已
 * 那为什么一直都不改？
 * Web生态中已经有太多代码依赖着这个bug，不敢修，只能错下去
 * */
var a = {
	name:'chenyufei'
}
a.name = null;
console.log(a);
