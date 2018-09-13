1.vue 1.x 使用接口  需要引用vue-resource.js这个文件，
get方法使用
this.$http.get('http://localhost:2133/getMess',{
    params:{user:this.username,
    pass:this.password}
}).then(function(data){
    if(data.data.ok == 1){
        alert(data.data.msg)
    }else{
        alert(data.data.msg)
    }
},function(){

})
post方法使用
this.$http.post('http://localhost:2133/getPost',{
    user: this.username,
    pass:this.password
},{
    emulateJSON:true
}).then(function(data){
    if (data.data.ok == 1) {
        alert(data.data.msg)
    }else{
        alert(data.data.msg)
    }
}).catch(function(){
    alert("比较大的问题");
})