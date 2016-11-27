/*var Base = {
	getId : function(id){
		return document.getElementById(id)      //获取ID
	},
	getName : function(name){
		return document.getElementsByName(name)     //获取class
	},
	getTagName : function(tag){
		return document.getElementsByTagName(tag)      //获取标签名
	}
}*/
//前台调用
var $ = function(_this){
	return new Base(_this);
}

//基础库
function Base(_this){
	this.elements = [];
	if(_this != undefined){
		this.elements[0] = _this;
	}
}



//获取ID
Base.prototype.getId = function(id){
	this.elements.push(document.getElementById(id));
	return this;
};
//获取元素节点
Base.prototype.getTagName = function(tag){
	var tags = document.getElementsByTagName(tag);
	for(var i = 0;i<tags.length; i++){
		this.elements.push(tags[i]);
	}
	return this;
	/*this.elements.push(document.getElementsByTagName(tag));
	return this;*/
}
//获取class节点数组
Base.prototype.getClass = function(className,idName){
	var node = null;
	if(arguments.length == 2){
		node = document.getElementById(idName);
	}else{
		node = document;
	}
	var all = node.getElementsByTagName('*');
	for(var i = 0;i<all.length;i++){
		if(all[i].className == className){
			this.elements.push(all[i])
		}
	}
	return this;
}

//获取某一个节点
Base.prototype.getElement = function(num){
	var element = this.elements[num];
	this.elements = [];
	this.elements[0] = element;
	return this;
}

//设置css
Base.prototype.css = function(attr,value){
	for(var i = 0;i<this.elements.length;i++){
		if(arguments.length == 1){
			
			return getStyle(this.elements[i],attr);
		}
		this.elements[i].style[attr] = value;
	}
	return this;
}

//添加class
Base.prototype.addClass = function(className){
	for(var i = 0;i<this.elements.length;i++){
		if(!hasClass(this.elements[i],className)){
			this.elements[i].className += ' '+className;
		}
	}
	return this;
}

//移除class
Base.prototype.removeClass = function(className){
	for(var i = 0;i<this.elements.length;i++){
		if(hasClass(this.elements[i],className)){
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
		}
	}
	return this;
}

//设置html
Base.prototype.html = function(str){

	for(var i = 0;i<this.elements.length;i++){
		if(arguments.length == 0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

//设置鼠标移入移出事件
Base.prototype.hover = function(over,out){
	for(var i = 0;i<this.elements.length;i++){
		   this.elements[i].onmouseover = over;
		   this.elements[i].onmouseout = out;
	}
	return this;
}

//设置显示
Base.prototype.show = function(){
	for(var i = 0;i<this.elements.length;i++){
		   this.elements[i].style.display = 'block';
	}
	return this;
}

//设置隐藏
Base.prototype.hide = function(){
	for(var i = 0;i<this.elements.length;i++){
		   this.elements[i].style.display = 'none';
	}
	return this;
}

//触发点击事件
Base.prototype.click = function(fn){
	for(var i = 0;i<this.elements.length;i++){
		this.elements[i].onclick = fn;
	}
	return this;
}

//设置物体居中
Base.prototype.center = function(width,height){
	var top = (document.documentElement.clientHeight - height) / 2;
	var left = (document.documentElement.clientWidth - width) / 2;
	for(var i = 0;i<this.elements.length;i++){
		this.elements[i].style.top = top+'px';
		this.elements[i].style.left = left+'px';
	}
	return this;
}

//出发浏览器窗口事件
Base.prototype.resize = function(fn){
	window.onresize = fn;
	return this;
}

//锁屏功能
Base.prototype.lock = function(){
	for(var i = 0;i<this.elements.length;i++){
		this.elements[i].style.width = getInner().width+'px';
		this.elements[i].style.height = getInner().height+'px';
		this.elements[i].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
	}
	return this;
}
Base.prototype.unlock = function(){
	for(var i = 0;i<this.elements.length;i++){
		this.elements[i].style.display = 'none';
		document.documentElement.style.overflow = 'none';
	}
	return this;
}

//拖拽功能
Base.prototype.drag = function(){
	for(var i = 0;i<this.elements.length;i++){
		this.elements[i].onmousedown = function(e){
			preDe(e);//阻止默认行为 低版本的火狐
			var e = getEvent(e);
			var _this = this;
			var diffx = e.clientX - _this.offsetLeft;
			var diffy = e.clientY - _this.offsetTop;
			if(typeof _this.setCapture != 'undefined'){
				_this.setCapture();
			}
		
			document.onmousemove = function(e){
				var e = getEvent(e);
				var left = e.clientX - diffx;
				var top = e.clientY - diffy;
				if(left<0){
					left = 0;
				}else if(left > getInner().width - _this.offsetWidth){
					left = getInner().width - _this.offsetWidth;
				}
				if(top<0){
					top = 0;
				}else if(top > getInner().height - _this.offsetHeight){
					top = getInner().height - _this.offsetHeight;
				}
				_this.style.left = left + 'px';
				_this.style.top = top + 'px';

			};
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				if(typeof _this.releaseCapture != 'undefined'){
					_this.releaseCapture();
				}
			}
			
		}
	}
	return this;
}















