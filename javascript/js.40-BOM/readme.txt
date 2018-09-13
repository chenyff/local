1.window.open('地址')执行会跳转至改地址
   可以跟一个window.opden('about:blank')
   第二个参数可以放 _self(本页面打开)  _blank(新打开一个页面)
返回的是另一个window  同样具备document属性
2.window.close()  执行会关闭页面
   IE下会弹框询问是否关闭
   火狐下不让关  必须是自己打开的 才能自己关

3.window.navagator.userAgent  浏览器信息
4.window.location             页面地址，不光可以取值，还可以赋值

5.可视区
可视区的宽  document.documentElement.clientWidth
可视区的高  document.documentElement.clientHeight

距离顶部的距离
document.documentElement.scrollTop
document.body.scrollTop
兼容

window.onresize  更改页面大小