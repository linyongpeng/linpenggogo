<template>
    <div class="city-header">
       <router-link to="/" class="active">
                <div class="iconfont">&#xe624;</div>
        </router-link>
        <div class="city-title">
                城市选择
        </div> 
    </div>
</template>
<script>
export default {
    name:'CityHeader'
}
</script>
<style lang="less" scoped>
@import '~styles/value.less';
    .city-header{
        height: .86rem;
        line-height: .86rem;
        background: @color;
        box-sizing: border-box;
        position: relative;
        .active{
            position: absolute;
            left: 0;
            height: 100%;
            .iconfont{
                width: .8rem;
                text-align: center;
                color: #fff;
            }

        }
        .city-title{
            background: #fff;
            width: 2rem;
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            border-radius: .1rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%,-50%,0);
            font-size: .24rem;
            color: @color;
        }
    }
</style>
