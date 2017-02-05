
requirejs.config({
	baseUrl : 'js',
	paths:{
		jquery:'jquery/jquery.min'
	}
})

///////////

requirejs(["mods/nav","util/util1","util/util2","jquery"],function(nav,slider,util,$){
   //nav.show();
   //slider();


   var aa = 111;
   console.log(util.fill0(aa));

   var bb = new Date();
   var dd = util.getDateArr(bb);
   console.log(dd[0]+'-'+util.fill0(dd[1])+'-'+util.fill0(dd[2]));

   $('body').html("<h1>hey<h1>");
});