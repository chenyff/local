什么是正则表达式
正则表达式描述了一种字符串匹配的模式，可以用来
检查一个字符串是否含有某种字符、
将匹配的子串做替换、
或者从某个字符串中取出符合某个条件的子串等。

大白话：处理字符串的，我们可以用它来处理一些复杂的字符串。

正则表达式的创建方式
1.字面量创建方式  var reg = /pattern/flags
2.实例创建方式   var reg = new RegExp(pattern,flags);
pattern:正则表达式
flags:标识（修饰符）
标识主要包括：
1.i 忽略大小写匹配
2.m 多行匹配，即在到达一行文本末位时还会继续寻找下一行中是否有与正则匹配的项
3.g 全局匹配 模式应用于所有的字符串，而非在找到第一个匹配项时停止

字面量创建方式和构造函数创建方式的区别
1.字面量创建方式不能进行字符串拼接，实例可以
var regParam = 'cm';
var reg1 = new RegExp(regParam+'1');
var reg2 = /regParam/;
2.字面量创建方式特殊含义的字符不需要转义，实例创建方式需要转义
var reg1 = new RegExp('\d')    /d/
var reg2 = new RegExp('/\d/')    /\d/
var reg3 = /\d/;

元字符
代表特殊含义的元字符
\d : 0-9之间的任意数字 \的只占一个位置
\w : 数字，字母，下划线 0-9 a-z A-Z _
\s : 空格或者空白等
\D : 除了\d
\W : 除了\w
\S : 除了\s
.  : 除了\n之外的任意一个字符
\  : 转义字符
|  : 或者
() : 分组
\n : 匹配换行符
\b : 匹配边界 字符串的开头和结尾 空格的两边都是边界
^  : 限定开始位置
$  : 限定结束位置
[a-z] : 任意字母[]中的表示任意一个都可以
[^a-z] : 非字母 []中^代表除了
[abc] : abc三个字母中的任何一个 [^abc]除了这三个子母钟的任何一个字符

代表次数的量词元字符
* : 0到多个
+ : 1到多个
? : 0次或1次 可有可无
{n} : 正好n次
{n,} : n到多次
{n,m} : n次到m次

量词出现在元字符后买呢 如\d+，限定出现在前面的元字符的次数
var str = '12233334444';
var reg = /\d{2}/g;
var res = str.match(reg);
console.log(res); //  ["12", "23", "33", "34", "44"]

var str = ' 我是空格君 ';
var reg = /^\s+|\s+$/g;//匹配开头结尾空格
var res = str.replace(reg,'');
console.log('('+res+')');  //(我是空格君)

正则中的()和[]和重复子项
 ·一般[]中的字符没有特殊含义 如+就表示+
var str1 = 'abc';
var str2 = 'dbc';
var str3 = '.bc';
var reg = /[ab.]bc/;
reg.test(str1) = reg.test(str3) =  true
reg.test(str2) = false;
 ·[]中不会出现两位数
[12]代表的是1或者2 不过[0-9]这样的表示0到9 [a-z]代表a到z
ex:匹配从18到65年龄段的所有人
var reg = /[18-65]/; 这样写是不对的
实际上匹配这个18-65年龄段的正则需要我们拆开来匹配
拆成三部分 18-19 20-59 60-65
reg = /(18|19) | ([2-5]\d) | (6[0-5])/;

·()的提高优先级功能：凡是有|出现的时候 一定注意是否有必要加上()来提高优先级

正则运算符的优先级
1、正则表达式从左到右进行计算，并遵循优先级顺序，这与算数表达式非常类似
2、相同优先级的会从左到右进行运算，不同优先级的运算先高后低
下面是常见的运算符的优先级排列
一次从最高到最低
\ : 转义符
(), (?:), (?=), []  => 圆括号和方括号
*, +, ?, {n}, {n,}, {n,m}   => 量词限定符
^, $, \任何元字符、任何字符 
|       => 替换，"或"操作

字符具有高于替换运算符的优先级，一般用 | 的时候，为了提高 | 的优先级，我们常用()来提高优先级
如： 匹配 food或者foot的时候 reg = /foo(t|d)/ 这样来匹配

