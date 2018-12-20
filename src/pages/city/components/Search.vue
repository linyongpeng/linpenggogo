<template>
    <div>
        <div class="city-search">
            <input v-model="keyword" type="text" placeholder="输出城市名或者拼音">
        </div>
        <div class="search-content" v-show="keyword.length">
            <ul class="result-list">
                <li class="result" v-for="item of resultlist" :key="item.id">{{item.name}}</li>
                 <li class="result" v-show="!this.resultlist.length">没有找到匹配的城市</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll';
export default {
    name:'CitySearch',
    props:['cities'],
    data(){
        return{
            keyword:'',
            timer:null,
            resultlist:[]
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer);
            }
            setTimeout(()=>{
                let result = [];
               for(let key in this.cities){
                   this.cities[key].forEach(val =>{
                       if(val.spell.indexOf(this.keyword)>-1 || val.name.indexOf(this.keyword)>-1){
                           result.push(val);
                       }
                   })
               }
               this.resultlist = result;
            },100)
        }
    },
    mounted(){
          this.scroll =  new Bscroll('.search-content');
    
    }
}
</script>

<style lang="less" scoped>
@import '~styles/value.less';
    .city-search{
        width: 100%;
        height: .72rem;
        padding: 0 .1rem;
        background:@color;
        box-sizing: border-box;
        input{
            // display: block;
            margin: 0 auto;
            width: 100%;
            height: .62rem;
            border-radius: .1rem;
            text-align: center;
            line-height:.62rem;
            font-size: .24rem;
            color: #666;
        }
    }
    .search-content{
        position: absolute;
        top: 1.58rem;
        left: 0;
        bottom: 0;
        right: 0;
        overflow:hidden;
        background:#eee;
        z-index: 2;
        .result{
            border-bottom: 0.02rem solid #ddd;
            line-height: .5rem;
            text-indent: 0.2rem;
            color: #666;
            background: #fff;
            font-size: 0.24rem;
        }
    }
</style>