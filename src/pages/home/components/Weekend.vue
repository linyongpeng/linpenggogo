<template>
    <div class="wrapper">
        <div class="title">
            周末去哪儿
        </div>
        <ul class="weekend-list">
            <li class="item" v-for="item of this.$store.state.weekendList" :key="item.id">
                <div class="img-wrapper">
                    <img :src="item.imgUrl">
                </div>
                <div class="innovation">
                    <p>{{item.title}}</p>
                    <p>{{item.info}}</p>

                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend'
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
        .weekend-list{
            .item{
                height: 4rem;
                width: 100%;
                border-bottom: 0.01rem solid rgba(204, 204, 204, 0.993);
                .img-wrapper{
                    width: 100%;
                    height: 3rem;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .innovation{
                    padding: 0.15rem;
                    min-width:0;
                   p:nth-child(1){
                       font-size: 0.25rem;
                        margin-bottom: 0.18rem;
                        .textEllipsis
                    }
                    p:nth-child(2){
                        font-size: 0.22rem;
                        color: #bbb;
                        .textEllipsis;
                        margin-bottom: 0.3rem;
                        max-width: 70%;
                    }
                }
            }
        }
    }
</style>
