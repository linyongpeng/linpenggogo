<template>
    <div>
       <city-header></city-header>
       <city-search></city-search>
       <city-list></city-list>
       <city-abc></city-abc>
    </div>
  
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
import CitySearch from '@/pages/city/components/Search'
import CityList from '@/pages/city/components/List'
import CityAbc from '@/pages/city/components/ABC'
export default {
  name: 'City',
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAbc
  }
}
</script>

<style>
</style>
