import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './store'
new Vue({
  el:'#app',
    render: h =>h(App),
    store,
    beforeCreate() {
      Vue.prototype.$bus=this
    },
})
