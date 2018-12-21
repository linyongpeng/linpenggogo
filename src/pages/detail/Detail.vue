<template>
    <div>
        <detail-banner></detail-banner>
        <detail-recursion :list="categoryList"></detail-recursion>
    </div>    
</template>
<script>
import DetailBanner from '@/pages/detail/components/Banner'
import DetailRecursion from '@/pages/detail/components/Recursion'
import axios from 'axios'
export default {
    name:"Detail",
    data(){
        return {
            categoryList:[]
        }
    },
    components:{
        DetailBanner,
        DetailRecursion
    },
    mounted(){
    axios.get('/static/mock/detail.json',{
        parm:this.$route.params.id
    }).then((suc)=>{   
        this.categoryList = suc.data.data.categoryList;
      },(err)=>{
          console.log('失败了');
      })
    }
}
</script>
<style lang="less" scoped>

</style>
