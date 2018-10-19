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