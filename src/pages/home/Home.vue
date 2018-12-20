<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
import HomeIcons from '@/pages/home/components/Icons'
import HomeRecommend from '@/pages/home/components/Recommend'
import HomeWeekend from '@/pages/home/components/Weekend'
import axios from 'axios'
export default {
  name: 'App',
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  },
   created(){
    axios.get('/static/mock/index.json').then((suc)=>{
       this.$store.state.swiperList = suc.data.data.swiperList;
        this.$store.state.iconList = suc.data.data.iconList;
         this.$store.state.recommendList = suc.data.data.recommendList;
          this.$store.state.weekendList = suc.data.data.weekendList;
    },(err)=>{
      console.log('获取失败');
    })
  }
}
</script>

<style lang="less" scoped>
</style>