正则的特性
 贪婪性
   所谓贪婪性就是正则在捕获时，每一次会尽可能多的去捕获符合条件的内容。如果我们想尽可能的少的去捕获符合条件的字符串的话，可以在量词元字符后加？
 懒惰性
   懒惰性则是正则在成功捕获一次后不管后边的字符有没有符合条件的都不再捕获。如果想捕获目标中所有的符合条件的字符串的话，我们可以用标识符g来标明是全局捕获
var str = '123aaa456';
var reg = /\d+/;  //只捕获一次，一次尽可能多的捕获
var res = str.match(reg);  // ['123',index:0,input:"123aaa456"];

reg = /\d+?/g; //解决贪婪性、懒惰性
res = str.match(reg);//["1", "2", "3", "4", "5", "6"]

和正则相关的一些方法
 test\exec\match\replace
 - reg.test(str) 用来验证字符串是否符合正则 符合返回true 否则返回false
    var str = 'abc';
    var reg = /\w+/;
    console.log(reg.test(str));  //true
 -reg.exec()用来捕获符合规则的字符串
    var str = 'abc123cba456aaa789';
    var reg = /\d+/;
    console.log(reg.exec(str))
    //  ["123", index: 3, input: "abc123cba456aaa789"];
    console.log(reg.lastIndex)
    // lastIndex : 0 

    reg.exec捕获的数组中 
    // [0:"123",index:3,input:"abc123cba456aaa789"]
    0:"123" 表示我们捕获到的字符串
    index:3 表示捕获开始位置的索引
    input 表示原有的字符串
    当我们用exec进行捕获时，如果正则没有加'g'标识符，则exec捕获的每次都是同一个，当正则中有'g'标识符时 捕获的结果就不一样了
    var str = 'abc123cba456aaa789';
    var reg = /\d+/g;  //此时加了标识符g
    console.log(reg.lastIndex)
    // lastIndex : 0 

    console.log(reg.exec(str))
    //  ["123", index: 3, input: "abc123cba456aaa789"]
    console.log(reg.lastIndex)
    // lastIndex : 6

    console.log(reg.exec(str))
    // ["456", index: 9, input: "abc123cba456aaa789"]
    console.log(reg.lastIndex)
    // lastIndex : 12

    console.log(reg.exec(str))
    // ["789", index: 15, input: "abc123cba456aaa789"]
    console.log(reg.lastIndex)
    // lastIndex : 18

    console.log(reg.exec(str))
    // null
    console.log(reg.lastIndex)
    // lastIndex : 0

    每次调用exec方法时,捕获到的字符串都不相同
    lastIndex ：这个属性记录的就是下一次捕获从哪个索引开始。
    当未开始捕获时，这个值为0。          
    如果当前次捕获结果为null。那么lastIndex的值会被修改为0.下次从头开始捕获。
    而且这个lastIndex属性还支持人为赋值。

   -str.match(reg) 如果匹配成功，就返回匹配成功的数组，如果匹配不成功就返回null
   //match和exec的用法差不多
    var str = 'abc123cba456aaa789';
    var reg = /\d+/;
    console.log(reg.exec(str));
    //["123", index: 3, input: "abc123cba456aaa789"]
    console.log(str.match(reg));
    //["123", index: 3, input: "abc123cba456aaa789"]
    区别在哪，当进行全局匹配的时候，不同就显示出来了
    var str = 'abc123cba456aaa789';
    var reg = /\d+/g;
    console.log(reg.exec(str));
    // ["123", index: 3, input: "abc123cba456aaa789"]
    console.log(str.match(reg));
    
    -str.replace() 
    正则去匹配字符串，匹配成功的字符去替换成新的字符串
    写法：str.replace(reg,newStr);

    var str = 'a111bc222de';
    var res = str.replace(/\d/g,'Q')
    console.log(res)
    // "aQQQbcQQQde"
身份证正则表达式 
     // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    手机号正则表达式
     reg = /^1(3 | 4 | 5 | 7 | 8) \d{ 9 } $/
    表示以1开头，第二位可能是3 / 4 / 5 / 7 / 8等的任意一个，在加上后面的\d表示数字[0 - 9]的9位，总共加起来11位结束。
    //Email正则
var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
