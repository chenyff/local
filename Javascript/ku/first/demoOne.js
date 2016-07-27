window.onload = function(){
	// alert(Base.getId('box'));
	/*Base.getId('box').css('color','red').css('backgroundColor','black').html('pox').click(function(){
		alert("a");
	})*/
	//alert(document.getElementById('box').innerHTML);
	//alert(document.getElementsByName('sex')[0].value);
	//alert(document.getElementsByTagName('p')[0].innerHTML);
	alert(Base.getId('box').innerHTML);
	alert(Base.getName('sex')[0].value);
	alert(Base.getTagName('p')[0].innerHTML);
}