import Vue from 'vue'
import './plugins/element'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/base.less' // 公用样式
Vue.config.productionTip = false
Vue.prototype.$store = store
console.log(111)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
