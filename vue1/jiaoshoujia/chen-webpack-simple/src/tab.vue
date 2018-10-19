<template>
<div>
    <button @click="index=$index" v-for="i in chen" :class="index==$index?'active':''">{{i}}</button>
    <div class="mydiv" v-for="i in divInner" v-show="index==$index?true:false">
      {{i}}
    </div>
</div>
    

</template>
<script>
export default {
  props:['chen'],
  data () {
    return {
      inputValue:['1','2','3'],
      divInner:['准备','放假','吧'],
      index:0,
      set:null
    }
  },
  ready(){
    clearInterval(this.set);
    this.inputValue = this.chen;
    this.set = setInterval(()=>{
      this.index++;
      this.index == this.inputValue.length&&(this.index=0);
    },1000)
  }
}
</script>
<style>
button.active{background: #666;color: #fff;}
.mydiv{width: 200px;height: 200px;background: #000;color: #fff;}
</style>