import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import FastClick from 'fastclick'

//解决移动端300ms延迟
FastClick.attach(document.body)

import toast from '@/components/common/toast/index'
//安装toast插件
Vue.use(toast)
Vue.use(VueLazyload)
Vue.config.productionTip = false
import { Carousel,CarouselItem } from 'element-ui';
Vue.component('el-carousel', Carousel);
Vue.component('el-carousel-item', CarouselItem);
new Vue({
  el:'#app',
  router,
  store,
    render: h =>h(App),
    beforeCreate() {
      Vue.prototype.$bus = this
  },
    })
