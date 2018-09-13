$emit('child-msg',this.msg)

然后在组件中 <yu @child-msg='getmsg'></yu>

methods:{
    getmsg:function(){

    }
}

slot位置
在组件中可以放入任何html代码
 如果想实现的话，需要在组件里使用slot标签，这个标签代替了你在组件李放入的html代码

 更精准的话

 给标签添加属性slot="name值"，给slot添加属性 name="值"


 box-shadow  后面跟的值   第一个值代表水平距离左边  第二个值代表垂直方向距离上边  第三个值模糊度
 第四个值事扩展  第五个值是颜色  还可以再加内阴影
box-shadow:3px 3px 3px 3px black,inset 3px 3px 3px 3px black;