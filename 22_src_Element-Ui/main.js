import Vue from 'vue'
import App from './App.vue'
//按需引入
import {Button,Row,Switch} from 'element-ui'



//引入ElementUi组件库
// import ElementUI from 'element-ui'
//引入ElementUi的全部样式
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
//应用ElementUi
// Vue.use(ElementUI)

Vue.component('aN-a-button',Button)
Vue.component('aN-a-row',Row)
Vue.component('aN-a-switch',Switch)

new Vue({
  el:'#app',
    render: h =>h(App),
    })
