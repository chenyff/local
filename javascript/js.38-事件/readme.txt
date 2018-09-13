event对象和事件冒泡
    什么是event对象
        用来获取事件的详细信息：鼠标位置，键盘按键
        例子：获取鼠标位置clientX
        document的本质：document.childNodes[0].tagName
    获取event对象（兼容性写法）
        var oEvent = ev||event;
    事件流
        事件冒泡
            取消冒泡 oEvent.cancelBulle = true
            例子仿select控件
            DOM事件流
