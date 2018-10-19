<template>
    <ul class="slideul" @click="changed">
        <li v-for="i in allImage" :style="{background:'url('+i+')',backgroundSize:'cover'}" :class="allClass[$index]">
        </li>
    </ul>
</template>
<script>
export default {
    props:['slide'],
    data(){
        return{
            allImage:[],
            allClass:[]
        }
    },
    methods:{
        changed(){
            this.allClass.push(this.allClass.shift());
        }
    },
    ready(){
        this.allImage = this.slide.image;
        for(var i=0;i<this.allImage.length;i++){
            this.allClass.push('s'+i);
        }
    }
}
</script>
<style>
.slideul{
    height: 300px;
    position: relative;
    list-style: none;
}
.slideul li{
    width: 230px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 50%;
    transition: 0.5s;
    transform: perspective(800px);
}
.slideul li.s3{
    margin-left: -75px;z-index: 5;
}
.slideul li.s2{
    transform:perspective(800px) translate(-150px) rotateY(30deg);
    margin-left: -75px;z-index: 4;opacity: 0.8;
}
.slideul li.s1{
    transform:perspective(800px) translate(-300px) rotateY(60deg);
    margin-left: -75px;z-index: 3;opacity: 0.5;
}
.slideul li.s0{
    transform:perspective(800px) translate(-450px) rotateY(90deg);
    margin-left: -75px;z-index: 2;opacity: 0;
}
.slideul li.s4{
    transform:perspective(800px) translate(150px) rotateY(-30deg);
    margin-left: -75px;z-index: 4;opacity: 0.8;
}
.slideul li.s5{
    transform:perspective(800px) translate(300px) rotateY(-60deg);
    margin-left: -75px;z-index: 3;opacity: 0.5;
}
.slideul li.s6{
    transform:perspective(800px) translate(450px) rotateY(-90deg);
    margin-left: -75px;z-index: 2;opacity: 0;
}
</style>


