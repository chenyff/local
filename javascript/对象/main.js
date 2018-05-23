/*
 对象
 * 为什么会出来对象   因为好组织
 * 举个🌰
 * 
 * 
 * 
 * 
 * */
//第一种写法
 var name = '陈宇飞';
 var dogname = '大白';
 var personage = 18;
 var dogage = 0.4;
 var personjob = '前端开发';
 var dogjob = '护卫';
 
var person = {
	name:'陈宇飞',
	age:18,
	job:'前端开发'
}
var dog = {
	name:'大白',
	age:0.3,
	job:'护卫'
}
//对象中还可以嵌套对象
var dog = {
	name:'大白',
	age:0.3,
	job:'护卫',
	server:{
		name:'陈宇飞',
		sex:'男'
	}
}
//定义对象
var 对象 = {
	
}
//左边是键(key，或者叫属性名)右边是值(value)，每一组用英文逗号隔开
//键名一般使用英文和数字，其实使用任何字符都可以，只不过当键名中有空格和特殊字符是外部需要加引号包住
{
  'yo yo yo': 'Mu Ha Ha'
}
//获取对象中的属性
//可以使用.来获取属性
var obj = {
  a: 1
}
obj.a // 1
//嵌套的对象也没问题
var obj = {
  a: 1,
  b: 2,
    c: {
      c1: 666
    }
}

obj.c.c1 // 666

//如果有奇葩的键名咋办
var obj = {
  'a b 😷': 'mmp'
}
//奇葩的键名直接用.a b 😷取值会报错，我们可以用另一种方式来取值

obj['a b 😷'] // 'mmp'

//这种方式同样也适用于一些动态的键名
var obj = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}

function get_val(id) {
  var key_name = 'key' + id; // 此处将id与'key'拼接在了一起
  return obj[key_name];
}

get_val(1); // "val1"

//对象中的数据类型有限制吗？
没有，以下的键值都是合法的

var obj = {
  a: [1], // 数组
  b: {}, // 对象
  c: 1, // 数字
  d: true, // 布尔值
  e: 'yo', // 字符串
}

//声明之后还能新建么
var obj = {};
obj.a = 1; 
console.log(obj) // {a: 1}

对象中的键名可以重复吗？
不可以。后一个会覆盖前一个。