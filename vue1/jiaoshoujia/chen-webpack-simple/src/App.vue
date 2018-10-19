<template>
  <div id="app">
   <Tab :chen="msg"></Tab>
  </div>
</template>

<script>
import Tab from './tab.vue'
export default {
  data:function(){
    return {
      msg:['陈宇飞','陈晓飞','陈盼飞']
    }
  },
  components:{
    Tab
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
