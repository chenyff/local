1.计算属性

computed   可以计算的属性  计算咱们的date

属性 必须是函数
c:function(){
    return 计算输出值
}
need:{
    //读取
    get:function(){

    },
    //设置
    set:function(){

    }
}

$watch() <- 看 盯着  如果发生改变 就会出现一个回调函数