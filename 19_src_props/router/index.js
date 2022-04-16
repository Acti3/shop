//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    name:'new',
                    path:'news',
                    component:News
                },
                {
                    path:'messages',
                    component:Messages,
                    children:[
                        {
                            name:'xijie',
                            path:'detail',
                            component:Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail
                            // props:{a:1,b:'hello'}
                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传递给detail组件
                            // props:true
                            //props的第三种写法，值为函数
                            props($router){
                                return{
                                id:$router.query.id,
                                tittle:$router.query.tittle
                            }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})