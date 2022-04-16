import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../pages/home/Home'
import Category from '../pages/category/Category'
import Cart from '../pages/cart/Cart'
import Profile from '../pages/profile/Profile'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/category',
            component:Category
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/profile',
            component:Profile
        }

    ]
})