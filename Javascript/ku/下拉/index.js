window.onload = function(){
	$().getClass('member').hover(function(){
		$(this).css('color','red');
		$().getTagName('ul').show();
	},function(){
		$(this).css('color','black');
		$().getTagName('ul').hide();
	})
}