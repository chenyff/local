////回调函数是什么
//function 逛商场(捎东西){
//	//逛逛逛
//	if(捎东西){
//		捎东西();
//	}
//	//逛逛逛
//}
//function 捎东西(){
//	//do 捎东西的事情
//}


//回调函数怎么用
function yo(callback){
	//console.log("hihihi");
	if(callback){
		callback();
	}
}
var aa = function(){
	console.log(123);
}
yo(aa);
