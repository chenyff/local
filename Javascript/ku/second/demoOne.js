window.onload = function(){
	var base = new Base();
	//base.getId('box').css('color','red').css('backgroundColor','#000');
	//alert(base.getTagName('p').elements.length);
	base.getTagName('p').css('color','red').html('陈大飞').click(function(){
		alert(11);
	});
}