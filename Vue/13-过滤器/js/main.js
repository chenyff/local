Vue.filter('addfont',function(val,danwei){
	val = val||0;
	danwei = danwei||'元';
	return val+danwei;
})
var app = new Vue({
	el:"#app",
	data:{
		price:12
	}
})
