<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
    </ul>
</template>
<script>
export default {
    name:'CityAbc'
}
</script>
<style lang="less" scoped>
    .list{
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
