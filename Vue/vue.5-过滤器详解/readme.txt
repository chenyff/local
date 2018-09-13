过滤器  abcd-a1b2c3d4

{{msg | 过滤器的名称}}

1.capitalize  首字母大写
2.uppercase   所有的英文字母变大写
3.lowercase   所有的英文字母变小写
4.currency  变成$符号，默认后面两个0 
加第二个参数 '¥'  就会变成人民币符号 （任何符号都行）
第三个参数用来控制小数点后0的数量 
5.pluralize 
英文有复数 复数+s

6.debounce
做等待处理 (延时处理，默认300毫秒)
<input type="button" value="点击" @click="add | debounce '300'" id="bb">
点击以后会等待三百毫秒才执行

7.limitBy  截取
第一个参数  截取几个
第二个参数  从第几个开始

8.filterBy  筛选
第一个参数  筛选的目标
还可以把json多余的内容给过滤掉

9.orderBy  升序降序
两个参数 1或者-1  
10.双向过滤器
Vue.filter(过滤器名称，{
    read:function(){

    },
    write:function(){
        
    }
})