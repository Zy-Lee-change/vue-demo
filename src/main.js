
import Vue from 'vue'
import App from './App.vue'
import baseJs from './assets/common/common'
import router from './route'
import store from './store'

Vue.use(baseJs);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
