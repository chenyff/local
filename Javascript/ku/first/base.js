var Base = {
	getId : function(id){
		return document.getElementById(id)      //获取ID
	},
	getName : function(name){
		return document.getElementsByName(name)     //获取class
	},
	getTagName : function(tag){
		return document.getElementsByTagName(tag)      //获取标签名
	}
}