<template>
    <div class="wrapper">
        <div class="title">
            周末去哪儿
        </div>
        <ul class="weekend-list">
            <li class="item" v-for="item of weekendList" :key="item.id">
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
    name:'HomeWeekend',
    data(){
        return {
            weekendList:[
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
                    title:'南国冰雪乐园',
                    info:'这里可以让你在南国感受到北国风光，让南国的你“零距离”感受北国银装素裹壮观之景'
                },{
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                    title:'浮在海上的绿洲',
                    info:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
                    title:'粤西温泉必游',
                    info:'自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
                },{
                    id:'0004',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1603/e9/e9727ce75946b9fe90.water.jpg_640x276_16bc0daf.jpg',
                    title:'珠海御温泉',
                    info:'国内露天温泉旅游度假胜地之一'
                }
            ]
        }
    }
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
