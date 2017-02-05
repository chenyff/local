define(function(){
	return{
		fill0:function(num){
			return num < 10 ? "0" + num : num
		},
		getDateArr:function(date){
			var y = date.getFullYear();
			var M = date.getMonth();
			var d = date.getDate();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();

			return[y,M,d,h,m,s];
		}
	}
})