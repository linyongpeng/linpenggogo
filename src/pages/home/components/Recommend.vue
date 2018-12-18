<template>
    <div class="wrapper">
        <div class="title">
            热销推荐
        </div>
        <ul class="recommend-list">
            <li class="item" v-for="item of recomList" :key="item.id">
                <div class="img-wrapper">
                    <img :src="item.imgUrl">
                </div>
                <div class="innovation">
                    <p>{{item.title}}</p>
                    <p>{{item.info}}</p>
                    <button>查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data(){
        return {
            recomList:[
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_200x200_2f08733b.jpg',
                    title:'长隆野生动物世界',
                    info:'熊猫三胞胎与您共享欢乐时光',
                },{
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1601/3d/3dc7f222d6bca6a790.img.jpg_200x200_e0bb3017.jpg',
                    title:'广州花城汇MAG环球魔幻世界',
                    info:'汇集了全球各种酷炫游乐科技',
                },{
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
                    title:'美林湖温泉',
                    info:'低氡珍稀苏打温泉，极富养生特色',
                },{
                    id:'0004',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1812/3d/3d390fa6bce3bf49a3.img.png_200x200_3b8aa65e.png',
                    title:'广州正佳极地海洋世界',
                    info:'让孩子感知成人的苦与乐、忙碌与责任',
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
