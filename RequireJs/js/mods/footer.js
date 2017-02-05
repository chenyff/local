define(function(){


	console.log(11112222);
	function Tab(name){
		this.name = name;
		this.doTab = function(){
			return this.name;
		}
	}

	return new Tab("yufei");
	
	//return new tabb("yufei");
	//console.log(tt);
})