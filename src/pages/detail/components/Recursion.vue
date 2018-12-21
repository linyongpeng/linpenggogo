<template>
    <div>
        <div class="recursion lists " v-for="(i,index) of list" :key="index">
            <div class="border-bottom list">
                <div class="icon"></div>
                {{i.title}}
            </div>
            <div v-if="i.children" class="padleft">
                <detail-recursion :list="i.children"></detail-recursion>   
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailRecursion',
    props:["list"]
}
</script>
<style lang="less" scoped>
    .lists{ 
        line-height: 0.8rem;
        font-size: .32rem;
        position: relative;
        .list{
            display: flex;
            align-items: center;
            .icon{
                display: inline-block; 
                width: .36rem;
                height: .36rem;     
                background:url('http://s.qunarzz.com/piao/image/touch/sight/detail.png')  0 -.45rem no-repeat;
                margin-right: .1rem;
                margin-left: .1rem;
                background-size: .4rem 3rem; 
                
            } 
        }
        .padleft{
                padding: 0 0.4rem;
        }
    }   
</style>
