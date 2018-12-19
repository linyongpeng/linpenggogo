<template>
    <div class="list" ref="scroll">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-wrapper">
                <div class="button">{{this.$store.state.defaultCity}}</div>
            </div>
        </div>

        <div class="area">
            <div class="title border-topbottom">热门城市</div>
             <div class="button-wrapper" v-for="item of hotcities" :key="item.id"> 
                <div class="button">{{item.name}}</div>
            </div>
        </div>

        <div class="area" v-for="(item,key) in cities" :key='item[0].id' :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="list-wrapper border-topbottom" v-for="li of item" :key="li.id">
                {{li.name}}
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
    name:'CityList',
    props:['hotcities','cities'],
    computed:{
       ...mapState(['letter'])
    },
    mounted(){
       this.scroll =  new Bscroll(this.$refs.scroll);
    //    console.log(this.letter);
    },
    watch:{
        letter(){
            if(this.letter){
                let ele = this.$refs[this.letter][0];
               this.scroll.scrollToElement(ele);
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
    .list{
        position: absolute;
        top: 1.58rem;
        left: 0;
        bottom: 0;
        right:0;
        overflow:hidden;
        .area{
            overflow: hidden;
            .title{
                width: 100%;
                background: rgba(221, 221, 221, 0.836);
                text-indent: .15rem;
                line-height: .44rem;
                font-size: 0.26rem;
                height: .44rem;
                &::before{
                    border: 1px solid #ccc;
                }
                &::after{
                    border: 1px solid #ccc;
                }
            }
            .button-wrapper{
                padding: .1rem .15rem .1rem .12rem; 
                overflow: hidden;
                float:left;
                .button{
                    float:left;
                    padding: 0 .5rem;
                    line-height: .42rem;
                    color: #660;
                    font-size: .26rem;
                    border: 1px solid #ccc;
                    border-radius: .1rem;
                    margin-right:.2rem;
                    // margin-bottom:rem;
               }
            }
            .list-wrapper{
                padding: .2rem; 
                &::after{
                    border: 1px solid #ccc;
                }
            }
        }
    }
</style>
