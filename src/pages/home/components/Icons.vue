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
              }
        }
      
    },
    computed:{
        pages(){
            let pages = [];
           this.$store.state.iconList.forEach((item,index)=>{
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
