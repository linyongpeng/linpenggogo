<template>
    <div class="list" ref="scroll">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-wrapper">
                <div class="button">广州</div>
            </div>
        </div>

        <div class="area">
            <div class="title border-topbottom">热门城市</div>
             <div class="button-wrapper">
                <div class="button">广州</div>
            </div>
        </div>

        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="list-wrapper border-topbottom">
                阿拉尔
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    mounted(){
       this.scroll =  new Bscroll(this.$refs.scroll);
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
                padding: .2rem .15rem 0 .12rem; 
                overflow: hidden;
                .button{
                    float:left;
                    padding: 0 .5rem;
                    line-height: .42rem;
                    color: #660;
                    font-size: .26rem;
                    border: 1px solid #ccc;
                    border-radius: .1rem;
                    margin-right:.2rem;
                    margin-bottom:.2rem;
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
