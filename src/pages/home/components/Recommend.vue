<template>
    <div class="wrapper">
        <div class="title">
            热销推荐
        </div>
        <ul class="recommend-list">
            <router-link tag="li"
                        :to="`/detail/${item.id}`"
                        class="item" 
                        v-for="item of  this.$store.state.recommendList " 
                        :key="item.id">
                <div class="img-wrapper">
                    <img :src="item.imgUrl">
                </div>
                <div class="innovation">
                    <p>{{item.title}}</p>
                    <p>{{item.info}}</p>
                    <button>查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend'
}
</script>
<style lang="less" scoped>
@import '~styles/value.less';
    .wrapper{
        .title{
            height:0.8rem;
            line-height:0.8rem;
            text-indent: 0.4rem;
            background: #eee;
        }
        .recommend-list{
            .item{
                display: flex;
                height: 2rem;
                width: 100%;
                border-bottom: 0.01rem solid rgba(204, 204, 204, 0.993);
                .img-wrapper{
                    width: 32%;
                    box-sizing: border-box;
                    padding: 0.1rem;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .innovation{
                    padding: 0.3rem;
                    min-width:0;
                    flex: 1;
                    p:nth-child(1){
                        font-weight: bold;
                        margin-bottom: 0.18rem;
                        .textEllipsis
                    }
                    p:nth-child(2){
                        font-size: 0.22rem;
                        color: #ccc;
                        .textEllipsis;
                        margin-bottom: 0.3rem;
                    }
                    button{
                        width: 1.3rem;
                        font-size: 0.22rem;
                        padding: 0.1rem;
                        background: @color;
                        border-radius: 5px;
                        color: #fff;
                        
                    }
                }
            }
        }
    }
</style>
