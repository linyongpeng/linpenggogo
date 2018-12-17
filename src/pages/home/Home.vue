<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
export default {
  name: 'App',
  components:{
      HomeHeader,
      HomeSwiper
  }
}
</script>

<style lang="less" scoped>
</style>
