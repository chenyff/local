 引入vue
 引入router
 <a v-link="{path:'/chenyufei'}">陈宇飞</a>
<router-view></router-view>
 
 //1.准备开始阶段
        var app = Vue.extend();
//2.准备全局组件
        var chenyufei = Vue.extend({
            template:'#aaa'
        });
//3.准备路由
        var router = new VueRouter();
//4.关联模板
        router.map({
            'chenyufei':{
                component:chenyufei
            },
            'chenxiaofei':{
                component:chenxiaofei
            },
            'chenpanfei': {
                component: chenpanfei
            },
            'chenfeifei': {
                component: chenfeifei
            }
        });
//5.启动路由
router.start(app,'#box');
//6.给予默认值
router.redirect({
            '/':'chenfeifei',
            '/chenxiaofei':'chenfeifei'
        })


脚手架
simple
webpack
webpack-simple

vue init 要下载的脚手架的名称#版本号 自定义文件夹的名称

import 自定义的名称 from 地址

export default {
    data:function(){
        
    }
}