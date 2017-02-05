define(function(){
	console.log(1111222233);
	function ttab(name){
		this.name = name;
		this.doTab = function(){
			return this.name;
		}
	}

	return new ttab("yufei");
})