//跨浏览器获取视口大小
function getInner() {
	if (typeof window.innerWidth != 'undefined'){
		return {
			width : window.innerWidth,
			height : window.innerHeight
		}
	}else{
		return {
			width : document.documentElement.clientWidth,
			height : document.documentElement.clientHeight
		}
	}
}

//跨浏览器获取style
function getStyle(element,attr){
	if(typeof window.getComputedStyle != 'undefined'){
		return window.getComputedStyle(element,null)[attr];
	}else if(typeof element.currentStyle != 'undefined'){
		return element.currentStyle[attr];
	}
}

//判断class是否存在
function hasClass(element,className){
	return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}

//获取event对象
function getEvent(event){
	return event || window.event;
}

//阻止默认行为
function preDe(event){
	var e = getEvent(event);
	if(typeof e.preventDefault != 'undefined'){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}