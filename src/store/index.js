import Vue from 'vue'
import Vuex from 'vuex'
//安装插件
Vue.use(Vuex)
//创建store对象
export default new Vuex.Store({
    
 state : {
    carList:[]
},
 actions:{
    addCart(context,payload){
        return new Promise((resolve)=>{
            let oldProduct = context.state.carList.find(item=> item.iid===payload.iid)
        if(oldProduct){
            context.commit('addCounter',oldProduct)
            resolve('当前的商品数量+1')
        }else{
            payload.count=1
            payload.checked=true
            context.commit('addToCart',payload)
            resolve('添加购物车成功！')
        }
        })
    }
},
mutations :{
    addCounter(state,payload){
        payload.count++
    },
    addToCart(state,payload){
        state.carList.push(payload)
    },
    checked(state,i){
        state.carList[i].checked = !state.carList[i].checked
    }
},
getters:{
    carLength(state){
        return state.carList.length
    },
    carList(state){
        return state.carList
    }
}
})
