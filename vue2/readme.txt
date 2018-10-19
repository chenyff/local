vue 2.x

https://cn.vuejs.org

1.作用域的区别
    1.x 随意的定义作用域
    2.x 不允许使用body html
2.json 
    1.x json如果想显示，需要使用json过滤器
    2.x 直接展示
3.生命周期
    created 实例已经创建
    beforeCompile  在编程之前
    compiled  编程之后
    ready 实例已经插入到文档之中
    beforeDetroy  在销毁之前
    destroyed  销毁之后

  2.x  
 beforeCreate  刚刚创建这个实例  属性还没有绑定
 created       创建完毕了 属性已经绑定好了
 beforeMount   渲染前打断点
 mounted       渲染后打断点，相当于ready
 beforeUpdate  数据更新之前
 updated       数据更新之后
 beforeDetroy  销毁之前
 destroyed     销毁之后

 4.v-for
   1.x  v-for="(index,value) in msg"
   2.x  v-for="(value,index) in msg"

5.过滤器
 2.x 取消了所有的默认过滤器
 封装的方式没有区别

 1.x传参 uppercase "1" "2"
 2.x
 uppercase('1','2')

 vm.$emit('key','value')
 key 别人接收的名字
 value 你传递的数据

 vm.$on('key',(data)=>{

 })
 key 上面接受的名字
 后面的函数里面的data就是上面穿的参数


2.0运动并不是在元素上写了
而是专门有一个容器帮助咱们做运动
<transition>
 要运动的元素
</transition>

fade-enter 进入之前的状态
fade-enter-active 变成什么（进入之后的状态）

fade-leave 要消失了（消失之前的状态）
fade-leave-active  变成什么样（消失的状态）

动画的生命周期
before-enter
enter
after-enter

before-leave
leave
after-leave

animate.css
enter-active-class = "进入之前的class"
leave-active-class = "要离开的class"

transition-group - 放入一个组
组员 key 每个组员都是唯一的 key必须不想等
 
