import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/iconfont.css'
import wwhButton from './components/button'

Vue.config.productionTip = false

Vue.component(wwhButton.name, wwhButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
