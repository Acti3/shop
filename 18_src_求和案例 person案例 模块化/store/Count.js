export default {
    namespaced:true,
    state:{
        sum : 0,
        school:'首义',
        subject:'计算机',
    },
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            state.sum+=value
        },
        JIAN(state,value){
            state.sum-=value
        }
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}