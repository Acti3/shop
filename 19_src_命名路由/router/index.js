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
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})