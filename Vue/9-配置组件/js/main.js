/*
 
 * 模板语法较多可以使用es6的反引号拼接
 * 或者放置页面内
 * 
 * 
 * */
Vue.component('like',{
	template:'#like_box',
	data:function(){
		return {
			like_count:10,
			liked:false
		}
	},
	methods:{
		clickme:function(){
			if(!this.liked){
				this.like_count++;
			}else{
				this.like_count--;
			}
			this.liked = !this.liked;
			
		}
	}
});
var app = new Vue({
	el:"#app"
});
