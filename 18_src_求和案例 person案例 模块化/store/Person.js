import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced:true,
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('JIA_PER',value)
            }else{
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                Response=>{
                    context.commit('JIA_PER',{id:nanoid(),name:Response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        JIA_PER(state,value){   
            state.personList.unshift(value)
        }
    },
    getters:{
        FirstName(state){
            return state.personList[0].name
        }
    }
}