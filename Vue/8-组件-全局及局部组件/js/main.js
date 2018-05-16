/*
 
 * vue创建一个组件的方法  vue.component  
 * 第一个参数就是 组件名称
 * 第二个参数是一个对象，对象里的template是组件的内容
 * 
 * 复制粘贴多个组件标签
 * 
 * 表示全局功能
 * 
 * 展示局部组件
 * 
 * 放置 component内
 * 
 * */
Vue.component('alert',{
	
});
var app = new Vue({
	el:"#app",
	components:{
		alert:{
			template:'<button @click="clickme()">点击我</button>',
			methods:{
				clickme:function(){
					alert(123);
				}
			}
		}
	}
});
var abb = new Vue({
	el:"#abb"
})
