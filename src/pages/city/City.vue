<template>
    <div>
       <city-header></city-header>
       <city-search :cities="cities"></city-search>
       <city-abc  :cities="cities"></city-abc>
       <city-list :cities='cities' :hotcities="hotcities"></city-list>
    </div>
  
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
import CitySearch from '@/pages/city/components/Search'
import CityList from '@/pages/city/components/List'
import CityAbc from '@/pages/city/components/ABC'
import axios from 'axios'
export default {
  name: 'City',
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAbc
  },
  data(){
      return{
        hotcities:{},
        cities:[]
      }
  },
 created(){
      axios.get('/static/mock//city.json').then((suc)=>{
          this.hotcities = suc.data.data.hotCities;
          this.cities = suc.data.data.cities;
          
      },(err)=>{
          console.log('失败了');
      })
  }
}
</script>

<style>
</style>
