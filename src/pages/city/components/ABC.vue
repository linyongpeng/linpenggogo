<template>
    
    <ul class="list" >
        <li class="item" v-for="(item,key) in cities" :key='item[0].id'>{{key}}</li>
    </ul>
</template>
<script>
export default {
    name:'CityAbc',
    props:['cities']
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
        }
    }
</style>
