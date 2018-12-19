import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[],
        defaultCity:'广州',
        letter:''
    },
    mutations:{
        changeLetter(state,val){
            state.letter = val;
            // console.log(val,state.letter)
        }
    }
})