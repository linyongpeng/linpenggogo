<template>
    <div class="icons-table">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id"> 
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="icon-content">
                        <p>{{item.titie}}</p>
                    </div>
                </div>
            </swiper-slide>
             <div class="swiper-pagination"  slot="pagination"></div> 
          </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data(){
        return {
              swiperOption:{
                  pagination:".swiper-pagination"
              },
              iconsList:[
                    {
                        id:'0001',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        titie:'景点门票'
                    },{
                        id:'0002',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        titie:'广州必游'
                    },{
                        id:'0003',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        titie:'动植物园'
                    },{
                        id:'0004',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                        titie:'游乐场'
                    },{
                        id:'0005',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                        titie:'珠江夜游'
                    },{
                        id:'0006',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                        titie:'泡温泉'
                    },{
                        id:'0007',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        titie:'一日游'
                    },{
                        id:'0008',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
                        titie:'年终大促'
                    },{
                        id:'0009',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        titie:'玩转长隆'
                    },{
                        id:'0010',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                        titie:'全部玩乐'
                    }
                ]
        }
      
    },
    computed:{
        pages(){
            let pages = [];
            this.iconsList.forEach((item,index)=>{
                  let page =  Math.floor(index/8);
                    if(!pages[page]){
                        pages[page] = [];
                    }
                    pages[page].push(item);
            });
            return pages;
        }
    }
}
</script>
<style lang="less" scoped>
@import '~styles/value.less';
.icons-table /deep/ .swiper-slide-active{
    height: 0;
    padding-bottom: 50%;
    
}
.icons-table /deep/ .swiper-container-horizontal{
    overflow: visible;
}
.icons-table /deep/ .swiper-pagination-bullets{
    position: absolute;
    bottom: -0.4rem;
    border-bottom: 0.01rem solid rgba(0,0,0,0.2);
    padding: 0.05rem;
    
}
    .icons-table{
        width: 100%;
        height: 0;
        padding-bottom: 55%;
        
        .icon{
            width: 25%;
            height: 0;
            padding-bottom:25%;
            float: left;
            position: relative;
            .icon-img{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0.44rem;
                box-sizing: border-box;
                padding: 0.1rem;
                img{
                    height: 100%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .icon-content{
                position: absolute;
                bottom: 0;
                height: 0.44rem;
                width: 100%;
                line-height: 0.44rem;
                text-align: center;
                color:@fontColor;
                p{
                    .textEllipsis;
                }
            }
        }
    }
</style>
