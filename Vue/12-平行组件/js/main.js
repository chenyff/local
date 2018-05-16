/*
 
 * 平行组件
 * 
 * 
 * 
 * */
var Event = new Vue();
Vue.component('dabai',{
	template:'<div>我说<input @keyup="da_said" type="text" v-model="da_say"/></div>',
	data:function(){
		return {
			da_say:''
		}
	},
	methods:{
		da_said:function(){
			Event.$emit('dabai-said-something',this.da_say);
		}
	}
});
Vue.component('erbai',{
	template:'<div>老大，二白说:{{dabai_said}}</div>',
	data:function(){
		return {
			dabai_said:''
		}
	},
	mounted:function(){
		var me = this;
		Event.$on('dabai-said-something',function(data){
			me.dabai_said = data;
		})
	}
});

var app = new Vue({
	el:"#app"
})
