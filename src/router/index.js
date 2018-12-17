import Vue from 'vue'
import Router from 'vue-router'
import Home from 'D:/vue项目/travel/src/pages/home/Home'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            component:Home
        }
    ]
})