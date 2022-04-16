//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'
const router = new VueRouter({
    mode:'hash',//默认hash #      还有history
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{tittle:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{tittle:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{tittle:'新闻'},
                },
                {
                    name:'xiaoxi',
                    path:'messages',
                    component:Messages,
                    meta:{isAuth:true,tittle:'消息'},
                    beforeEnter(to,from,next){
                        if(to.meta.isAuth){
                            if(localStorage.getItem('school')==='shouyi'){
                                next()
                            }else{
                                alert('学校名不对')
                            }
                        }else{
                            next()
                        }
                    },
                    children:[
                        {
                            name:'xijie',
                            path:'detail/:id/:tittle',
                            component:Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail
                            // props:{a:1,b:'hello'}
                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传递给detail组件
                            // props:true
                            //props的第三种写法，值为函数
                            props($router){
                                return{
                                id:$router.params.id,
                                tittle:$router.params.tittle
                            }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
//全局前置路由守卫--初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     if(to.meta.isAuth){//判断是否需要鉴权
//     // if(to.name==='xinwen'||to.name==='xiaoxi'){
//         // if(to.path==='/home/news'||to.path==='/home/messages'){
//         if(localStorage.getItem('school')==='shouyi'){
//             next()
//         }else{
//             alert('学校名不对！')
//         }
//     }else{
//         next()
//     }
// })
//全局后置路由守卫---初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from)
    document.title=to.meta.tittle||'硅谷系统'
}) 
export default router