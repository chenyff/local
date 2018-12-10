1.x
<a v-link='{path:xxxx}'></a>
2.x
<router-link></routet-link>
var Home = {
    template:'<h1>我是主页</h1>'
};
var News = {
        template: '<h1>我是新闻页</h1>'
};

//配置路由
var routes = [
    {path:'/home',component:Home},
    {path:'/news',component:News}
];

//生成路由
var router = new VueRouter({
    routes
});

new Vue({
    router,
    el:'#box'
})
选中的路由有个class是
router-link-exact-active

默认
var routes = [
    {path:'/home',component:Home},
    {path:'/news',component:News},
    {path:'/',redirect:'/home'}
];

router.push({path:''})  直接添加一个路由，表现的方式喂切换路由，跟自己的效果是一样的，可以使用上一步
router.replace()