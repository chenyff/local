自定义属性

<div v-自定义的名字></div>

v-abc-d
abcD
Vue.directive('自定义的名字',function(){
    bind(){
        初始化
    },
    update(){
        数据改变了，就走一遍update
    }
})