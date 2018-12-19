<template>
    
    <ul class="list" >
        <li class="item"
                 v-for="(item,key) in cities"
                  :key='item[0].id' 
                  :ref="key"
                @click="touch"
                @touchstart="start"
                 @touchmove="move"
                  @touchend="end"
                  >{{key}}</li>
    </ul>
</template>
<script>
export default {
    name:'CityAbc',
    props:['cities'],
    computed:{
        letters(){
            let letters = [];
            for(let i in this.cities){
                letters.push(i);
          }
            return letters;
        }
    },
    data(){
        return {
            lock:false,
            sY:0,
            h:0,
            timer:null
        }
    },
   updated(){
        this.sY = this.$refs['A'][0].offsetTop;
        this.h =  this.$refs['A'][0].clientHeight;
    },
    methods:{
        touch(e){
            this.$store.commit('changeLetter',e.target.innerText);
            console.log(e.target.innerText);
        },
        start(){
            this.lock = true;
        },
        move(e){
            if(this.lock){
                if(this.timer){
                    clearTimerout(this.timer);
                }
                else{
                    setTimeout(()=>{
                         let mY =  e.touches[0].clientY-79;
                            let indexOfWord = Math.floor((mY - this.sY)/this.h);
                            if(indexOfWord<0){
                                indexOfWord=0;
                            }else if(indexOfWord>=21){
                                indexOfWord=21;
                            }
                            indexOfWord = this.letters.filter((word,index)=> {
                                return indexOfWord === index ? word : undefined;
                                })
                            this.$store.commit('changeLetter',indexOfWord);
                    },30)
                }
             
            }
        },
        end(){
             this.lock = false;
        }
    }
}
</script>
<style lang="less" scoped>
    .list{
        z-index: 1;
        position: absolute;
        top: 1.58rem;
        bottom:0;
        right:0;
        width: .4rem;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        .item{
            width:.4rem;
            text-align: center;
            height:0.4rem; 
            color:#00bcd4;
        }
    }
</style>
