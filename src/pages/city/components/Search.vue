<template>
    <div class="city-search">
       <input type="text" placeholder="输出城市名或者拼音">
    </div>
</template>
<script>
export default {
    name:'CitySearch'
}
</script>

<style lang="less" scoped>
@import '~styles/value.less';
    .city-search{
        width: 100%;
        height: .72rem;
        padding: 0 .1rem;
        background:@color;
        box-sizing: border-box;
        input{
            // display: block;
            margin: 0 auto;
            width: 100%;
            height: .62rem;
            border-radius: .1rem;
            text-align: center;
            line-height:.62rem;
            font-size: .24rem;
            color: #eee;
        }
    }
</style>