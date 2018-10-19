<template>
   <div class="outNode" @mouseover="over" @mouseout="leave">
       <ul>
           <li v-for="i in allImage" :style='{backgroundImage:"url("+i+")"}' v-show="needIndex==$index?true:false" transition="fade">
           </li>
       </ul>
       <ol class="num" :style='{width:allImage.length*30+"px"}'>
           <li v-for="i in allImage" :class="needIndex==$index?'active':''"></li>
       </ol>
       <div class="mini" :style='{width:allImage.length*84+"px",bottom:bottomN+"px"}'>
           <img :src="i" v-for="i in allImage" @click="needIndex=$index">
       </div>
   </div>
</template>
<script>
export default {
    props:['tab'],
    data(){
        return {
            allImage:[],
            needIndex:'',
            bottomN:''
        }
    },
    methods:{
        over(){
            this.bottomN=0;
            clearInterval(this.interval);
        },
        leave(){
            this.bottomN='-56';
            clearInterval(this.interval);
            this.interval = setInterval(()=>{
                this.needIndex++;
                this.needIndex == this.allImage.length && (this.needIndex = 0);
            },2000)
        }
    },
    ready(){
        this.allImage = this.tab.image;
        this.needIndex = this.tab.index;
        this.bottomN = this.tab.bottomNode;
        this.interval = this.tab.interval;
        clearInterval(this.interval);
        this.interval = setInterval(()=>{
           this.needIndex++;
           this.needIndex == this.allImage.length && (this.needIndex = 0);
        },2000);
    }
}
</script>
<style>
.fade-transition{
    transition: .7s;
    opacity: 1;
}
.fade-leave{
    opacity: 0;
}
.fade-enter{
    opacity: 0;
}
   *{
       margin: 0;padding: 0;
   }
  .outNode{
      width: 640px;
      height: 430px;
      position: relative;
      overflow: hidden;
  }
  .outNode ul,.outNode ul li{
      width: 100%;
      height: 100%;
  }
  .outNode ul li{position: absolute;left: 0;top: 0;}
  .num{
      height: 20px;position: absolute;bottom: 7px;left: 50%;z-index: 10;transform: translateX(-50%);list-style: none;
  }
  .num li{
      width: 6px;height: 6px;background: white;margin: 7px 12px;
      float: left;border-radius: 50%;cursor: pointer;
  }
  .num li.active{
      background: red;
  }
  .mini{
      height: 60px;position: absolute;bottom: 0px;left: 50%;z-index: 11;transform: translateX(-50%);background: rgba(255, 255,255, 0.7);transition: .8s;
  }
  .mini img{
      width: 78px;
      height: 46px;
      margin: 4px 3px 6px;
  }
</style>

