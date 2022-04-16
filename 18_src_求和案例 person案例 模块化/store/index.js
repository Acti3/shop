//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import countAbout from './Count'
import personAbout from './Person'
//应用vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})
