<template>
<div>
    <div class="back-icon">
         <span class="iconfont" @click="$router.push('/')">&#xe624;</span>
        景点详情
        </div>
    <div class="banner">
        <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" @click="open">

        <div class="info">
            <div class="titile">
                大连圣亚海洋世界(AAAA景区)
            </div>
            <div class="img">
                <span class="iconfont">&#xe692;</span>
                2
            </div>
        </div>
    </div>    
    <detail-gallery :imgs="imgs" @closeGallery="close" v-show="showGallery"></detail-gallery>
</div>
</template>
<script>
import DetailGallery from '@/pages/detail/components/Gallery'
export default {
    name:"DetailBanner",
    components:{
        DetailGallery
    },
    data(){
        return {
            showGallery:false,
            imgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
                     "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
        }
    },
    methods:{
        close(){
            this.showGallery = false;
        },
        open(){
            this.showGallery = true;
        }
    }
}
</script>
<style lang="less" scoped>
@import '~styles/value.less';
    .back-icon{
        position:fixed;
        top: 0;
        left: 0;
        right:0;
        background: @color;
        height:.66rem;
        line-height: .66rem;
        opacity: 0.7;
        z-index: 1;
        text-align: center;
         color: #fff;
         font-size: .26rem;
        span{
            position: absolute;
            left: .2rem;
            color: #fff;
        }

    }
    .banner{
        position: relative;
        height: 0;
        padding-bottom: 55%;
        img{
            width: 100%;
        }
        .info{
            position: absolute;
            bottom: 0;
            left: 0;
            right:0;
            display: flex;
            color: #fff;
            height:.46rem;  
            line-height: .46rem;
            background:linear-gradient(top,rgba(0,0,0,0.4));
            .titile{
                flex:1;
                 padding: 0 .2rem;
                font-size: .24rem;
            }
            .img{
                padding: 0 .4rem;
           
            }
        }
    }
</style>
