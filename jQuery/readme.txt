安装
直接下载jquery文件  script引入即可

---jquery选择器
  <div id="a"></div>
  js - document.getElementById('a').style.background = 'red';
  jq - jQuery('#a').css('background','green');

  选择器
  元素、id、class、后代选择器、属性选择器、伪类
  css中怎么选jq就可以怎么选

---过滤

三层嵌套的div，拿到最外层的找最里面的
$('div .child')
$('div').find('.child')

子元素找父级
$('#child1').parent().css('color','red');

$('#child1').parents('.grandpa').css()

$('.child').filter('.not-gay').css();

---修改样式
$('.a').css('color','red').css('font-size','30px')
$('.a').css({
    color:'red',
    backgroundColor:'black',
    border:'1px solid #000'
})
如果css属性中有-  转化为驼峰命名法或者加引号

或者在style中写好样式  然后添加这个class名
$('.a').addClass('redfont');  增加class名
.removeClass('bluefont')     删除class名
.hasClass('liuliuliu')  返回true或者false

隐藏一个元素  
之前是display:none   
现在  
元素.hide()   .show()  
fadeOut()可以放时间   fadeIn()
slideUp()向上隐藏   slideDown()向下显示
保健品广告牌  判断是否有class名 有就删除 没有就增加

---操作dom
text() 获取文本   text('内容') 设置内容
html() 获取html内容  html('<h1></h1>')渲染内容

$('a').append('<div></div>')  往后面加 
$('a').prepend('<div></div>')  往前面加

$('a').remove();


---事件
点击事件  on('click',function(){})
鼠标滑入事件  on('mouseenter',function(){})
鼠标滑出事件  on('mouseleave',function(){})


---操作元素属性
.attr('href','http://www.baidu.com')  任何属性
.prop('href','http://www.baidu.com')  系统自带属性
removeAttr(属性名)


---表单及输入
$('#nickname').val()   input通过val获取值
$('#nickname').val('你好')   设置值
$('#nickname').focus();   获取焦点
$('#nickname').blur();    失去焦点
$('#nickname').select()   选中内容

$('#nickname').focus(function(){
  获取焦点时触发事件
});  

form表单提交事件  .submit();


----ajax load
优点  指哪打哪

整服务器
1.安装node
2.npm install http-server -g  

https://api.github.com/users/biaoyansu
$.ajax({
  url:'',
  method:'post|get',
  data:{

  }.
  success:function(){

  }.
  error:function(){

  }
})

$.post('url',{
  username:'chenyufei'
},function(){
  
})
