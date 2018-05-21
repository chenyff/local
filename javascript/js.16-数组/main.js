/*
 为什么会出现数组类型  为什么～～～～～
 因为好组织
 * 
 * 
 * 
 * */
var name1 = '陈宇飞';
var job1='开发';
var name2 = '大白';
var job2='看家';
var name3 = '二白';
var job3='拆家';

var name = [
	'陈宇飞',
	'大白',
	'二白'
];
var job = [
	'开发',
	'看家',
	'拆家'
]
//语法
//如何定义一个数组
//首先是中括号
[]
//里面的每一项叫元素
[12,23,34]
//元素类型不限
[
  2, 
  true,
  'a', 
  {}, 
  function() {}
]
//还能嵌套
[ 1, ['a', 'b', 'c']]
[[[[[[[[['yo']]]]]]]]] 

//获取元素
//每一个元素都有一个用于定位的索引 (index；也就是元素的身份证号，从0开始)

var 排排坐 = [
  'a', // 0 程序员是从0开始数的
  'b', // 1
  'c', // 2
  'd', // 3
  // ...
];
//知道索引就能获取元素
// 一维数组
var 排排坐 = ['a', 'b', 'c'];
排排坐[0] // 'a'
排排坐[1] // 'b'
排排坐[2] // 'c'

// 多维数组
var 各种排排坐 = [['a1', 'a2'], ['b1', 'b2'], ['c1', ['c2']]];
各种排排坐[0][0] // 'a1'
各种排排坐[1][0] // 'b1'
各种排排坐[2][0] // 'c1'

各种排排坐[0][1] // 'a2'
各种排排坐[1][1] // 'b2'
各种排排坐[2][1][0] // 'c2'
//通过.length获取数组的长度
[12,12,23].length   //3

//常用方法
push(新元素)  从末尾添加
var arr = [3, 4, 5];
arr.push(6); // 4 返回修改后的长度
console.log(arr); // [3, 4, 5, 6]

unshift(新元素) 从开头添加
var arr = [3, 4, 5];
arr.unshift(2); // 4 返回修改后的长度
console.log(arr); // [2, 3, 4, 5]

pop() 从末尾删
var arr = [3, 4, 5, 6];
arr.pop(); // 6 返回被删除的数
console.log(arr); // [3, 4, 5]

.shift() 从开头删
var arr = [2, 3, 4, 5];
arr.shift(); // 2 返回被删除的数
console.log(arr); // [3, 4, 5]

.reverse() 颠倒顺序
[1, 2, 3].reverse(); // [3, 2, 1]

.splice(从哪剪, 剪多长, 替换元素1, 替换元素2) 剪接
var 片儿 = ['a', 'b', '辣鸡1', '辣鸡2', 'c'];
// 从第3格开始剪，剪2格
片儿.splice(2, 2); // ["辣鸡1", "辣鸡2"] 返回减掉的东西
console.log(片儿); // ["a", "b", "c"]

// 注意，现在片儿已经剪成了['a', 'b', 'c']
// 从第2格开始剪，剪1格，进两个广告
片儿.splice(1, 1, '广告1', '广告2');
console.log(片儿); // ["a", "广告1", "广告2", "c"]

.forEach(回调函数) 迭代
['a', 'b', 'c'].forEach(function(每一条, 索引) { 
  console.log('第' + 索引 + '条：' + 每一条);
});
//------Console------
// 第0条：a
// 第1条：b
// 第2条：c

.filter(回调函数) 过滤器
通过你给他的条件返回一个新数组

var 旧数组 = [1, 2, 3, 4];
var 新数组 = 旧数组.filter(
  // 传入一个函数，每迭代一个元素就执行一次
  function(元素, 索引, 原始数组) {
    // 只要大于2的元素
    var 条件 = 元素 > 2;
    return 条件;
  }
);

console.log(新数组); // [3, 4]

every(回调函数) 每一条
每一条都满足你给的条件

var 满足 = [1, 2, 3].every(
  // 传入一个函数，每迭代一个元素就执行一次
  function(元素, 索引, 原始数组) {
    // 是否小于10
    var 条件 = 元素 < 10;
    return 条件;
  }
);
/*只有当所有条件都满足时才返回true*/
console.log(满足); // true

function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
