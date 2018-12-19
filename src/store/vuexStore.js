import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[],
        defaultCity:''
    }
})