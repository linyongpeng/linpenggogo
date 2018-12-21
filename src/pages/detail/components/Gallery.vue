<template>
    <div class="gallery" @click="close">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img :src="item" >
                </swiper-slide>
                <div class="swiper-pagination bottom-number"  slot="pagination"></div> 
            </swiper>      
        </div>
    </div>    
</template>
<script>
export default {
    name:"DetailGallery",
    props:['imgs'],
    data(){
        return {
            swiperOption:{
                pagination:".swiper-pagination",
                loop:true,
                paginationType:'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        close(){
            this.$emit('closeGallery');
        }
    }
}

</script>
<style lang="less" scoped>
.wrapper /deep/ .swiper-container{

    overflow:visible;
} 
    .gallery{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: #000;
        z-index: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        .wrapper{
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background: #fff;
            .bottom-number{
                bottom: -0.8rem;
                color: #fff;

            }
            img{
                width: 100%;
            }
        }
    }
</style>
