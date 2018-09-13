function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name]
    } else {
        return getComputedStyle(obj, false)[name];
    }
}
function startMove(obj,json,endFn) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
         for(var attr in json){
             var cur = 0;
             var bStop = true;
             if (attr == "opacity") {
                 cur = parseFloat(getStyle(obj, attr)) * 100;
             } else {
                 cur = parseInt(getStyle(obj, attr));
             }
             var speed = (json[attr] - cur) / 6;
             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //  if (cur == json[attr]) {
            //      clearInterval(obj.timer);
            //      if (endFn) {
            //          endFn();
            //      }
            //  } else {
            if(cur!=json[attr]){
                bStop = false;
            }
            if (attr == "opacity") {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')'
            } else {
                obj.style[attr] = cur + speed + 'px';
            }

             //}
             //等所有东西都到了，关闭
             //没有不到的，关闭
         }
         if(bStop){
             clearInterval(obj.timer);
             if(endFn){
                 endFn();
             }
         }
    }, 30)
}
/*
运动框架总结
startMove(iTarget)
startMove(obj,iTarget)
startMove(obj,attr,iTarget)
startMove(obj,attr,iTarget,endFn)
startMove(obj,json)
startMove(obj,json,endFn)



*/