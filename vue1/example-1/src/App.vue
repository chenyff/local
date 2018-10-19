<template>
  <div id="app">
    <div class="tab" style="display:none;">
      <Tab :tab="tabNode"></Tab>
    </div>
    <div class="tab">
      <Slidetab :slide="slidetab"></Slidetab>
    </div>
    
  </div>
</template>

<script>
import Tab from './tab.vue'
import Slidetab from './slidetab.vue'
export default {
  data () {
    return {
      tabNode:{
        image:['./src/img/1.jpeg','./src/img/2.jpeg','./src/img/3.jpeg','./src/img/4.jpeg','./src/img/5.jpeg','./src/img/6.jpeg','./src/img/7.jpeg'],
        index:0,
        bottomNode:-56,
        interval:null
      },
      slidetab:{
        image:['./src/img/1.jpeg','./src/img/2.jpeg','./src/img/3.jpeg','./src/img/4.jpeg','./src/img/5.jpeg','./src/img/6.jpeg','./src/img/7.jpeg']
      }
    }
  },
  components:{
    Tab,Slidetab
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
