//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//应用vuex插件
Vue.use(Vuex)

//准备action对象-响应组件中用户的动作
const actions = {
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    }
}
//准备mutations对象-修改state中的数据
const mutations = {
    JIA(state,value){
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    },
    JIA_PER(state,value){   
        state.personList.unshift(value)
    }
}
//准备state对象-保存具体的数据
const state = {
    sum : 0,
    school:'首义',
    subject:'计算机',
    personList:[
        {id:'001',name:'张三'}
    ]
}
//准备getters-用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
