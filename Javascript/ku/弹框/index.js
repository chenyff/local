window.onload = function(){
	$().getClass('member').hover(function(){
		$(this).css('color','red');
		$().getClass('member_ul').show();
	},function(){
		$(this).css('color','black');
		$().getClass('member_ul').hide();
	})
	//登陆框
	var login = $().getId('login');
	login.center(350,250).resize(function(){
		login.center(350,250);
	});
	$().getClass('close').click(function(){
		login.hide();
	})
	$().getClass('login').click(function(){
		login.show();
	})
}