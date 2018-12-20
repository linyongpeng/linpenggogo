import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[],
        defaultCity:localStorage.defaultCity || '广州',
        letter:''
    },
    mutations:{
        changeLetter(state,val){
            state.letter = val;
        },
        changeDefaultCity(state,val){
            state.defaultCity = val;
            localStorage.defaultCity = val;
        }
    }
})