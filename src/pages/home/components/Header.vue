<template>
    <div class="header">
        <div class="header-back"><div class="iconfont">&#xe624;</div></div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
                输入城市/景点/游玩/主题
            </div>
        <router-link to="/city">
            <div class="header-city">{{this.$store.state.defaultCity}}<span class="iconfont">&#xe64a;</span></div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'HomeHeader'
}
</script>
<style lang="less" scoped>
@import '~styles/value.less';
    .header{
        display: flex;
        color:#fff;
        background:@color; 
        height: .86rem;
        line-height: .86rem;
        
        .header-back{
            width: 1rem;
            height: 100%;
            text-align: center;
            font-size: 0.4rem;
        }
        .header-input{
            flex: 1;
            height: .56rem;
            margin-top: 0.15rem;
            background: #fff;
            border-radius: 5px;
            color:#ccc;
            line-height: .36rem;
            box-sizing: border-box;
            padding: 0.1rem;
             padding-left: 0.2rem;
            font-size: 0.26rem;
            
        }
        .header-city{   
            width: 1.24rem;
            height: 100%;
             text-align: center;
             font-size: 0.26rem;
             color: #fff;
             span{
                 margin-left: 0.08rem;
                 font-size: 0.2rem;
             }
        }

    }
    
</style>
