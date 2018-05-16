/*
 
 * $.emit  理解为jquery中的trigger
 * 
 * */

Vue.component('parent',{
	template:
	`<div>
	    <child @showm="showFn"></child>
	    <div v-if="showbu">现有余额:{{money}}元</div>	
	 </div>
	`,
	data:function(){
		return {
			showbu : false,
			money:null
		}
	},
	methods:{
		showFn:function(data){
			console.log(data);
			this.showbu = true;
			this.money = data.a;
		}
	}
});
Vue.component('child',{
	template:'<button @click="showMoney()">显示余额</button>',
	methods:{
		showMoney:function(){
			this.$emit('showm',{a:1,b:2});
		}
	}
});
var app = new Vue({
	el:'#app'
})
