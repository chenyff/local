vue  国人开始制作的
有点像view的发音

0.x 0.6版   13年-12月
1.x         15年-10月
2.x         16年-09月


vue 不支持IE8

使用vue第一步
引入vue

new Vue(json)

el -> vue 输出的作用域 类似于jquery里面的选元素
data -> 输出的数据

{{}} -> 在作用域里面放入咱们输出的模版，模版里面放入data里买呢你定义的变量


常用指令

v-开头
v-show=display     true/false  true等于显示  false等于隐藏 或可设置为变量
v-for   
 v-for='i in item' 
如果要查看索引  {{$index}}
遍历对象
v-for="(key,value) in item"
查看键值 {{$key}}

双向绑定  v-model

事件
v-on:click   @click
显示隐藏小例子
依旧可以获取到事件对象   (event)
如果传参了 （参数，$event）
阻止冒泡
1.event.cancelBubble = true
2.event.stopPropagation();

推荐
@click.stop=''

默认事件
@contextmenu.prevent=''


键盘事件
@keydown=""
小例子   判断摁住某个键  之前根据keycode判断
现在可以使用  @keydown.65.66=''
上下左右
@keydown.left right top bottom enter 
