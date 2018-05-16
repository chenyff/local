/*
 
 * 
 * 
 * */
Vue.component('like',{
	template:'<button @click="clickme()">点击我</button>',
	props:['msg'],
	methods:{
		clickme:function(){
			alert(this.msg);
		}
	}
});
Vue.component('qq',{
	template:'<a :href="\'/user/\'+username">{{username}}</a>',
	props:['username']
})
var app = new Vue({
	el:"#app"
});
var qq = new Vue({
	el:"#qq"
});
