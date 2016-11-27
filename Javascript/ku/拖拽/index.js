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
	var screen = $().getId('screen');
	login.center(350,250);
	
	$().resize(function(){
		if(login.css('display') == 'block'){
			screen.lock();
		}
		
	})
	$().getClass('close').click(function(){
		login.hide();
		screen.unlock();
	});
	$().getClass('login').click(function(){
		login.show();
		screen.lock();
	});
	//拖拽
	login.drag();
	

}