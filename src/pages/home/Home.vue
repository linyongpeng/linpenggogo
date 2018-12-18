<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
import HomeIcons from '@/pages/home/components/Icons'
export default {
  name: 'App',
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons
  }
}
</script>

<style lang="less" scoped>
</style>
