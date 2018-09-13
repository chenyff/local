组件---一大堆零件组合成的一个成品

换成html的话 就是一大堆元素组成的一个模块
这个模块有自己的作用

vue-全局组件

var chen = Vue.extend({
    template:'写需要的html元素'
});

Vue.component('自己定义的标签',chen)

组件里的data不同于实例话vue 的data
组件里面的data必须是一个函数
并且想输出内容的话用return即可

里面可以传数据  
data:function(){
    return{
        msg:'这样写数据'
    }
}

局部组件
new Vue({
    data:'局部作用域',
    components:{
        '自定义的名字':chen
    }
})

组件模板
<template id="box">
</template>

is属性  is属性是哪个组件 就把名字给is属性即可

组件是可以无线去套组件的
只能套自己下面的第一层组件

父子级数据交互
需要一个自定义属性

<aa :chen='msg'></aa>

props:['chen']