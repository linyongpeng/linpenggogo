<template>
    <div class="wrapper">
     <swiper :options="swiperOption">
            <swiper-slide  v-for="item in swiperList"  :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div> 
  </swiper>
    </div>
</template>
<script>
export default {
    name:"HomeSwiper",
    data(){
        return {
            swiperOption:{
                pagination:".swiper-pagination",
                loop:true
            },
            swiperList:[
                {
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/47/a51fe403715df102.jpg_750x200_085792b6.jpg'
                },
                {
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
                },
                 {
                     id:'003',
                     imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/b7/1e9c4ca462741f02.jpg_750x200_842d5261.jpg'
                },
                {
                    id:'004',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/b6/5c41d23b9bb36102.jpg_750x200_8d36a5db.jpg'
                },
                 {
                     id:'005',
                     imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
                },
                {
                    id:'006',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/47/a51fe403715df102.jpg_750x200_085792b6.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
 .wrapper /deep/  .swiper-pagination-bullet-active{
     background: #fff;
 }
    .wrapper{
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-bottom: 26.66%;
        background: #ccc;
        .swiper-img{
            width:100%;
            height: 100%;
        }
    }
</style>
