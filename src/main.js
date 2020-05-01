import Vue from 'vue'
import fastClick from 'fastclick'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
